<template>
  <IonToolbar>
      <IonMenuButton menu="root" auto-hide="false" slot="start"/>
    <IonTitle>{{title}}</IonTitle>
  </IonToolbar>
</template>

<script>
import {IonToolbar, IonTitle,IonMenuButton,} from '@ionic/vue';
export default {
  name: "ccb_tool_bar",
  components:{IonToolbar, IonTitle,IonMenuButton,},
  props:['title'],
}
</script>