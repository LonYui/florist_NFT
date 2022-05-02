<template>
  <div id="whitepaper" class="ion-text-center" >
    <IonText color="light"><br/><h1>Whitepaper</h1></IonText>
    <IonText color="light"><h3 style="font-family: 'pixel ch'"> <br/>202205 母親節康乃馨</h3></IonText>

    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>90 張電腦組合32px像素畫康乃馨 + 特卡*3 (烏克蘭)</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>版型(3種) x 顏色(6種) x 花器 (3種) = 90</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>分配：白單限量 20 團隊保留 10 每人限購 3張</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>鑄造者可以留訊息在 metadata (花配卡片的概念)</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>小畫家 - 政大美術社長</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>日期：</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>5/5 12:00 - 14:00 白單</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>5/5 14:30 公售</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>5/8 12:00 開盲盒</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>5/14 23:59 公售結束</p></IonText>

    <IonText color="light"><h3 style="font-family: 'pixel ch'"> <br/>2022 Q3 ??? 100 ~ 200 張</h3></IonText>

    <IonText color="light"><h3 style="font-family: 'pixel ch'"> <br/>2022 Q4 聖誕節 100~200 張</h3></IonText>

  </div>
</template>

<script>
import {IonText} from "@ionic/vue"
export default {
  name: "whitepaper",
  components:{IonText},
  created(){
    document.title = "白皮書" + document.title.substr(document.title.indexOf("｜"),999)
  },
}
</script>

<style scoped>
IonText {
  white-space: pre-line;
}
p, h1, h3{
  background-color: rgba(0,31,220,0.87) ;
  display: inline;
}

</style>