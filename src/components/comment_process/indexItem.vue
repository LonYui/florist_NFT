<template>
  <IonItem >
    {{name}} -
    <IonButton @click="onClick(name,5)">{{point_in_str[0]}}</IonButton>
    <IonButton @click="onClick(name,4)">{{point_in_str[1]}}</IonButton>
    <IonButton @click="onClick(name,3)">{{point_in_str[2]}}</IonButton>
    <IonButton @click="onClick(name,2)">{{point_in_str[3]}}</IonButton>
    <IonButton @click="onClick(name,1)">{{point_in_str[4]}}</IonButton>
  </IonItem>
</template>

<script>
import {
  IonItem,IonButton
} from '@ionic/vue';
export default {
  name: "indexItem",
  components: {IonItem,IonButton},
  props:['name','point'],
  emits:['click_star'],
  setup(props, { emit }) {
    function onClick(name,point) {
      emit("click_star", name,point);
    }
    return { onClick };
  },
  computed:{
    point_in_str() {
      const x = this.point
      if (x === 0) return '☆☆☆☆☆'
      else if (x === 1) return '☆☆☆☆★'
      else if (x === 2) return '☆☆☆★★'
      else if (x === 3) return '☆☆★★★'
      else if (x === 4) return '☆★★★★'
      else if (x === 5) return '★★★★★'
      return ''
    }
  }
}
</script>