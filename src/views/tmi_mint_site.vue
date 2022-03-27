<template>
  <div>
    <h1>TMI</h1>
    <h2>too much Irene</h2>
    <h2>gallery</h2>
    <!--  4:3-->
    <ion-slides
      :options="{ slidesPerView: 'auto', zoom: false, grabCursor: true }"
    >
      <ion-slide
        style="width: 12.5%; height: 16.6%; border: 2px solid #f8f8f8"
        v-for="img in imgs"
        v-bind:key="imgs.indexOf(img)"
      >
        <ion-col>
          <ion-label>Card #{{ imgs.indexOf(img) + 2 }}</ion-label>
          <ion-img
            style="pointer-events: none; border-radius: 12.5%; overflow: hidden"
            :src="img"
          ></ion-img>
        </ion-col>
      </ion-slide>
    </ion-slides>
<mint/>
  </div>
</template>

<script>
import mint from '@/components/tmi_mint_site/mint';
import {
  IonSlides,
  IonSlide,
  IonImg,
  IonLabel,
} from "@ionic/vue";
export default {
  name: "tmi_mint_site",
  components: { IonSlides, IonSlide, IonImg, IonLabel
    ,mint},
  data() {
    return {
      imgs: [
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
        `https://ipfs.io/ipfs/QmW9xCDXnZFS1eZJj2VkBb5amCXcMcfcttXLo9SddAwzZc/${Math.floor(
          Math.random() * 588
        )}.png`,
      ],
      metamask_response: {
        network: "rinkeby",
        current: "",
      },
      contract_address: "0x000000000",
      white_list: [],
      token_id: "123",
    };
  },
};
</script>