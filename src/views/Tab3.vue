<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        Profile
        <ion-button slot="end">
          <ion-icon :icon="settingsOutline"></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <div @click="openModal('username',member['username'])">Hi! {{ member['username'] }}</div>
      <div @click="openModal('image_url',member['image_url'])"><img style="pointer-events:none"
                v-bind:src="member['image_url']" alt="抓不到圖片" ></div>
      <IonList>
      </IonList>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, modalController,IonList} from '@ionic/vue';
import {settingsOutline} from 'ionicons/icons';
import member_update_modal from '../components/tab3/member_update_modal';
import {use_member} from "@/mixins/member"
import router from "@/router";

export default {
  name: 'Tab3',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon,IonList,},
  methods: {
    async openModal(key,val) {
      const modal = await modalController
          .create({
            component: member_update_modal,
            cssClass: 'my-custom-class',
            componentProps: {
              mob: this.mob,
              column_name:key,
              current_value:val,
            },
          })
      return modal.present();
    },
  },
  mixins:[use_member],
  props: ['member_id'],
  data(){
    return {
      mob:'0912345678'
    }
  },
  setup() {
    return {
      settingsOutline,
    }
  },
  mounted() {
    const _this = this
    this.fetch_get_member(this.member_id).then(response_a => {
      if (response_a.status===404){
        router.replace('/login_select_way').then(()=>{window.location.reload()})//push to page1
      }
      else if (response_a.status===200){
        response_a.json().then(json => {
          Object.keys(json).forEach(key => {
            _this.member[key]=json[key]
          })
        })
      }
    })
  }
}
</script>