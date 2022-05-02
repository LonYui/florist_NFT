<template>
    <div id="land" class="ion-text-center"  >
    <br/><button @click="push_to('/whitepaper')">go to whitepaper</button>
    <IonText color="light"><h3><br/>Vision & Mission</h3></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>花花讓世界更可愛</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>情人節多一點浪漫，母親節多一點溫馨，聖誕節多一點喜氣</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>Flower is best gift</p></IonText>
    <IonText color="light"><p style="font-family: 'pixel ch'"> <br/>瞭解植物知識、種植到開花、花語。</p></IonText>
    <br/><button @click="push_to('/mint')">go to mine</button>
    <br/><button @click="push_to('/roadmap')">go to roadmap</button>
    <div v-if="screen_length<540" style="width: 180px;height: 180px"></div>
    <div v-else style="width: 370px;height: 370px"></div>
    <a class="e-widget no-button" :href="slice.primary.gleam_embed" rel="nofollow" >
      {{ slice.primary.gleam_title }}
    </a>
  </div>
</template>

<script>
import {IonText} from "@ionic/vue"
export default {
  name: "tmi_mint_site",
  components:{IonText},
  methods:{
    push_to(path){
      this.$router.push(path)
    }
  },
  created(){
    document.title = "歡迎" + document.title.substr(document.title.indexOf("｜"),999)
  },
  mounted() {
    let gleam = document.createElement('script')
    gleam.setAttribute('src', 'https://js.gleam.io/e.js')
    document.head.appendChild(gleam)
  },
  data(){
    return {
      slice:{
        primary:{
          gleam_embed:'https://gleam.io/VrFdG/-nft-lanuch-giveaway',
          gleam_title:'賣花少年|像素康乃馨 NFT Lanuch giveaway'
        }
      }
    }
  },
  computed:{
    "screen_length"(){
      return window.screen.width
    }
  }
}
</script>

<style scoped>
IonText {
  white-space: pre-line;
}
p{
  background-color: rgba(0,31,220,0.87) ;
  display: inline;
}
h3{
  background-color: rgba(0,31,220,0.87) ;
  display: inline;
}

</style>