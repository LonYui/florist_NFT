<template>
  <div id="roadmap" class="ion-text-center" >
    <IonText color="light"><h3><br/>Vision & Mission</h3></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>花花讓世界更可愛</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>情人節多一點浪漫，母親節多一點溫馨，聖誕節多一點喜氣</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>Flower is best gift</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>瞭解植物知識、種植到開花、花語。</p></IonText>
    <br/><button @click="push_to('/mint')">go to mine</button>
  </div>
</template>

<script>
import {IonText} from "@ionic/vue"
export default {
  name: "tmi_mint_site",
  components:{IonText},
  methods:{
    push_to(path){
      this.$router.push(path)
    }
  },
  created(){
    document.title = document.title.substr(0,document.title.indexOf("|")+1)+ "歡迎"
  },
}
</script>

<style scoped>
IonText {
  white-space: pre-line;
}
p{
  background-color: rgba(0,31,220,0.87) ;
  display: inline;
}
h3{
  background-color: rgba(0,31,220,0.87) ;
  display: inline;
}

</style>