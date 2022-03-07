<template>
<IonRow v-for="key in [...Array(Math.floor(NFTs.length/3)+1).keys()]" v-bind:key="key">
  <IonCol v-if="key*3 < NFTs.length">
    <NFTItem
             :address="NFTs[key*3]['contract_address']"
             :token_id="NFTs[key*3]['token_id']"
    />
  </IonCol>
  <IonCol v-if="key*3+1 < NFTs.length">
    <NFTItem
        :address="NFTs[key*3+1]['contract_address']"
        :token_id="NFTs[key*3+1]['token_id']"
    />
  </IonCol>
  <IonCol v-if="key*3+2 < NFTs.length">
    <NFTItem
        :address="NFTs[key*3+2]['contract_address']"
        :token_id="NFTs[key*3+2]['token_id']"
    />
  </IonCol>
</IonRow>
</template>

<script>
import {IonCol,IonRow} from '@ionic/vue';
import NFTItem from '@/components/tab3/NFTItem';

export default {
  components:{IonCol,IonRow,NFTItem},
  name: "grid_divid3",
  props: ['NFTs'],
}
</script>