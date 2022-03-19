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
" class="ion-text-center"
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
    <div name="roadmap" style="  --background: none;
  background-image: url('https://s3.us-east-2.amazonaws.com/asset.roarrr.io/mint_site%E5%A4%A7%E7%90%86%E7%9F%B3%E8%83%8C%E6%99%AF.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
">
    <h2 class="ion-text-uppercase" style="font-size: 300%;">roadmap</h2>
      <IonRow>
        <IonCol>

          <img src="https://s3.us-east-2.amazonaws.com/asset.roarrr.io/TMI+Lion+Logo.png">
        </IonCol>

        <IonCol size="1">
          <img src="https://s3.us-east-2.amazonaws.com/asset.roarrr.io/text_X.png">

        </IonCol>
        <IonCol>
          <img src="https://s3.us-east-2.amazonaws.com/asset.roarrr.io/GIOIA+PAN+%E6%BD%98%E6%80%A1%E8%89%AF-%E4%B8%AD%E8%8B%B1%E6%96%87%E6%A9%AB%E5%BC%8F-LOGO-%E7%99%BD+1.png">
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol style="  border-color: white;
  border-width: .25em;
  border-style:solid; margin-bottom : -1px;
  margin: 10px; "
        >
          <h3>第一年規劃</h3>
          <hr style="height:2px;border-width:0;color:white;background-color:white"/>
          <h3>首波限量:588張</h3>
        </IonCol>
        <IonCol style="  border-color: white;
  border-width: .25em;
  border-style:solid; margin-bottom : -1px;
  margin: 10px; "
        >
          <h3>第二年規劃</h3>
          <hr style="height:2px;border-width:0;color:white;background-color:white"/>
          <h3>今年10月公布</h3>
          <h3>預告</h3>
        </IonCol>
        <IonCol style="  border-color: white;
  border-width: .25em;
  border-style:solid; margin-bottom : -1px;
  margin: 10px; "
        >
          <h3>第三年規劃</h3>
          <hr style="height:2px;border-width:0;color:white;background-color:white"/>
          <h3>明年3月公布</h3>
          <h3>預告</h3>
        </IonCol>

      </IonRow>
    </div>
    <br/>
    <div name="partner" style="  --background: none;
  background-image: url('https://s3.us-east-2.amazonaws.com/asset.roarrr.io/giona+pan+nft+background1.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
" class="ion-text-left">
      <h2 class="ion-text-uppercase" style="font-size: 300%; text-align: center">partner</h2>
      <IonRow>
        <IonCol size="4">
      <img src="https://s3.us-east-2.amazonaws.com/asset.roarrr.io/2021%E6%BD%98%E6%80%A1%E8%89%AF%E8%A8%AD%E8%A8%88%E5%B8%AB%E7%B0%A1%E4%BB%8B(1)-3+1.png"/>
        </IonCol>
        <IonCol size="8">
          <p>潘怡良設計師，自2001年自創GIOIA PAN品牌，深耕高級時尚多年，屢獲時尚大獎， 高曝光</p>
          <p>知名度也成各大國際品牌爭相邀請合作｡産品範圍跨度廣泛，獨家創意特色差異化，生産製造</p>
          <p>資源及外貿經驗，時尚評審及教學經驗，流行趨勢權威及造型諮詢顧問｡ 各種時尚設計豐富資源的人脈平臺，結合食衣住行育樂整體生活美學的時尚概念大師｡</p>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="1"/>
        <IonCol>
      <p>食：多年與美酒美食業者結盟合作(Beaujolais, Taittinger Champagne, Bombay Sapphire, Godiva</p>
      <p>Chocolatier, Diamond Tony’s 101, Grand Formosa Regency, Grand Hyatt)</p>
      <p>衣：各界時尚名人(演藝明星、世界小姐、APEC首席代表、企業團隊服制服設計)</p>
      <p>住：裝置藝術工程、家居用品設計</p>
      <p>行：賓士、奧迪、BMW 、大衆汽車</p>
      <p>育：服裝設計大賽、模特大賽評審</p>
      <p>樂：明星影視發布會(楊謹華、張震、黃曉明、胡歌、林志玲等)、演唱會、時尚活動媒體評論</p>
        </IonCol>
      </IonRow>
    </div>
    <div name="artist" style="font-size: 300%">
      <h2 class="ion-text-uppercase" style="font-size: 200%" >artist</h2>
      <IonRow >
        <IonCol size="4">
          <img src="https://s3.us-east-2.amazonaws.com/asset.roarrr.io/MIKHAIL+ANDERSSON_lion.png"/>
        </IonCol>
        <IonCol>
          MIKHAIL ANDERSSON
        </IonCol>
      </IonRow>
      <IonText color="danger"><p style="text-align: end">More...</p></IonText>
    </div>
    <div name="gallery">
      <h2 class="ion-text-uppercase" style="font-size: 300%;">gallery</h2>
<!--  4:3-->
  <ion-slides :options="{ slidesPerView: 'auto', zoom: false, grabCursor: true }">
    <ion-slide  style="width: 16.6%; height: 22.1%;
    border: 2px solid #f8f8f8;
" v-for="img in imgs" v-bind:key="imgs.indexOf(img)">
      <ion-col>
        <ion-label>Card #{{ imgs.indexOf(img)+2 }}</ion-label>
        <ion-img style="pointer-events:none; border-radius: 12.5%;overflow: hidden;" :src="img"></ion-img>
      </ion-col>
    </ion-slide>
  </ion-slides>
    </div>
    <div name="team" class="ion-text-left">
      <h2 class="ion-text-uppercase" style="font-size: 300%;">team</h2>
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
    <div style="height: 30%"></div>
  </IonContent>
  <IonFooter style="--min-height: 20% !important;	font-size: 80%;vertical-align: middle;"
             class="ion-text-center">
  </IonFooter>
</template>

<script>
import {loadingController,
  IonSlides,IonSlide,IonImg,IonLabel,IonRow,IonCol,IonHeader,IonContent,IonToolbar, IonTitle,IonIcon,IonButton,IonText,IonFooter} from '@ionic/vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
import metamask_avatar from '@/components/tab3/metamask_avatar';
import {logoTwitter,logoInstagram,logoDiscord} from 'ionicons/icons';
export default {
  name: "tmi_mint_site",
  components:{IonSlides,IonSlide,IonImg,IonLabel,IonRow,IonCol,IonHeader,IonContent,IonToolbar, IonTitle,IonIcon,IonButton,IonText,IonFooter,
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