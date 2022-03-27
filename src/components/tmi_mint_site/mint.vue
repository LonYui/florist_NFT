<template>


  <div v-if="isMetamaskInstalled">
    <div v-if="address">
      <IonText color="danger">
        <h1 v-if="ethereum_network!=='Mainnet'"> warn:this is testnet {{ethereum_network}}</h1>
      </IonText>
      <div>{{ currentStageName }}</div>
      <div>{{new Date(currentStageStartTime * 1000)}}</div>
      <div>~</div>
      <div>{{new Date(currentStageEndTime * 1000)}}</div>
      <div>{{ totalSupply }} / {{ collectionSize }}</div>
      <div>{{ mintPrice }} ETH</div>

      <p>current connect to :{{ address }}</p>

      <div v-if="isLocked">
        <button disabled>Coming Soon</button>
        <VueCountdown  :time="Math.abs(new Date(currentStageStartTime * 1000) - Date.now())" v-slot="{ days, hours, minutes, seconds }">
          Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
        </VueCountdown>

      </div>
      <div v-else-if="!isInWhitelist">
        mint is on!
        <button disabled>Not in Whitelist</button>
      </div>
      <div v-else>
        mint is on!
        <button @click="mint()">Mint</button>
      </div>

      <div v-if="transactionTxHash">
        <span>Mint successfully, please check </span>
        <a :href="`${etherscanUrl}tx/${transactionTxHash}`" target="_blank"
        >Etherscan</a
        >
      </div>
    </div>
    <div v-else>
      <button @click="connectMetamask()">connet_to_metamask</button>
    </div>
  </div>
  <div v-else>Please install MetaMask</div>

</template>

<script>
import { onUnmounted, ref, watch } from "vue";
import { useEthers, useWallet } from "vue-dapp";
import { ethers } from "ethers";
import {
  initialContract,
  checkAndSwitchChain,
  fetchWhitelistTicket,
  etherscanUrl,
} from "@/helpers";
import {loadingController} from "@ionic/vue";
import VueCountdown from '@chenfengyuan/vue-countdown';

const { connect } = useWallet();
const { address, signer } = useEthers();

const saleStages = ["Whitelist", "Public Sale"];
const gasLimit = 285000;
const mintAmount = 1;


export default {
  name: "mint",
  components: {VueCountdown,},
  setup() {
    const totalSupply = ref(0);
    const collectionSize = ref(0);
    const currentStageName = ref("");
    const currentStageStartTime = ref(0);
    const currentStageEndTime = ref(0);
    const mintPrice = ref("0");
    const isLocked = ref(true);
    const isInWhitelist = ref(false);
    const transactionTxHash = ref("");

    const contract = initialContract(checkAndSwitchChain);
    const isMetamaskInstalled = Boolean(contract);

    if (isMetamaskInstalled) {
      const fetchContractData = async () => {
        const [_totalSupply, _collectionSize] = await Promise.all([
          contract.totalSupply(),
          contract.collectionSize(),
        ]);

        totalSupply.value = _totalSupply;
        collectionSize.value = _collectionSize;

        let currentSaleIndex = -1;
        let isSaleRoundValid = false;
        let saleConfig = null;
        let stageName = "";
        let startTime = "0",
            endTime = "0";
        let price = 0;
        while (!isSaleRoundValid && currentSaleIndex < 2) {
          currentSaleIndex++;

          saleConfig = await contract.saleConfigs(currentSaleIndex);
          startTime = saleConfig["startTime"];
          endTime = saleConfig["endTime"];
          stageName = saleStages[saleConfig["stage"]];
          price = saleConfig["price"];
          const now = Math.floor(new Date().getTime() / 1000);

          if (parseInt(startTime) > now) {
            break;
          }
          isSaleRoundValid =
              parseInt(startTime) <= now && parseInt(endTime) >= now;
        }

        if (currentSaleIndex < 0) {
          currentSaleIndex = 0;
        }

        currentStageName.value = stageName;
        mintPrice.value = ethers.utils.formatEther(price);

        currentStageStartTime.value = startTime;
        currentStageEndTime.value = endTime;
      };
      fetchContractData();

      watch([address, currentStageName], async ([address, stageName]) => {
        const loading = await loadingController.create({
          message: "Loading",
          duration: 9999 * 1000,
        });
        await loading.present();

        if (address) {
          if (stageName === "Whitelist") {
            const {signature, ticket} = await fetchWhitelistTicket(address);
            if (signature) {
              const isTicketAvailable = await contract.isTicketAvailable(
                  ticket,
                  signature,
                  {from: address}
              );

              isInWhitelist.value = isTicketAvailable;
            } else {
              isInWhitelist.value = false;
            }
          } else if (stageName) {
            isInWhitelist.value = true;
          }
        }

        await loading.dismiss();
      });

      watch(
          [currentStageStartTime, currentStageEndTime],
          ([startTime, endTime]) => {
            const now = Math.floor(new Date().getTime() / 1000);
            if (startTime > now) {
              isLocked.value = true;
            } else if (endTime > now) {
              isLocked.value = false;
            }
          }
      );

      const tId = setInterval(() => fetchContractData(), 1000);
      onUnmounted(() => clearInterval(tId));
    }

    const connectMetamask = async () => {
      const loading = await loadingController.create({
        message: "Connecting Metamask",
        duration: 9999 * 1000,
      });
      await loading.present();
      await connect("metamask");

      loading.dismiss();
    };

    const mint = async () => {
      const loading = await loadingController.create({
        message: "等待交易",
        duration: 9999 * 1000,
      });
      await loading.present();

      let totalGasLimit = String(gasLimit * mintAmount);
      const etherValue = ethers.utils.parseEther(mintPrice.value);

      try {
        let receipt;
        if (currentStageName.value === "Whitelist") {
          const {signature, ticket} = await fetchWhitelistTicket(
              address.value
          );
          receipt = await contract
              .connect(signer.value)
              .whitelistMint(mintAmount, ticket, signature, {
                from: address.value,
                gasLimit: totalGasLimit,
                value: etherValue.toString(),
              });
        } else {
          receipt = await contract.connect(signer.value).mint(mintAmount, {
            from: address.value,
            gasLimit: totalGasLimit,
            value: etherValue.toString(),
          });
        }
        transactionTxHash.value = receipt.hash;
      } catch (err) {
        console.log(err);
      }

      await loading.dismiss();
      window.location.reload()
    };

    return {
      address,
      isLocked,
      isInWhitelist,
      isMetamaskInstalled,
      mintPrice,
      totalSupply,
      collectionSize,
      currentStageName,
      etherscanUrl,
      transactionTxHash,
      connectMetamask,
      mint,
      currentStageStartTime,
      currentStageEndTime,
    };
  },
  computed: {
    ethereum_network(){
      if (window.ethereum.networkVersion === '1') return 'Mainnet'
      if (window.ethereum.networkVersion === '42') return 'Kovan'
      if (window.ethereum.networkVersion === '3') return 'Ropsten'
      if (window.ethereum.networkVersion === '4') return 'Rinkeby'
      if (window.ethereum.networkVersion === '5') return 'Goerli'
      return ''
    }
  },
}
</script>
