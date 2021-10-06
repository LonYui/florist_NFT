<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>餐廳搜尋</ion-title>
        <ion-searchbar show-cancel-button="focus"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">餐廳搜尋</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <restaurantItem
            v-for="restaurant in restaurants"
            :key="restaurant.placeId"
            :imageUrls="restaurant.imageUrls"
            :餐廳名稱="restaurant.餐廳名稱"
            :星數目="restaurant.星數目"
            :星星圖案="restaurant.星星圖案"
            :評論數量="restaurant.評論數量"
            :價位="restaurant.價位"
            :餐廳類型="restaurant.餐廳類型"
            :地址="restaurant.地址"
        ></restaurantItem>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList } from '@ionic/vue';
import restaurantItem from '@/components/restaurantItem.vue'

export default  {
  name: 'Tab1',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar, IonList, restaurantItem},
  data(){
    return {
      restaurants:[{
        placeId:'ChIJr6Q-A42sQjQRnF0-UERYNto',
        imageUrls:[
          "https://lh5.googleusercontent.com/p/AF1QipOH7mxD8RBtWKhNmDamgQyE9qq2F7ptpVhzHMyo=w1920-h1080-k-no",
          "https://lh5.googleusercontent.com/p/AF1QipN8J5BUCV7vbAHvlMCuzkS4vuEkZcAF-ibhZXjb=w1920-h1080-k-no",
          "https://lh5.googleusercontent.com/p/AF1QipMZA9P-1aWTk3MCfnwEiFl4lgZ_4zXkT6TPKG4G=w1920-h1080-k-no",
          "https://lh5.googleusercontent.com/p/AF1QipPsb8jCnmxW2VOT-gE9YRIut_ELnLtv_DvFs2yH=w1920-h1080-k-no",
          "https://lh5.googleusercontent.com/p/AF1QipM_XDAWcSaUhT5fjXVME17qDsYIGJgS_IISNKQZ=w1920-h1080-k-no"
        ],
        餐廳名稱:'北平烤鴨莊',
        星數目:4.0,
        星星圖案:'★★★★☆',
        評論數量:64,
        價位:'', //$$$
        餐廳類型:'中餐館',
        地址:'114台灣台北市內湖區成功路四段20巷7號',
      }],
    }
  },

}
</script>