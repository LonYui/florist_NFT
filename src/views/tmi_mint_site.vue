<template>
  <IonHeader style="--min-height: 20% !important;	font-size: 80%;
	vertical-align: middle;">
    <IonToolbar >
      <IonRow class="ion-justify-content-end">
        <IonCol size="1">
      <IonIcon size="large" :icon="logoInstagram"></IonIcon>
        </IonCol>
        <IonCol size="1">
      <IonIcon size="large" :icon="logoDiscord"></IonIcon>
        </IonCol>
        <IonCol size="1">
      <IonIcon size="large" :icon="logoTwitter"></IonIcon>
        </IonCol >
        <IonCol size="1">
      opensea
        </IonCol>
      </IonRow>
      <IonTitle></IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>

  <h1>TMI</h1>
  <h2>too much Irene </h2>
  <h2>gallery</h2>
<!--  4:3-->
  <ion-slides :options="{ slidesPerView: 'auto', zoom: false, grabCursor: true }">
    <ion-slide  style="width: 12.5%; height: 16.6%;
    border: 2px solid #f8f8f8;
" v-for="img in imgs" v-bind:key="imgs.indexOf(img)">
      <ion-col>
        <ion-label>Card #{{ imgs.indexOf(img)+2 }}</ion-label>
        <ion-img style="pointer-events:none; border-radius: 12.5%;overflow: hidden;" :src="img"></ion-img>
      </ion-col>
    </ion-slide>
  </ion-slides>
  <vue-countdown :time="Math.abs(new Date('4/5/2022') - Date.now())" v-slot="{ days, hours, minutes, seconds }">
    mint date：{{'4/5/2022'}}
    Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
  </vue-countdown>
  <button @click="mint()" v-show="metamask_response.current?true:false">mint</button>
  <br/>
  <button @click="white_list_mint()" v-show="white_list.includes(metamask_response.current)">white_list_mint</button>
  <br/>
  <div v-if="metamask_response.current?true:false">
    <h1 v-if="metamask_response.network!=='mainnet'"> warn:this is testnet{{ metamask_response.network }}</h1>
    <p>current connect to :{{ metamask_response.current }}</p>
  </div>
  <div v-else>
    <button @click="connet_to_metamask()">connet_to_metamask</button>
  </div>
  <h2>team</h2>
  <IonRow class="ion-justify-content-center">
    <IonCol size="4">
      <metamask_avatar :username="teams['jeffrey']['username']"
                       :img_url="teams['jeffrey']['image_url']"
                       :member_balance="null"
                       :metamask_address="teams['jeffrey']['metamask_address']"
      />
    </IonCol>
    <IonCol size="4">
      <metamask_avatar :username="teams['kevin']['username']"
                       :img_url="teams['kevin']['image_url']"
                       :member_balance="null"
                       :metamask_address="teams['kevin']['metamask_address']" />
    </IonCol>
  </IonRow>
  </IonContent>

</template>

<script>
import {loadingController,
  IonSlides,IonSlide,IonImg,IonLabel,IonRow,IonCol,IonHeader,IonContent,IonToolbar, IonTitle,IonIcon} from '@ionic/vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
import metamask_avatar from '@/components/tab3/metamask_avatar';
import {logoTwitter,logoInstagram,logoDiscord} from 'ionicons/icons';
export default {
  name: "tmi_mint_site",
  components:{IonSlides,IonSlide,IonImg,IonLabel,IonRow,IonCol,IonHeader,IonContent,IonToolbar, IonTitle,IonIcon,
    VueCountdown,metamask_avatar},
  data() {
    return {
      imgs:[
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
      ],
      metamask_response: {
        network: 'rinkeby',
        current: '',
      },
      contract_address: '0x000000000',
      white_list: [],
      token_id: '123',
      teams:{
        'kevin':{username:'kevin',image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0H0AOijnTE9n6eWb2Cxqm9LOMJSLpA_NHw&usqp=CAU',metamask_address:'admin.ccb.eth'},
        'jeffrey':{username:'jeffrey',image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-U1ZM7J9dnweXdxds19sBW3Vh5uTR-mt6MQ&usqp=CAU',metamask_address:'jeffrey.eth'}
      }
    }
  },
  methods: {
    async mint() {
      if (!this.metamask_response.current) {
        alert('plz conn to web3')
        return
      }
      const loading = await loadingController
          .create({
            message: '等待交易',
            duration: 9999 * 1000,
          });
      await loading.present();

      // TODO execute abi - mint  return contract_address and token_id
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(4000);
      // TODO end

      loading.dismiss()
      alert(`get ${this.contract_address}#${this.token_id}`)

    },
    async white_list_mint() {
      if (!this.metamask_response.current) {
        alert('plz conn to web3')
        return
      }
      if (!this.white_list.includes(this.metamask_response.current)) {
        alert('ur not in whitelist')
        return
      }
      const loading = await loadingController
          .create({
            message: '等待交易',
            duration: 9999 * 1000,
          });
      await loading.present();

      // TODO execute abi - white_list_mint  return contract_address and token_id
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(4000);
      // TODO end

      loading.dismiss()
      alert(`get ${this.contract_address}#${this.token_id}`)

    },
    connet_to_metamask() {
      // TODO metamask login
      // metamask login end
      this.metamask_response = {
        network: 'rinkeby',
        current: 'david.eth',
      }
      alert(`connect to ${this.metamask_response.current}`)
    },
    abi_get_contract_whitelist() {
      return ['david.eth', '0x24f40E6c01E8f5A33cf003Ba666D78dcE1577A42']
    }
  },
  mounted() {
    this.white_list = this.abi_get_contract_whitelist()
  },
  setup() {
    return {
      logoTwitter,logoInstagram,logoDiscord
    }
  },
}
</script>

<style scoped>

</style>