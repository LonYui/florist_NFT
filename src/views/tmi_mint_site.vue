<template>
  <div id="mint" >
    <mint/>
  </div>
</template>

<script>
import mint from '@/components/tmi_mint_site/mint';

const [pi,c,s,l,t] = ['pillar','cloud','sun','leaf','tree']
const color_stard_for = { 1:"#FFD2D2",0:"#C8FBFE",
  pillar: "#FFA800", cloud: "#FFFFFF", sun: "#FDC840",
  leaf:"#90C86D", tree:"#9F6E52"
}
export default {
  name: "tmi_mint_site",
  components:{mint},
  mounted(){
    const sketch = p => {
      let gird = [
          [pi,1,1,1,1   ,1,1,1,1,1   ,1,1,1,1,1   ,1,1,pi],
          [1,0,0,s,0   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],
          [1,c,c,s,s   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],
          [1,c,c,c,0   ,0,0,0,0,0   ,0,0,0,0,0   ,c,c,1],
          [1,c,0,0,0   ,0,0,0,0,0   ,0,0,0,0,c   ,c,c,1],

          [1,0,0,0,0   ,0,0,0,0,0   ,0,0,0,0,0   ,0,c,1],
          [1,0,0,0,0   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],
          [1,0,0,0,0   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],
          [1,0,0,0,0   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],
          [1,0,0,0,0   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],

          [1,0,0,0,0   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],
          [1,0,0,0,0   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],
          [1,0,0,l,0   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],
          [1,0,l,l,l   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],
          [1,l,l,l,l   ,l,0,0,0,0   ,0,0,0,0,0   ,0,0,1],

          [1,0,0,t,0   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],
          [1,0,0,t,0   ,0,0,0,0,0   ,0,0,0,0,0   ,0,0,1],
          [pi,1,1,1,1   ,1,1,1,1,1   ,1,1,1,1,1   ,1,1,pi],
      ];
      let resolution = 30;

      p.setup = () => {
        let canvas = p.createCanvas(
            document.querySelector("body").clientWidth,
            document.querySelector("body").clientHeight
        );
      };

      p.draw = () => {
        p.background(0);
        for (let i = 0; i < gird.length; i++) {
          for (let j = 0; j < gird[0].length; j++) {
            let x = (document.querySelector("body").clientWidth - resolution*18) / 2 + j * resolution;
            let y = i * resolution;

            p.fill(color_stard_for[gird[i][j]])
            p.rect(x, y, resolution, resolution,resolution/10);
          }
        }
      };

      document.querySelector("body").addEventListener("click", () => {
        p.setup();
      });
    }
    const P5 = require('p5')
    new P5(sketch)
  }
}
</script>

<style scoped>

</style>