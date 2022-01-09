<template>
<IonPage>
  <IonContent>
    <IonList>
      <indexItem v-for="index in indexs" v-bind:key="index.name"
                 :name="index.name" :point="index.point"
                 @click_star="click_star"
      ></indexItem>
    </IonList>
    評論
    <IonTextarea v-model="評論文字"></IonTextarea>
    <IonButton @click="create_review()">創建評論</IonButton>
  </IonContent>
</IonPage>
</template>

<script>
import {IonPage,  IonContent, IonButton, IonList, IonTextarea} from '@ionic/vue';
import indexItem from '@/components/comment_process/indexItem.vue'
export default {
  name: "create_comment",
  components:{IonPage,  IonContent, IonButton , IonList,  IonTextarea,indexItem},
  data(){
    return {
      評論文字:'',
      indexs:[
          {name:'testindex1',point:0},
          {name:'testindex2',point:0},
          {name:'testindex3',point:0},
          {name:'testindex4',point:0},
          {name:'testindex5',point:0},
          {name:'testindex6',point:0},
      ]
    }

  },
  props:['place_id','mob','qr_code_str'],
  methods:{
    click_star(name, star){
      var result = this.indexs.find(index=>index.name===name)
      result.point = star
    },
    fetch_put_create_reveiw(){
      var formdata = new FormData();
      formdata.append("indexs", JSON.stringify(this.indexs));
      formdata.append("reviewer_id", this.mob);
      formdata.append("restaurant_id", this.place_id);
      formdata.append("text", this.評論文字);
      formdata.append("qr_code", this.qr_code_str);

      var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
      };

      return fetch("https://ccb-rock-backed-dev.herokuapp.com/review/create", requestOptions)
    },
    create_review(){
      this.fetch_put_create_reveiw().then( response =>{
        console.log(response.status)
          })
    }
  },
}
</script>
