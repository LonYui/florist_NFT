<template>
  <ion-button v-if="定位url">
    <ion-icon slot="start" :icon="ellipse"></ion-icon>
    定位
  </ion-button>
  <ion-list>
    <ion-item>
      <ion-icon :icon="locationOutline" />
      {{地址}}
    </ion-item>
<!--    <ion-item>TODO plus code-->
<!--      <ion-icon :icon="ellipse" />-->
<!--      {{地址}}-->
<!--    </ion-item>-->
    <ion-item v-if="營業時間">
      <ion-icon :icon="timeOutline" />
      {{營業時間}}
    </ion-item>
    <ion-item v-if="外送url">
      <ion-icon :icon="ellipse" />
      預定{{外送url}}
    </ion-item>
    <ion-item v-if="定位url">
      <ion-icon :icon="calendarOutline" />
      定位{{定位url}}
    </ion-item>
    <ion-item v-if="即時通訊url">
      <ion-icon :icon="chatboxEllipsesOutline" />
      立刻與我們聯繫{{即時通訊url}}
    </ion-item>
    <ion-item>
      <ion-icon :icon="callOutline" />
      {{電話}}
    </ion-item>
    <ion-item v-if="官方網站">
      <ion-icon :icon="earthOutline" />
      {{官方網站}}
    </ion-item>
    <ion-item>
      <ion-icon :icon="createOutline" />
      提出修改建議
    </ion-item>
  </ion-list>
  <p>評論摘要 avg:{{totalScore}}
    1:{{reviewsDistribution.oneStar}}
    2:{{reviewsDistribution.twoStar}}
    3:{{reviewsDistribution.threeStar}}
    4:{{reviewsDistribution.fourStar}}
    5:{{reviewsDistribution.fiveStar}}
  </p>
  <p>熱門主題(爬不到)</p>
  <p><a href="">查看所有評論</a>(comming soon)</p>
  <p>菜單精選(爬不到)</p>
  <p>查看菜單(爬不到)</p>
  <p>熱門時段(爬不到)</p>
  <p>附近的車站(爬不到)</p>
  <p>最新相片(comming soon)</p>
  <p>相片(comming soon)</p>
  <p>評分及評論(comming soon)</p>
  <p>評論(comming soon)</p>

</template>


<script>
import {
  calendarOutline,
  chatboxEllipsesOutline, createOutline, earthOutline,
  ellipse,
  locationOutline,
  timeOutline,
  callOutline
} from "ionicons/icons";
import {IonItem, IonList} from "@ionic/vue";
export default  {
  name: 'TabOverview',
  components: {IonList, IonItem},
  setup(){
    return {
      locationOutline, timeOutline,calendarOutline,chatboxEllipsesOutline,earthOutline,createOutline,callOutline,

      ellipse
    }
  },
  props:[
    '地址',
    '營業時間',
    '外送url',
    '定位url',
    '即時通訊url',
    '電話',
    '官方網站',
    'reviewsDistribution',
    'totalScore',
  ]
}
</script>