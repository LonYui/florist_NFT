<template>
  <ion-page>
    <ion-header>
      <ccb_tool_bar v-bind:title="''"></ccb_tool_bar>
    </ion-header>
    <ion-content id="tabs_content">
      <ion-header >
      </ion-header>
<!--      <IonItem>-->
      <IonRow class="ion-justify-content-center">
        <IonCol size="2" >
          <IonAvatar >
            <IonImg style="pointer-events:none"
                    v-bind:src="member['image_url']" alt="抓不到圖片" />
          </IonAvatar>
          <IonLabel>
            <h3>{{member['username']}}</h3>
            <IonBadge @click="copy_metamask_address()">
              {{hidder_metamask_address}}
            </IonBadge>
            <p>
              {{ member_balance }} RTWD
            </p>
          </IonLabel>
        </IonCol>
      </IonRow>
        <IonButton slot="end">
          <ion-icon :icon="settingsOutline"></ion-icon>
        </IonButton>
<!--      </IonItem>-->
<!--      <div @click="openModal('username',member['username'])">Hi! {{ member['username'] }}</div>-->
<!--      <div @click="openModal('image_url',member['image_url'])"><IonImg style="pointer-events:none"-->
<!--                v-bind:src="member['image_url']" alt="抓不到圖片" /></div>-->
<!--      <IonButton @click="push_open_pay()">儲值</IonButton>-->
      <h3>
        NFTs
      </h3>
        <grid_divid3 v-bind:NFTs="NFTs"></grid_divid3>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonHeader,   IonContent, IonButton, IonIcon, modalController,IonImg,IonAvatar,IonLabel,IonBadge,IonRow,IonCol} from '@ionic/vue';
import {settingsOutline} from 'ionicons/icons';
import member_update_modal from '../components/tab3/member_update_modal';
import ccb_tool_bar from '../components/tabs/ccb_tool_bar';
import grid_divid3 from '@/module/grid_divid3';
import {use_member} from "@/mixins/member"
import {use_member_NFTs} from "@/mixins/member_NFTs"
import router from "@/router";

export default {
  name: 'Tab3',
  components: {IonHeader,   IonContent, IonPage, IonButton, IonIcon,IonImg,IonAvatar,IonLabel,IonBadge,IonRow,IonCol
    ,grid_divid3,ccb_tool_bar
  },
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
    copy_metamask_address(){
      updateClipboard(this.member['metamask_address'])
      function updateClipboard(newClip) {
        navigator.clipboard.writeText(newClip).then(function() {
          /* clipboard successfully set */
        }, function() {
          /* clipboard write failed */
        });
      }
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
  computed:{
    hidder_metamask_address(){
      if(!this.member['metamask_address']) return 'null'
      return this.member['metamask_address'].slice(0,5) + '...'+this.member['metamask_address'].slice(-3)
    },
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