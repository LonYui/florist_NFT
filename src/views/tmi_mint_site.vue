<template>
  <IonHeader style="--min-height: 20% !important;	font-size: 80%;vertical-align: middle;"
             class="ion-text-center"
  >
    <h1>TMI Lion</h1>
    <IonToolbar >
      <IonRow class="ion-justify-content-start">
          <IonCol size="1">
            about
          </IonCol>
          <IonCol size="1">
            roadmap
          </IonCol>
          <IonCol size="1">
            partner&artist
          </IonCol>
          <IonCol size="1">
            gallery
          </IonCol>
          <IonCol size="1">
            team
          </IonCol>

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
  <IonContent style="--ion-background-color:black; --ion-text-color: white ;
--ion-font-family: 'Noto Sans TC';
"
              class="ion-text-center"
  >
    <div name="mint">
    <IonButton @click="mint()" v-show="metamask_response.current?true:false">mint</IonButton>
    <IonButton @click="white_list_mint()" v-show="white_list.includes(metamask_response.current)">white_list_mint</IonButton>
    <div v-if="metamask_response.current?true:false">
      <IonText color="danger">
      <h1 v-if="metamask_response.network!=='mainnet'"> warn:this is testnet{{ metamask_response.network }}</h1>
      </IonText>
      <p>current connect to :{{ metamask_response.current }}</p>
    </div>
    <div v-else>
      <IonButton @click="connet_to_metamask()">connet_to_metamask</IonButton>
    </div>
  <vue-countdown :time="Math.abs(new Date('4/5/2022') - Date.now())" v-slot="{ days, hours, minutes, seconds }">
    mint date：{{'4/5/2022'}}
    Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
  </vue-countdown>
    </div>
    <div name="about" style="  --background: none;
  background: #847E7E80;
  background-image: url('https://s3.us-east-2.amazonaws.com/asset.roarrr.io/Lion_logo2+1.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 54vw;
">
      <h2 style="font-size: 300%;" class="ion-text-uppercase">about</h2>
      <br/>
      <h3 style="font-size: 180%;">當科技與藝術相遇，超越現實的收藏價值。</h3>
      <br/>
      <p>TMI Lion 是一個來自臺灣的團隊</p>
      <p>TMI是Too Much Information的縮寫，目標是帶給大家最多元的內容</p>
      <p>並從台灣出發接軌國際，</p>
      <p>本次NFT就是臺灣知名服裝設計師潘怡良搭配全球票選紐約十大刺青店的經營者</p>
      <p>Mikhail andersson合作發行，並邀請三大影帝- 李康生，溫昇豪，黃河，與兩大國際才女DJ Rayray，共襄盛舉，成為第一批持有者</p>
      <br/>
      <p>之後每個月都會舉辦不一樣的線下活動，並持續邀請明星藝人參與，也會將部分收益捐給公益團體，</p>
      <p>希望從藝術及時尚開始，打造一個超越所有人想像，最多元化的項目</p>
      <br/>
      <h4 style="font-size: 150%;">團隊願景</h4>
      <h4 style="font-size: 150%;">線上結合線下、虛擬串接真實，讓更多人共襄盛舉</h4>
      <br/>
      <br/>
    </div>
    <div name="gallery">
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
    </div>
    <div name="team">
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
    </div>
  </IonContent>

</template>

<script>
import {loadingController,
  IonSlides,IonSlide,IonImg,IonLabel,IonRow,IonCol,IonHeader,IonContent,IonToolbar, IonTitle,IonIcon,IonButton,IonText,} from '@ionic/vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
import metamask_avatar from '@/components/tab3/metamask_avatar';
import {logoTwitter,logoInstagram,logoDiscord} from 'ionicons/icons';
export default {
  name: "tmi_mint_site",
  components:{IonSlides,IonSlide,IonImg,IonLabel,IonRow,IonCol,IonHeader,IonContent,IonToolbar, IonTitle,IonIcon,IonButton,IonText,
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