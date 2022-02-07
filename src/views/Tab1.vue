<template>
  <ion-page>
    <ion-header>
      <ion-title size="large">販售中</ion-title>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">販售中</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <sale-item v-for="sale in sales" :key="sale['sale_id']"
                   :contract_address="sale['contract_address']" :token_id="sale['token_id']"
                   :price="sale['price']" :title="sale['title']" :description="sale['description']"
                   :seller_id="sale['seller_id']" :member_id="member_id"
        />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList} from '@ionic/vue';
import saleItem from '@/components/tab1/saleItem';

export default {
  name: 'Tab1',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList,
    saleItem},
  data() {
    return {
      sales: [
          {title:'SBD#1',
            description:'隨便道茶杯',
            price:0.05*3000*30,
            contract_address:'0xa720a6754b20e1204e77a4f1625410c6e9e8413a',
            token_id:'0x0000000000000000000000000000000000000000000000000000000000000001',
            seller_id:'admin'
          },
        {title:'不知道誰送的',
          description:'隨便賣',
          price:0.1*3000*30,
          contract_address:'0x3ba8ad37211ad070dca1a5f0a7f1fee6aab3fdc1',
          token_id:'0x00000000000000000000000000000000000000000000000000000000000000c7',
          seller_id:'admin'
        },
        ],
    }
  },
  props: ['member_id'],
  methods: {
    fetch_get_sale(){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      return fetch("https://ccb-rock-backed-dev.herokuapp.com/sale", requestOptions)
    }
  },
  mounted(){
    let _this = this
    this.fetch_get_sale().then(response => {
      response.json().then(json => {
        _this['sales'] = json['NFTs']
      })
    })
  },

}
</script>