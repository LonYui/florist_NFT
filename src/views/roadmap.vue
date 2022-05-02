<template>
  <div id="roadmap" class="ion-text-center" >
    <IonText color="light"><h2><br/>Roadmap</h2></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>花花讓世界更可愛</p></IonText>
    <IonText color="light"><h3 style="font-family: 'pixel ch'"> <br/>phase1 we r here</h3></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>每季一次推出花品，線上下販售</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>5/8 康乃馨路邊販售、5/5~5/14線上nft</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>7~9 月 推出下一款花</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>經營 IG</p></IonText>

    <IonText color="light"><h3 style="font-family: 'pixel ch'"> <br/>phase2 wait for income process ? eth / 10 eth</h3></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>NFT 賦能-metadata文字傳情機制</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>在區塊鏈刻印下你的文字情感</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>每次交易後擁有者有一次機會可以新增訊息在 nft description</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>擴增社群經營</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>經營dc</p></IonText>

    <IonText color="light"><h3 style="font-family: 'pixel ch'"> <br/>Phase3 wait for income process ?? eth / 100 eth</h3></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>小花們都是股東可以分潤</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>推出項目 IP</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>開設實體花店</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>買地種花</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>原宇宙</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>彰化</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>讓 NFT 成為多個 dapp 遊戲中的物品</p></IonText>
<!--    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>情人節多一點浪漫，母親節多一點溫馨，聖誕節多一點喜氣</p></IonText>-->
<!--    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>Flower is best gift</p></IonText>-->
<!--    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>瞭解植物知識、種植到開花、花語。</p></IonText>-->
  </div>
</template>
<script>
import {IonText} from "@ionic/vue"
export default {
  name: "tmi_mint_site",
  components:{IonText},
  created(){
    document.title = "里程" + document.title.substr(document.title.indexOf("｜"),999)
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
h2{
  background-color: rgba(0,31,220,0.87) ;
  display: inline;
}
</style>