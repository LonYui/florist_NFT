<template>
  <IonHeader style="--min-height: 20% !important;	font-size: 80%;vertical-align: middle;"
             class="ion-text-center"
  >
    <IonToolbar color="dark">
      <IonRow class="ion-justify-content-end">
<!--          <IonCol size="1">-->
<!--            <a href="/tmi_mint_site#about">about</a>-->
<!--          </IonCol>-->
<!--          <IonCol size="1">-->
<!--            <a href="/tmi_mint_site#roadmap">roadmap</a>-->
<!--          </IonCol>-->
<!--          <IonCol size="1">-->
<!--            <a href="/tmi_mint_site#partner">partner</a>-->
<!--          </IonCol>-->
<!--          <IonCol size="1">-->
<!--            <a href="/tmi_mint_site#gallery">gallery</a>-->
<!--          </IonCol>-->
<!--          <IonCol size="1">-->
<!--            <a href="/tmi_mint_site#team">team</a>-->
<!--          </IonCol>-->

        <IonCol size="1">
          <a href="https://www.instagram.com/tmi.lion/">
      <IonIcon size="large" :icon="logoInstagram"></IonIcon>
          </a>
        </IonCol>
        <IonCol size="1">
          <a href="https://discord.gg/pfgwjUbd">
      <IonIcon size="large" :icon="logoDiscord"></IonIcon>
          </a>
        </IonCol>
        <IonCol size="1">
          <a href="https://twitter.com/tmi_lion/">
      <IonIcon size="large" :icon="logoTwitter"></IonIcon>
          </a>
        </IonCol >
        <IonCol size="1">
          <a href="https://testnets.opensea.io/collection/gioia-pan-x-too-much-information-lion">
            <p>opensea</p>
          </a>
        </IonCol>
      </IonRow>
      <IonTitle></IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent style="--ion-background-color:black; --ion-text-color: white ;
--ion-font-family: 'Noto Sans TC';
" class="ion-text-center"
  >
        <h1 style="font-size: 300%;">TMI Lion</h1>
    <div id="mint" v-if="false">
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
    <div id="mint325" v-if="this.mint_psw==='90818910'">
          <Lottie :options="defaultOptions" style="width: 20%;height: 30%;" @animCreated="handleAnimation" v-show="anim?!anim._idle:false"/>
          <IonButton @click="mint325()" v-show="is_mint325_show" color="dark">mint</IonButton>
      <IonRow class="ion-justify-content-center" v-show="is_nft_show">
        <IonCol size="6">
          <IonImg :src="`https://s3.us-east-2.amazonaws.com/asset.roarrr.io/0322_GP_1600X900_00${display_nft_token_id}.png`" ></IonImg>
        </IonCol>
      </IonRow>
    </div>
    <div id="about" style="  --background: none;
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
    <div id="roadmap" style="  --background: none;
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
<!--          <h3>首波限量:588張</h3>-->
          <h3>1.首波限定，往後 TMI Lion</h3>
            <h3>系列 NFT 的 Mint PASS</h3>
<br/>
          <h3>2.終身不定期舉辦獅出有名會員</h3>
          <h3>專屬線下時尚派對</h3>
<br/>
          <h3>3.終生不定期空投澎派禮物包</h3>
        </IonCol>
        <IonCol style="  border-color: white;
  border-width: .25em;
  border-style:solid; margin-bottom : -1px;
  margin: 10px; "
        >
          <h3>第二年規劃</h3>
          <hr style="height:2px;border-width:0;color:white;background-color:white"/>
<!--          <h3>今年10月公布</h3>-->
          <h3>1.終身會員VIP 5折</h3>
          <br/>
          <h3>2.連續3年每季空投高質感高磅數服飾</h3>
            <h3>(隨季節不同 T-Shirt或帽T</h3>
          <br/>
          <h3>3.連續三年台灣地區潘老師秀展(兩場)20名</h3>
          <br/>
          <h3>4.連續三年非台灣地區潘老師秀展(一場)10名</h3>
          <br/>
          <h3>5.四月抽出 2022 秋冬新款上衣</h3>
          <br/>
          <h3>6.不定期舉辦潘怡良專屬線下聚會</h3>
        </IonCol>
        <IonCol style="  border-color: white;
  border-width: .25em;
  border-style:solid; margin-bottom : -1px;
  margin: 10px; "
        >
          <h3>第三年規劃</h3>
          <hr style="height:2px;border-width:0;color:white;background-color:white"/>
          <h3>陸續規劃中
            敬請期待</h3>
        </IonCol>

      </IonRow>
    </div>
    <br/>
    <div id="partner" style="  --background: none;
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
    <div id="artist" >
      <h2 class="ion-text-uppercase" style="font-size: 200%" >artist</h2>
      <IonRow >
        <IonCol size="4">
          <img src="https://s3.us-east-2.amazonaws.com/asset.roarrr.io/%E5%A7%8A%E5%A7%8A%E5%89%8D%E7%94%B7%E5%8F%8B%E7%B4%90%E7%B4%84%E5%88%BA%E9%9D%92%E5%B8%AB.png"/>
        </IonCol>
        <IonCol>
          <p>由知名紋身藝術家 : Mikhail Andersson親自操刀設計。</p>
          <p>設計主軸“獅子頭“，代表的是TMI Lion俱樂部王者風範！</p>
          <br/>
        <p>⚡紋身藝術家：Mikhail Andersson</p>
          <p>經歷：</p>
      <p>📌 全球票選紐約第三名紋身店經營者&紋身藝術家。</p>
      <p>📌 其經營的紋身店 Fisrt Class Tatto，服務客層皆為時尚名流。</p>
      <p>📌 天后-Rihanna 與嘻哈天王-Snoop Dogg皆在他的客戶名單。</p>
        </IonCol>
      </IonRow>
      <IonText color="danger"><h1 style="text-align: end;font-size: 300%;">More...</h1></IonText>
    </div>
    <div id="gallery">
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
    <div id="team" class="ion-text-left">
      <h2 class="ion-text-uppercase" style="font-size: 300%;">team</h2>
      <IonRow>
        <IonCol size="3">
          <metamask_avatar :username="teams['Charles']['username']"
                           :img_url="teams['Charles']['image_url']"
                           :member_balance="null"
                           :metamask_address="teams['Charles']['metamask_address']"
          />
        </IonCol>
        <IonCol >
<h3>創辦人：Charles</h3>
<br>
          <h3>世界第一廣告公司：大中華執行製作總監</h3>
          <h3>客戶囊括NIKE、APPLE、拉菲酒、特斯拉等國際巨型IP</h3>
          <h3>每年營收約4－5億新台幣，國際知名行銷鬼才</h3>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3">
          <metamask_avatar :username="teams['J姊']['username']"
                           :img_url="teams['J姊']['image_url']"
                           :member_balance="null"
                           :metamask_address="teams['J姊']['metamask_address']"
          />
        </IonCol>
        <IonCol>
          <h3>時尚品牌長：J姐</h3>
<br>
          <h3>好萊塢、兩岸三地娛樂圈公關行銷十多年經歷</h3>
          <h3>全球改裝車市場操盤手</h3>
          <h3>熟識全球知名現代藝術家與設計師</h3>
          <h3>(想知道有那些大神嗎? 敬請期待~ 我們將會陸續透漏給大家)</h3>
        </IonCol>
      </IonRow>
<!--  <IonRow class="ion-justify-content-center">-->
<!--    <IonCol size="4">-->
<!--      <metamask_avatar :username="teams['jeffrey']['username']"-->
<!--                       :img_url="teams['jeffrey']['image_url']"-->
<!--                       :member_balance="null"-->
<!--                       :metamask_address="teams['jeffrey']['metamask_address']"-->
<!--      />-->
<!--    </IonCol>-->
<!--    <IonCol size="4">-->
<!--      <metamask_avatar :username="teams['kevin']['username']"-->
<!--                       :img_url="teams['kevin']['image_url']"-->
<!--                       :member_balance="null"-->
<!--                       :metamask_address="teams['kevin']['metamask_address']" />-->
<!--    </IonCol>-->
<!--  </IonRow>-->
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
import Lottie from 'vue-lottie';
import * as animationData from '@/views/animations/tmiLionMint.json';

var publicPath = process.env.BASE_URL;
animationData.assets.forEach(item => { item.u = publicPath + 'animations/HomepageHeader/images/'; });
// Had to store my animation Json and images inside of the "public" folder
// Images weren't loading for me, so I'm using the below method to update their location or 'u' value correctly

export default {
  name: "tmi_mint_site",
  components:{IonSlides,IonSlide,IonImg,IonLabel,IonRow,IonCol,IonHeader,IonContent,IonToolbar, IonTitle,IonIcon,IonButton,IonText,IonFooter,
    VueCountdown,metamask_avatar,Lottie},
  data() {
    return {
      imgs:[
        `https://s3.us-east-2.amazonaws.com/asset.roarrr.io/kevin_invite.gif`
        ,`https://s3.us-east-2.amazonaws.com/asset.roarrr.io/kevin_invite.gif`
        // ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        // ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        // ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        // ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        // ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        // ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        // ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        // ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        // ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
        // ,`https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(Math.random() *  588)}.png`
      ],
      metamask_response: {
        network: 'rinkeby',
        current: '',
      },
      contract_address: '0x000000000',
      white_list: [],
      token_id: '123',
      teams:{
        'Charles':{username:'Charles',image_url:'https://s3.us-east-2.amazonaws.com/asset.roarrr.io/%E7%81%B0%E9%9A%8Echarles_tmi_L.png',metamask_address:'CEO.roarrr.eth'},
        'J姊':{username:'J姊',image_url:'https://s3.us-east-2.amazonaws.com/asset.roarrr.io/originJoyce_tmi_L.png',metamask_address:'CFO.roarrr.eth'}
      },
      defaultOptions: {
        animationData: animationData.default,
        loop:false,
        autoplay:false,
      },
      animationSpeed: 1,
      anim: null,
      is_mint325_show:true,
      is_nft_show:false,
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
    },
    async start_1() {
      this.is_nft_show=true
      this.$confetti.start()
      this.$confetti.update({
        defaultColors: [
          'black',
          'gray',
          'pink',
          'DarkSlateBlue',
        ],
      })
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(2000);
      this.stop()

    },
    async start_2() {
      this.is_nft_show=true
      this.$confetti.start()
      this.$confetti.update({
        defaultColors: [
          'black',
          'gray',
          'green',
          'brown',
        ],
      })
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(2000);
      this.stop()

    },
    stop() {
      this.$confetti.stop();
    },
    mint325(){
      this.is_mint325_show=false
      this.anim.play()
    },
    handleAnimation: function (anim) {
      this.anim = anim;
      this.anim.addEventListener('complete', () => this.anim_complete_handller())
    },
    anim_complete_handller(){
      // TODO open an modql with picture
      if(this.display_nft_token_id==='1') {this.start_1()}
      if(this.display_nft_token_id==='2') {this.start_2()}
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
  props:['mint_psw','display_nft_token_id']
}
</script>

<style scoped>
</style>