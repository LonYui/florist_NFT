<template>
  <IonPage>
    <IonHeader></IonHeader>
    <IonContent>
      <IonItem>
        <IonLabel>購買金額</IonLabel>
        <IonInput type="number" v-model="amount" placeholder="金額" disabled="disabled" />
      </IonItem>
      <br/>
      <IonButton @click="()=>{amount+=100}">+100</IonButton>
      <IonButton @click="()=>{amount+=1000}">+1000</IonButton>
      <IonButton @click="()=>{amount+=5000}">+5000</IonButton>
      <IonButton @click="()=>{amount=0}">歸0</IonButton>
<!--      <IonItem>-->
<!--        <IonLabel>購買人資訊</IonLabel>-->
<!--        <IonInput  v-model="creditcard['mid_name']" placeholder="名字"  />-->
<!--        <IonInput  v-model="creditcard['last_name']" placeholder="姓氏"  />-->
<!--        <IonInput  v-model="creditcard['mob']" placeholder="手機"  />-->
<!--      </IonItem>-->
      <br/>
      <IonButton @click="push_open_pay()" >刷卡</IonButton>
    </IonContent>
  </IonPage>
</template>

<script>
import {IonPage, IonHeader,IonContent,IonInput,IonItem,IonLabel,IonButton} from '@ionic/vue';
import router from "../../router";
export default {
  name: "spend_how_much",
  props:['member_id'],
  components: {IonPage, IonHeader, IonContent, IonInput, IonItem, IonLabel, IonButton},
  data(){
    return {
      amount:0,
      // creditcard:{
      //   mid_name:'',
      //   last_name:'',
      //   mob:'',
      // }
    }
  },
  methods:{
    push_open_pay(){
      router.replace(`/open_pay_post_form?member_id=${this.member_id}&amount=${this.amount}`).then(()=>{window.location.reload()})
    }
  }

}
</script>