<template>
  <ion-item v-bind:href='`/restaurant/${placeId}?mob=${mob}`'>
    <ion-avatar slot="end">
      <img v-bind:src="imageUrls[0]" alt="抓不到圖片">
    </ion-avatar>
    <ion-avatar slot="end">
      <img v-bind:src="imageUrls[1]" alt="抓不到圖片">
    </ion-avatar>
    <ion-avatar slot="end">
      <img v-bind:src="imageUrls[2]" alt="抓不到圖片">
    </ion-avatar>
    <ion-label>
      <h3>{{ 餐廳名稱 }}</h3>
      <p> {{ 星數目 }}{{ 星星圖案 }}({{ 評論數量 }})</p>
      <p> {{ 餐廳類型 }}--{{ 地址 }} </p>
    </ion-label>


  </ion-item>
</template>

<script>
import {IonItem, IonLabel, IonAvatar} from "@ionic/vue";

export default {
  components:{IonItem, IonLabel, IonAvatar},
  name: "restaurantItem",
  props:[
    'imageUrls',
    'placeId',
    '餐廳名稱',
    '星數目',
    '星星圖案',
    '評論數量',
    // '價位',爬蟲爬不到
    '餐廳類型',
    '地址',
    'mob',
  ],
}
</script>
