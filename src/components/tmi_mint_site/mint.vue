<template>


  <div v-if="isMetamaskInstalled" class="ion-text-center">
    <div v-if="address">
      <IonText color="danger"><h1 v-if="ethereum_network!=='Mainnet'"> warn:this is testnet {{ethereum_network}}</h1></IonText>
      <IonText color="light"><h1><br/>{{ currentStageName }}</h1></IonText>
      <IonText color="light"><p><br/>{{new Date(currentStageStartTime * 1000)}}</p></IonText>
      <IonText color="light"><p><br/>~</p></IonText>
      <IonText color="light"><p><br/>{{new Date(currentStageEndTime * 1000)}}</p></IonText>
      <IonText color="light"><p><br/>{{ totalSupply }} / {{ collectionSize }}</p></IonText>
      <IonText color="light"><p><br/>{{ mintPrice }} ETH</p></IonText>

      <IonText color="light"><p><br/>current connect to :{{ address }} (isInWhitelist:{{amiInWhitelist}})</p></IonText>
      <br/>
      <div v-if="isLocked">
        <button disabled>Coming Soon</button>
        <br/><VueCountdown  :time="Math.abs(new Date(currentStageStartTime * 1000) - Date.now())" v-slot="{ days, hours, minutes, seconds }">
        <IonText color="light"><p>Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.</p></IonText>
        </VueCountdown>
      </div>
      <div v-else-if="!isInWhitelist">
        <IonText color="light"><p>mint is on!</p></IonText>
        <br/>><button disabled>Not in Whitelist (or exceed max mint)</button>
      </div>
      <div v-else>
        <IonText color="light"><p>mint is on!</p></IonText>
        <br/>><button @click="mint()">Mint</button>
        <br/><VueCountdown  :time="Math.abs(new Date(currentStageEndTime * 1000) - Date.now())" v-slot="{ days, hours, minutes, seconds }">
        <IonText color="light"><p>Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.</p></IonText>
      </VueCountdown>

      </div>

      <div v-if="transactionTxHash">
        <span>Mint successfully, please check </span>
        <a :href="`${etherscanUrl}tx/${transactionTxHash}`" target="_blank"
        >Etherscan</a
        >
      </div>
      <div style="width: 100px;height: 5000px"/>
      <button @click="找到寶藏()">
      <img src="https://cdn-icons.flaticon.com/png/128/3943/premium/3943721.png?token=exp=1651497040~hmac=8b4e117c5e782eb1305f030bb49c5490">
      </button>
      <a v-if="抽獎顯示" class="e-widget no-button" :href="slice.primary.gleam_embed" rel="nofollow" >
        {{ slice.primary.gleam_title }}
      </a>

    </div>
    <div v-else>
      <button @click="connectMetamask()">connet_to_metamask</button>
    </div>
  </div>
  <div v-else>
    <IonText color="light"><h1>Please install MetaMask</h1></IonText>
  </div>

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
import {loadingController,IonText} from "@ionic/vue";
import VueCountdown from '@chenfengyuan/vue-countdown';

const { connect } = useWallet();
const { address, signer } = useEthers();

const saleStages = ["Whitelist Mint", "Public Mint"];
const gasLimit = 285000;
const mintAmount = 1;


export default {
  name: "mint",
  components: {VueCountdown,IonText},
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
    const amiInWhitelist = ref(false);

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
          if (stageName === saleStages[0]) {
            const {signature, ticket} = await fetchWhitelistTicket(address);
            if (signature) {
              const isTicketAvailable = await contract.isTicketAvailable(
                  ticket,
                  signature,
                  {from: address}
              );
              isInWhitelist.value = isTicketAvailable;
              amiInWhitelist.value = true;
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
        if (currentStageName.value === saleStages[0]) {
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
      amiInWhitelist,
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
    },
    "screen_length"(){
      return window.screen.width
    }
  },
  created(){
    document.title = "鑄造" + document.title.substr(document.title.indexOf("｜"),999)
  },
  mounted() {
    let gleam = document.createElement('script')
    gleam.setAttribute('src', 'https://js.gleam.io/e.js')
    document.head.appendChild(gleam)
  },
  data(){
    return {
      slice:{
        primary:{
          gleam_embed:'https://gleam.io/YfFj7/-nft-',
          gleam_title:'找到寶藏！留下地址加入白單'
        }
      },
      抽獎顯示:false
    }
  },
  methods:{
    找到寶藏(){
      this.抽獎顯示=true
    }
  }

}
</script>
<style scoped>
IonText {
  white-space: pre-line;
}
p{
 background-color: rgba(0,31,220,0.87) ;
  display: inline;
}
h1{
  background-color: rgba(0,31,220,0.87) ;
  display: inline;
}

</style>