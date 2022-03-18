<template>
      <IonAvatar style="    width: 16vw;  height: 16vw;  " >
        <IonImg style="pointer-events:none"
                v-bind:src="img_url" alt="抓不到圖片" />
      </IonAvatar>
      <IonLabel>
        <h2>{{username}}</h2>
        <IonBadge @click="copy_metamask_address()">
          {{hidder_metamask_address}}
        </IonBadge>
        <p v-show="member_balance">
          {{ member_balance }} RTWD
        </p>
      </IonLabel>
</template>

<script>
import {
  IonAvatar,IonImg,IonLabel,IonBadge,
  toastController,
} from '@ionic/vue';

export default {
  name: "metamask_avatar",
  components:{
    IonAvatar,IonImg,IonLabel,IonBadge
  },
  props:['username','img_url','member_balance','metamask_address'],
  methods:{
    copy_metamask_address(){
      updateClipboard(this.metamask_address)
      this.openToast('複製到剪貼簿',200)
      function updateClipboard(newClip) {
        navigator.clipboard.writeText(newClip).then(function() {
          /* clipboard successfully set */
        }, function() {
          /* clipboard write failed */
        });
      }
    },
    async openToast(message,duration) {
      const toast = await toastController
          .create({
            message: message,
            duration: duration
          })
      return toast.present();
    },
  },
  computed:{
    hidder_metamask_address(){
      if(!this.metamask_address) return 'null'
      else if (this.metamask_address.slice(-4)==='.eth') return this.metamask_address
      return this.metamask_address.slice(0,5) + '...'+this.metamask_address.slice(-3)
    },
  },
}
</script>

<style scoped>

</style>