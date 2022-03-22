<template>
  <div>
    <h1>TMI</h1>
    <h2>too much Irene</h2>
    <h2>gallery</h2>
    <!--  4:3-->
    <ion-slides
      :options="{ slidesPerView: 'auto', zoom: false, grabCursor: true }"
    >
      <ion-slide
        style="width: 12.5%; height: 16.6%; border: 2px solid #f8f8f8"
        v-for="img in imgs"
        v-bind:key="imgs.indexOf(img)"
      >
        <ion-col>
          <ion-label>Card #{{ imgs.indexOf(img) + 2 }}</ion-label>
          <ion-img
            style="pointer-events: none; border-radius: 12.5%; overflow: hidden"
            :src="img"
          ></ion-img>
        </ion-col>
      </ion-slide>
    </ion-slides>
    <button @click="mint()" v-show="metamask_response.current ? true : false">
      mint
    </button>
    <br />
    <button
      @click="white_list_mint()"
      v-show="white_list.includes(metamask_response.current)"
    >
      white_list_mint
    </button>
    <br />

    <div v-if="isMetamaskInstalled">
      <div v-if="address">
        <div>{{ currentStageName }}</div>
        <div>{{ totalSupply }} / {{ collectionSize }}</div>
        <div>{{ mintPrice }} ETH</div>

        <div v-if="isLocked">
          <button disabled>Coming Soon</button>
        </div>
        <div v-else>
          <button>Mint</button>
        </div>
      </div>
      <div v-else>
        <button @click="connectMetamask()">connet_to_metamask</button>
      </div>
    </div>
    <div v-else>Please install MetaMask</div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated, onUnmounted, ref, watch } from "vue";
import {
  loadingController,
  IonSlides,
  IonSlide,
  IonImg,
  IonLabel,
} from "@ionic/vue";
import { useEthers, useWallet } from "vue-dapp";
import { ethers } from "ethers";
import { initialContract } from "../helpers";

const networkId = Number(process.env.VUE_APP_NETWORK_ID || "1");

const { connect, onAccountsChanged } = useWallet();
const { address } = useEthers();

const saleStages = ["Whitelist", "Public Sale"];

export default {
  name: "tmi_mint_site",
  components: { IonSlides, IonSlide, IonImg, IonLabel },
  setup() {
    const totalSupply = ref(0);
    const collectionSize = ref(0);
    const currentStageName = ref("");
    const currentStageStartTime = ref(0);
    const currentStageEndTime = ref(0);
    const mintPrice = ref("0");
    const isLocked = ref(true);

    const checkChain = async (currentChainId) => {
      if (currentChainId !== networkId) {
        try {
          window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `0x${networkId.toString(16)}` }],
          });
        } catch (error) {
          console.error(error);
        }
      }
    };

    const contract = initialContract(checkChain);
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

      onAccountsChanged((accounts) => {
        console.log(accounts);
      });

      watch(address, (address) => {
        console.log(address);
      });

      watch(currentStageStartTime, (startTime) => {
        const now = new Date().getTime();
        if (startTime > now) {
          isLocked.value = true;
        } else if (currentStageEndTime.value > now) {
          isLocked.value = false;
        }
      });

      const tId = setInterval(() => fetchContractData(), 1000);
      onUnmounted(() => clearInterval(tId));
    }

    const connectMetamask = async () => {
      connect("metamask");
    };

    return {
      address,
      isLocked,
      isMetamaskInstalled,
      mintPrice,
      totalSupply,
      collectionSize,
      currentStageName,
      connectMetamask,
    };
  },
  data() {
    return {
      imgs: [
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
      ],
      metamask_response: {
        network: "rinkeby",
        current: "",
      },
      contract_address: "0x000000000",
      white_list: [],
      token_id: "123",
    };
  },
  methods: {
    async mint() {
      if (!this.metamask_response.current) {
        alert("plz conn to web3");
        return;
      }
      const loading = await loadingController.create({
        message: "等待交易",
        duration: 9999 * 1000,
      });
      await loading.present();

      // TODO execute abi - mint  return contract_address and token_id
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      await delay(4000);
      // TODO end

      loading.dismiss();
      alert(`get ${this.contract_address}#${this.token_id}`);
    },
    async white_list_mint() {
      if (!this.metamask_response.current) {
        alert("plz conn to web3");
        return;
      }
      if (!this.white_list.includes(this.metamask_response.current)) {
        alert("ur not in whitelist");
        return;
      }
      const loading = await loadingController.create({
        message: "等待交易",
        duration: 9999 * 1000,
      });
      await loading.present();

      // TODO execute abi - white_list_mint  return contract_address and token_id
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      await delay(4000);
      // TODO end

      loading.dismiss();
      alert(`get ${this.contract_address}#${this.token_id}`);
    },
    connet_to_metamask() {
      // TODO metamask login
      // metamask login end
      this.metamask_response = {
        network: "rinkeby",
        current: "david.eth",
      };
      alert(`connect to ${this.metamask_response.current}`);
    },
    abi_get_contract_whitelist() {
      return ["david.eth", "0x24f40E6c01E8f5A33cf003Ba666D78dcE1577A42"];
    },
  },
  mounted() {
    this.white_list = this.abi_get_contract_whitelist();
  },
};
</script>

<style scoped></style>
