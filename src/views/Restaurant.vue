<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ 餐廳名稱 }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ 餐廳名稱 }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <p> {{ 星數目 }}{{ 星星圖案 }}({{ 評論數量 }})</p>
      <p> {{ 餐廳類型 }}•{{ 價位 }}•{{ 交通時間 }}</p>
      <p> {{ 是否營業中 }}•{{ 營業結束時間或下次開啟時間 }}</p>
      <ion-slides :options="slideOpts">
        <ion-slide style="width: 100px; height: 50px; ">
          <ion-col>
            <ion-chip>
              <ion-icon :icon="arrowRedoOutline"></ion-icon>
              <ion-label>路線</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 100px; height: 50px; ">
          <ion-col>
            <ion-chip>
              <ion-icon :icon="arrowUpOutline"></ion-icon>
              <ion-label>開始</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 100px; height: 50px; ">
          <ion-col>
            <ion-chip>
              <ion-icon :icon="callOutline"></ion-icon>
              <ion-label>致電</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 100px; height: 50px; ">
          <ion-col>
            <ion-chip>
              <ion-icon :icon="saveOutline"></ion-icon>
              <ion-label>儲存</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 100px; height: 50px; ">
          <ion-col>
            <ion-chip>
              <ion-icon :icon="shareOutline"></ion-icon>
              <ion-label>分享</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
        <ion-slide
            style="width: 100px; height: 50px; "
            v-if="官方網站"
        >
          <ion-col>
            <ion-chip>
              <ion-icon :icon="earthOutline"></ion-icon>
              <ion-label>網站</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
      </ion-slides>

      <ion-slides :options="slideOpts">
        <ion-slide style="width: 200px; height: 200px; border: 2px solid #f8f8f8"
                   v-for="index in [...Array(10).keys()]"
                   v-bind:key="index"
        >
          <ion-col>
            <img style="pointer-events:none"
                 v-bind:src="imageUrls[index]" alt="抓不到圖片">
          </ion-col>
        </ion-slide>
      </ion-slides>
      <ion-toolbar>
        <ion-segment value="總覽">
          <ion-segment-button value="總覽">
            <ion-label>總覽</ion-label>
          </ion-segment-button>
          <ion-segment-button value="最新動態">
            <ion-label>最新動態</ion-label>
          </ion-segment-button>
          <ion-segment-button value="菜單">
            <ion-label>菜單</ion-label>
          </ion-segment-button>
          <ion-segment-button value="評論">
            <ion-label>評論</ion-label>
          </ion-segment-button>
          <ion-segment-button value="相片">
            <ion-label>相片</ion-label>
          </ion-segment-button>
          <ion-segment-button value="關於">
            <ion-label>關於</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>

      <TabOverview :即時通訊url="即時通訊url"
                   :地址="地址" :外送url="外送url"
                   :官方網站="官方網站" :定位url="定位url"
                   :營業時間="營業時間" :電話="電話"
                   :reviewsDistribution="reviewsDistribution"
                   :星數目="星數目" />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSlides, IonSlide,IonSegmentButton, IonSegment
  , IonCol, IonIcon, IonLabel, IonChip
} from '@ionic/vue';
import {
  arrowRedoOutline,
  arrowUpOutline, callOutline,
  earthOutline,
  ellipse,
  saveOutline,
  shareOutline
} from "ionicons/icons";
import TabOverview from "../components/Restaurant/TabOverview";

export default {
  name: 'Restaurant',
  components: {
    TabOverview,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSlides, IonSlide, IonSegmentButton, IonSegment,
    IonCol, IonIcon, IonLabel, IonChip
  },
  data() {
    return {
      placeId: 'ChIJr6Q-A42sQjQRnF0-UERYNto',
      imageUrls: [
        "https://lh5.googleusercontent.com/p/AF1QipOH7mxD8RBtWKhNmDamgQyE9qq2F7ptpVhzHMyo=w1920-h1080-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipN8J5BUCV7vbAHvlMCuzkS4vuEkZcAF-ibhZXjb=w1920-h1080-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipMZA9P-1aWTk3MCfnwEiFl4lgZ_4zXkT6TPKG4G=w1920-h1080-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipPsb8jCnmxW2VOT-gE9YRIut_ELnLtv_DvFs2yH=w1920-h1080-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipM_XDAWcSaUhT5fjXVME17qDsYIGJgS_IISNKQZ=w1920-h1080-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipOCeTs2A4BDU8BhE8cWOmu52DkXisLtv1yr7q_H=w1920-h1080-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipP0L1Y22bby7PnjXRJXmWp04bNGRI3C0i4etRAl=w1920-h1080-k-no",
        'https://lh5.googleusercontent.com/p/AF1QipMVyObgCkTauEQZpRcnTJE8nH3ywDfXttGM75WC=w1920-h1080-k-no',
        "https://lh5.googleusercontent.com/p/AF1QipMEKq59inRKi3-p9N7--C2gdWr3iRR1EY-OutVq=w1920-h1080-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipNe-UbxZdn0Q9IGussC35Eir9ru_FhindtlQ8Ip=w1920-h1080-k-no",
      ],
      餐廳名稱: '北平烤鴨莊',
      星數目: 4.0,
      星星圖案: '★★★★☆',
      評論數量: 64,
      價位: '', //(爬不到)
      餐廳類型: '中餐館',
      地址: '114台灣台北市內湖區成功路四段20巷7號',


      交通時間: '',//'🛵4分鐘',//(爬不到)
      是否營業中: '',//'營業中',//(爬不到)
      營業結束時間或下次開啟時間: '',//'結束營業時間：下午 9:00',//(爬不到)

      即時通訊url:null,//(爬不到)
      外送url:null,//(爬不到)
      官方網站:null,
      定位url:null,//(爬不到)
      營業時間:null,//(爬不到)
      電話:'+886 2 2790 7077',
      reviewsDistribution:{
        oneStar:2,
        twoStar:5,
        threeStar:9,
        fourStar:23,
        fiveStar:25,
      },
    }
  },
  setup() {
    const slideOpts = {slidesPerView: 'auto', zoom: false, grabCursor: true};
    return {
      arrowRedoOutline, slideOpts, ellipse,arrowUpOutline,saveOutline,shareOutline,earthOutline, callOutline
    }
  },
  created: function () {

    getByPlaceId(this.$route.params.placeId,this)
    function getByPlaceId(placeId, component){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/restaurant?placeId=${placeId}`, requestOptions)
          .then(response => {
            response.json().then(json => {
              for (var key in json) {
                component[key] = json[key]
              }

            })
          })
          .catch(error => console.log('error', error));

    }
  },
  methods: {},
}
</script>