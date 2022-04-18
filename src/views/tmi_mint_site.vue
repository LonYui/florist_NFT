<template>
  <IonContent
      style="--ion-font-family: 'Noto Sans TC';" class="ion-text-center">    <div id="mint" >
    <mint/>
  </div>
  </IonContent>
</template>

<script>
import {IonContent} from '@ionic/vue';
import mint from '@/components/tmi_mint_site/mint';


export default {
  name: "tmi_mint_site",
  components:{IonContent,mint},
}
</script>

<style scoped>
</style>