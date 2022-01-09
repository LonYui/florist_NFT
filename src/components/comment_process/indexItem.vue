<template>
  <IonItem >
    {{name}} -
    <IonButton @click="onClick(name,5)">{{value_in_str[0]}}</IonButton>
    <IonButton @click="onClick(name,4)">{{value_in_str[1]}}</IonButton>
    <IonButton @click="onClick(name,3)">{{value_in_str[2]}}</IonButton>
    <IonButton @click="onClick(name,2)">{{value_in_str[3]}}</IonButton>
    <IonButton @click="onClick(name,1)">{{value_in_str[4]}}</IonButton>
  </IonItem>
</template>

<script>
import {
  IonItem,IonButton
} from '@ionic/vue';
export default {
  name: "indexItem",
  components: {IonItem,IonButton},
  props:['name','value'],
  emits:['click_star'],
  setup(props, { emit }) {
    function onClick(name,value) {
      emit("click_star", name,value);
    }
    return { onClick };
  },
  computed:{
    value_in_str() {
      const x = this.value
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