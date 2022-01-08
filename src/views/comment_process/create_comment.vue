<template>
<IonPage>
  <IonContent>
    <IonList>
      <IonItem v-for="index in [1,2,3,4,5,6]" v-bind:key="index">
        指標{{index}} -
        <IonButton @click="click_star(index,5)">{{this[`指標${index}星星`][0]}}</IonButton>
        <IonButton @click="click_star(index,4)">{{this[`指標${index}星星`][1] }}</IonButton>
        <IonButton @click="click_star(index,3)">{{this[`指標${index}星星`][2] }}</IonButton>
        <IonButton @click="click_star(index,2)">{{this[`指標${index}星星`][3] }}</IonButton>
        <IonButton @click="click_star(index,1)">{{this[`指標${index}星星`][4] }}</IonButton>
      </IonItem>
    </IonList>
    評論
    <IonTextarea v-model="評論文字"></IonTextarea>
    <IonButton @click="create_review()">創建評論</IonButton>
  </IonContent>
</IonPage>
</template>

<script>
import {IonPage,  IonContent, IonButton, IonItem,IonList, IonTextarea} from '@ionic/vue';

export default {
  name: "create_comment",
  components:{IonPage,  IonContent, IonButton , IonList, IonItem, IonTextarea},
  data(){
    var data_object = {
      評論文字:'',
    }
    for (let i = 0; i < 6; i++) {
      data_object[`指標${i+1}星星`] = '☆☆☆☆☆'
    }
    return data_object
  },
  props:['place_id','mob','qr_code_str'],
  methods:{
    click_star(index_num, star){
      get_x_star_string(star)
      this[`指標${index_num}星星`] = get_x_star_string(star)
      function get_x_star_string(x){
        if( x === 0)return '☆☆☆☆☆'
        else if( x === 1)return '☆☆☆☆★'
        else if( x === 2)return '☆☆☆★★'
        else if( x === 3)return '☆☆★★★'
        else if( x === 4)return '☆★★★★'
        else if( x === 5)return '★★★★★'
      }
    },
    fetch_put_create_reveiw(){
      var formdata = new FormData();
      formdata.append("indexs", "[{\"name\": \"testindex1\", \"point\": 1}, {\"name\": \"testindex2\", \"point\": 2}]");
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
