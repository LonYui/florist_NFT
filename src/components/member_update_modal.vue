<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>修改{{column_name}}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-input v-model="update_value"></ion-input>
    <ion-button @click="submit()">送出</ion-button>

  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar,  IonButton ,IonInput, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'member_update_modal',
  props: {
    mob: { type: String, default: 'Super mob' },
    column_name: { type: String, default: 'Super column_name' },
    current_value: { type: String, default: 'Super val' },
  },
  data() {
    return {
      update_value:this.current_value,
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButton ,IonInput },
  methods:{
    fetch_post_member(mob,key,value){
      var formdata = new FormData();
      formdata.append("mob", mob);
      formdata.append(key, value);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      return fetch(`https://${process.env.ccb_rock_backed_domain}/member`, requestOptions)
          .then(response => {
            return response
          })
          .catch(error => console.log('error', error));
    },
    async submit(){
      const response = await this.fetch_post_member(this.mob,this.column_name,this.update_value)
      if(response.status === 200){
        modalController.dismiss()
      }else{
        alert('fail')
      }
    },
  }


});
</script>