<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Restaurant</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Restaurant</ion-title>
        </ion-toolbar>
      </ion-header>
      <h3>{{ 餐廳名稱 }}</h3>
      <p> {{ 星數目 }}{{ 星星圖案 }}({{ 評論數量 }})</p>
      <p> {{ 餐廳類型 }}•{{ 價位 }}•{{ 交通時間 }}</p>
      <p> {{ 是否營業中 }}•{{ 營業結束時間或下次開啟時間 }}</p>
      <ion-slides :options="slideOpts">
        <ion-slide style="width: 150px; height: 200px; border: 2px solid #f8f8f8">
          <ion-col>
            <ion-chip>
              <ion-icon :icon="arrowRedoOutline"></ion-icon>
              <ion-label>路線</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 150px; height: 200px; border: 2px solid #f8f8f8">
          <ion-col>
            <ion-chip>
              <ion-icon :icon="arrowRedoOutline"></ion-icon>
              <ion-label>開始</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 150px; height: 200px; border: 2px solid #f8f8f8">
          <ion-col>
            <ion-chip>
              <ion-icon :icon="arrowRedoOutline"></ion-icon>
              <ion-label>致電</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 150px; height: 200px; border: 2px solid #f8f8f8">
          <ion-col>
            <ion-chip>
              <ion-icon :icon="arrowRedoOutline"></ion-icon>
              <ion-label>儲存</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 150px; height: 200px; border: 2px solid #f8f8f8">
          <ion-col>
            <ion-chip>
              <ion-icon :icon="arrowRedoOutline"></ion-icon>
              <ion-label>分享</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 150px; height: 200px; border: 2px solid #f8f8f8">
          <ion-col>
            <ion-chip>
              <ion-icon :icon="arrowRedoOutline"></ion-icon>
              <ion-label>網站</ion-label>
            </ion-chip>
          </ion-col>
        </ion-slide>
      </ion-slides>

      <ion-slides :options="slideOpts">
        <ion-slide style="width: 150px; height: 200px; border: 2px solid #f8f8f8">
          <ion-col>
            <ion-label>Card #0</ion-label>
            <img style="pointer-events:none"
                 v-bind:src="imageUrls[0]" alt="抓不到圖片">
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 150px; height: 200px; border: 2px solid #f8f8f8">
          <ion-col>
            <ion-label>Card #1</ion-label>
            <img style="pointer-events:none"
                 v-bind:src="imageUrls[1]" alt="抓不到圖片">
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 150px; height: 200px; border: 2px solid #f8f8f8">
          <ion-col>
            <ion-label>Card #2</ion-label>
            <img style="pointer-events:none"
                 v-bind:src="imageUrls[2]" alt="抓不到圖片">
          </ion-col>
        </ion-slide>
        <ion-slide style="width: 150px; height: 200px; border: 2px solid #f8f8f8">
          <ion-col>
            <ion-label>Card #3</ion-label>
            <img style="pointer-events:none"
                 v-bind:src="imageUrls[3]" alt="抓不到圖片">
          </ion-col>
        </ion-slide>
      </ion-slides>
      <!--      tab 總覽-->

    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSlides, IonSlide
} from '@ionic/vue';
import {arrowRedoOutline, ellipse} from "ionicons/icons";

export default {
  name: 'Restaurant',
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSlides, IonSlide
  },
  data() {
    return {
      placeId: 'ChIJr6Q-A42sQjQRnF0-UERYNto',
      imageUrls: [
        "https://lh5.googleusercontent.com/p/AF1QipOH7mxD8RBtWKhNmDamgQyE9qq2F7ptpVhzHMyo=w1920-h1080-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipN8J5BUCV7vbAHvlMCuzkS4vuEkZcAF-ibhZXjb=w1920-h1080-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipMZA9P-1aWTk3MCfnwEiFl4lgZ_4zXkT6TPKG4G=w1920-h1080-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipPsb8jCnmxW2VOT-gE9YRIut_ELnLtv_DvFs2yH=w1920-h1080-k-no",
      ],
      餐廳名稱: '北平烤鴨莊',
      星數目: 4.0,
      星星圖案: '★★★★☆',
      評論數量: 64,
      價位: '', //$$$
      餐廳類型: '中餐館',
      地址: '114台灣台北市內湖區成功路四段20巷7號',


      交通時間: '🛵4分鐘',
      是否營業中: '營業中',
      營業結束時間或下次開啟時間: '結束營業時間：下午 9:00',


    }
  },
  setup() {
    const slideOpts = {slidesPerView: 'auto', zoom: false, grabCursor: true};
    return {
      arrowRedoOutline, slideOpts, ellipse
    }
  },
  methods: {},
}
</script>