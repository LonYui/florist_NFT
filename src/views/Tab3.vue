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
      <div @click="openModal('image_url',member['image_url'])"><IonImg style="pointer-events:none"
                v-bind:src="member['image_url']" alt="抓不到圖片" /></div>
      {{ member_balance }} RTWD
      <IonButton @click="push_open_pay()">儲值</IonButton>
      <IonList>
        NFTs
        <br/>
        <grid_divid3 v-bind:NFTs="NFTs"></grid_divid3>
      </IonList>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, modalController,IonList,IonImg} from '@ionic/vue';
import {settingsOutline} from 'ionicons/icons';
import member_update_modal from '../components/tab3/member_update_modal';
import grid_divid3 from '@/module/grid_divid3';
import {use_member} from "@/mixins/member"
import {use_member_NFTs} from "@/mixins/member_NFTs"
import router from "@/router";

export default {
  name: 'Tab3',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon,IonList,IonImg,grid_divid3},
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
    fetch_member_ccpoint_balance(member_id){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member/${member_id}/ccpoint_balance/`, requestOptions)
    },
    push_open_pay(){
      router.replace(`/spend_how_much?member_id=${this.member_id}`).then(()=>{window.location.reload()})
    },
  },
  mixins:[use_member,use_member_NFTs],
  props: ['member_id','txn_id',],
  data(){
    return {
      mob:'0912345678',
      member_balance:'168888888'
    }
  },
  setup() {
    return {
      settingsOutline,
    }
  },
  mounted() {
    const _this = this
    this.fetch_get_member(this.member_id).then(response => {
      if (response.status===404){
        router.replace('/login_select_way').then(()=>{window.location.reload()})//push to page1
      }
      else if (response.status===200){
        response.json().then(json => {
          Object.keys(json).forEach(key => {
            _this.member[key]=json[key]
          })
        })
      }
    })
    this.fetch_memeber_nft(this.member_id).then(response=>{
      response.json().then(json=>{
        _this['NFTs'] = json['NFTs']
      })
    })
    this.fetch_member_ccpoint_balance(this.member_id).then(response => {
      response.json().then( json => {
        _this['member_balance'] = json['balance']
      })
    })

  }
}
</script>