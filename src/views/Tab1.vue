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
        <ion-item>
          <ion-avatar slot="end">
            <img src="https://lh5.googleusercontent.com/p/AF1QipOH7mxD8RBtWKhNmDamgQyE9qq2F7ptpVhzHMyo=w1920-h1080-k-no">
          </ion-avatar>
          <ion-avatar slot="end">
            <img src="https://lh5.googleusercontent.com/p/AF1QipN8J5BUCV7vbAHvlMCuzkS4vuEkZcAF-ibhZXjb=w1920-h1080-k-no">
          </ion-avatar>
          <ion-avatar slot="end">
            <img src="https://lh5.googleusercontent.com/p/AF1QipMZA9P-1aWTk3MCfnwEiFl4lgZ_4zXkT6TPKG4G=w1920-h1080-k-no">
          </ion-avatar>
          <ion-avatar slot="end">
            <img src="https://lh5.googleusercontent.com/p/AF1QipPsb8jCnmxW2VOT-gE9YRIut_ELnLtv_DvFs2yH=w1920-h1080-k-no">
          </ion-avatar>
          <ion-avatar slot="end">
            <img src="https://lh5.googleusercontent.com/p/AF1QipM_XDAWcSaUhT5fjXVME17qDsYIGJgS_IISNKQZ=w1920-h1080-k-no">
          </ion-avatar>

          <ion-label>
            <h3>&lt;餐廳名稱&gt;</h3>
            <p> &lt;星數目&gt;&#9733;&#9733;&#9733;&#9733;&#9734;(&lt;評論數量&gt;)&lt;價位&gt;</p>
            <p> &lt;餐廳類型&gt;--&lt;地址&gt; </p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img src="https://lh5.googleusercontent.com/p/AF1QipOH7mxD8RBtWKhNmDamgQyE9qq2F7ptpVhzHMyo=w1920-h1080-k-no">
          </ion-avatar>
          <ion-label>
            <h3>&lt;餐廳名稱&gt;</h3>
            <p> &lt;星數目&gt;&#9733;&#9733;&#9733;&#9733;&#9734;(&lt;評論數量&gt;)&lt;價位&gt;</p>
            <p> &lt;餐廳類型&gt;--&lt;地址&gt; </p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonLabel, IonItem } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar, IonList, IonLabel, IonItem },
  data(){
    return {
      imageUrls:[],
      餐廳名稱:'',
      星數目:0.0,
      星星圖案:'&#9734;&#9734;&#9734;&#9734;&#9734',
      評論數量:'',
      價位:'', //$$$
      餐廳類型:'中餐館',
      地址:'',
    }
  },

}
</script>