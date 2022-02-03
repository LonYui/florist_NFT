<template>
  <IonPage>
    <IonContent>
      <IonList>
        <messageItem v-for="message in messages" :key="message.create_timestamp"
                        :mob="mob"
                        :image_url="message.誰.image_url"
                        :username="message.誰.username"
                        :訊息="message.訊息"
                        :message_mob="message.誰.mob"
        />

      </IonList>
      <IonInput v-model="input_txt" placeholder="輸入訊息給對方"></IonInput>
    </IonContent>
  </IonPage>
</template>

<script>
import {IonPage, IonContent, IonInput,IonList} from '@ionic/vue';
import messageItem from '@/components/tab2/messageItem.vue'
export default {
  name: "chat",
  components: {IonPage, IonContent, IonInput,IonList,messageItem},
  props: ['mob'],
  data() {
    return {
      input_txt: null,
      messages: [
        {
          chat_room_id:1,
          訊息: '媽你好',
          誰: {
            username: "jeffrey",
            image_url: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4643985452348560&height=50&width=50&ext=1641956861&hash=AeROup_yrzNWTOZQTYM",
            mob: '0919547381',
          },
          create_timestamp: '2022/01/01 11:11:11',
        },
        {
          chat_room_id:2,
          訊息: '你好兒',
          誰: {
            username: "Mom",
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7YTEmGRiDw8nzuwSFnS43q6Ns0PRw-8JKw&usqp=CAU",
            mob: '091234567',
          },
          create_timestamp: '2022/01/01 11:12:11',
        }],
    }
  },
  computed:{
  },
  methods: {
  }
}
</script>