<template>
  <ion-app>
    <ccb_menu/>
    <ion-router-outlet id="main" />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import ccb_menu from '@/components/ccb_menu';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    ccb_menu
  }
});
</script>