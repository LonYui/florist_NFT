<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        Profile
        <ion-button>
          <ion-icon slot="end" :icon="settingsOutline"></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <div @click="openModal('username',username)">Hi! {{ username }}</div>
      <div @click="openModal('image_url',image_url)"><img style="pointer-events:none"
                v-bind:src="image_url" alt="抓不到圖片" ></div>

    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, modalController} from '@ionic/vue';
import {settingsOutline} from 'ionicons/icons';
import member_update_modal from '../components/tab3/member_update_modal';

const default_data = {
  mob: null,
  username: "nick",
  image_url: "data:image/jpeg;base64,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",
}

export default {
  name: 'Tab3',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon},
  methods: {
    fetch_verify_token(token) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/verify-token?token=${encoder(token)}`, requestOptions)
          .then(response => {
            return response
          })
          .catch(error => console.log('error', error));

      function encoder(token) {
        return token + Math.random().toString(36).slice(-7)
      }

    },
    get_cookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },
    fetch_get_member(mob) {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member?mob=${mob}`, requestOptions)
          .then(response => {
            return response
          })
          .catch(error => console.log('error', error));
    },
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
  data() {
    return default_data
  },
  setup() {
    return {
      settingsOutline,
    }
  },
  async created() {
    const response = await this.fetch_verify_token(this.get_cookie('token'))
    await response.json().then(json => {
      this.mob = json.mob
    })

    const response2 = await this.fetch_get_member(this.mob)
    response2.json().then(json => {
      for (var key in default_data) {
        this[key] = json[key]
      }
    })
  }
}
</script>