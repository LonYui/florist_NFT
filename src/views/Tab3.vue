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
      ccpoint balance = {{ member_balance }}
      <IonList>
        <NFTItem v-for="NFT in NFTs" :key="NFTs.indexOf(NFT)"
                 :address="NFT['contract_address']"
                 :token_id="NFT['token_id']"
        />
      </IonList>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, modalController,IonList,} from '@ionic/vue';
import {settingsOutline} from 'ionicons/icons';
import member_update_modal from '../components/tab3/member_update_modal';
import NFTItem from '@/components/tab3/NFTItem';
import {use_member} from "@/mixins/member"
import {use_member_NFTs} from "@/mixins/member_NFTs"
import router from "@/router";

export default {
  name: 'Tab3',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon,IonList,NFTItem},
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
    fetch_delete_ccpoint_transaction_staging(txn_id){
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/ccpoint_staging/${txn_id}/store`, requestOptions)
    },
    fetch_get_ccpoint_transaction(txn_id){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      return  fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/ccpoint_transaction/${txn_id}`, requestOptions)
    },
    fetch_member_ccpoint_balance(member_id){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member/${member_id}/ccpoint_balance/`, requestOptions)
    }
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
    if (this.txn_id) {
      this.fetch_delete_ccpoint_transaction_staging(this.txn_id).then(response => {
        if (response.status===200){
          this.fetch_get_ccpoint_transaction(this.txn_id).then(response_b=>
              response_b.json().then(json=>{
                alert(`+${json['amount']}`)
              })
          )

        }else{
          response.json().then(json=>{
            alert(json['message'])
          })
        }
      })
    }
    this.fetch_member_ccpoint_balance(this.member_id).then(response => {
      response.json().then( json => {
        _this['member_balance'] = json['balance']
      })
    })

  }
}
</script>