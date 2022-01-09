<template>
  <IonItem >
    {{restaurant_id.name}} {{avg_score}} {{point_in_str}}
    {{reviewer_id.user_name}}--{{text}}
  </IonItem>
</template>

<script>
import {IonItem,} from '@ionic/vue';
export default {
  name: "reviewItem",
  components: {IonItem,},
  props:['restaurant_id','reviewer_id','text','stars_of_reveiws'],
  computed:{
    avg_score(){
      var score = 0
      for (let key in this.stars_of_reveiws){
        score = score + this.stars_of_reveiws[key].point / this.stars_of_reveiws.length
      }
      return score
    },
    point_in_str() {
      const x = this.avg_score
      if (x === 0) return '☆☆☆☆☆'
      else if (x <= 1) return '☆☆☆☆★'
      else if (x <= 2) return '☆☆☆★★'
      else if (x <= 3) return '☆☆★★★'
      else if (x <= 4) return '☆★★★★'
      else if (x <= 5) return '★★★★★'
      return ''
    }

  }
}
</script>

<style scoped>

</style>