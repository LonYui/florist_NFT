<template>
  <div id="roadmap"></div>
</template>

<script>

const [s1,s2,cl,
  g1,g2,g3,
  r1,r2,r3,
  e1,e2,e3,
] = ['sky_up','sky_down','cloud',
  'grass_some','grass_more','grass_a_lot',
  'rock_little','rock_greate','rock_huge',
  'earth_dry','earth_moist','earth_wet',
]
const color_stard_for = {
  sky_up: "#ABDBE8", sky_down: "#D2E6ED",
  cloud: "#FFFFFF",
  grass_some:"#91BA51",grass_more:"#83AB38",grass_a_lot:"#5A7C2F",
  rock_little:"#DED3D9",rock_greate:"#9E8E99",rock_huge:"#80747E",
  earth_dry:"#6D6452",earth_moist:"#635846",earth_wet:"#585149"
}
export default {
  name: "tmi_mint_site",
  mounted(){
    const sketch = p => {
      let gird = [
          [s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,cl,cl,cl,cl,   cl,cl,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,],
          [s1,s1,s1,s1,s1,   s1,s1,s1,cl,cl,   cl,cl,cl,cl,cl,   s1,s1,s1,s1,cl,  cl,cl,cl,cl,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,],
          [s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,cl,cl,  cl,cl,cl,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,],
          [s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,cl,cl,cl,  cl,cl,s1,s1,s1,  s1,s1,s1,s1,cl,  cl,cl,cl,cl,cl,  cl,],
          [s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,cl,cl,cl,  cl,cl,cl,cl,cl,  cl,],

          [cl,cl,cl,cl,cl,   cl,cl,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,  s1,s1,s1,s1,cl,  cl,cl,cl,cl,cl,  cl,cl,cl,cl,cl,  cl,],
          [cl,cl,cl,cl,cl,   cl,cl,cl,cl,cl,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,cl,cl,  cl,cl,cl,cl,cl,  cl,],
          [cl,cl,cl,cl,cl,   cl,cl,cl,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,],
          [s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,],
          [s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,],

          [s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,],
          [s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,],
          [s2,s2,s2,s2,s2,   s2,s2,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s2,s2,s2,s2,s2,  s2,],
          [s2,s2,s2,s2,s2,   s2,s2,s1,s1,s1,   s1,s1,s1,s1,s1,   s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s1,s1,s1,s1,s1,  s2,s2,s2,s2,s2,  s2,],
          [s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,],

          [s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,],
          [s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,],
          [g1,g1,g2,g1,g2,   g1,g1,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,],
          [r2,r3,r3,r2,r2,   r3,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,],
          [r3,r2,r2,r2,r3,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,],

          [s2,s2,r3,r3,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,r1,r3,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,],
          [s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,r2,r2,r2,r2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,],
          [s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   r3,r2,r3,r3,r2,  r1,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,],
          [s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,s2,r1,   r2,r3,r2,r2,r3,  r2,r3,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,],
          [s2,s2,s2,s2,s2,   s2,s2,s2,s2,s2,   s2,s2,s2,r3,r2,   r3,r2,r2,r3,r3,  r2,r2,r3,s2,s2,  s2,s2,s2,s2,s2,  s2,s2,s2,s2,s2,  s2,],

          [g2,g1,g1,g2,g2,   g2,g2,g3,g2,g2,   g2,g1,g2,g2,g2,   g2,g2,g2,g2,g1,  g2,g3,g2,g2,g2,  g2,g2,g2,g1,g2,  g3,g2,g2,g3,g2,  g2,],
          [g2,g2,g2,g3,g2,   g1,g2,g1,g2,g3,   g2,g2,g3,g2,g3,   g2,g3,g2,g2,g2,  g2,g3,g2,g1,g2,  g2,g3,g3,g2,g1,  g2,g2,g2,g1,g2,  g3,],
          [g2,g3,g2,g2,g2,   g2,g3,g2,g2,g2,   g3,g2,g2,g1,g2,   g2,g2,g2,g2,g2,  g2,g2,g2,g3,g2,  g2,g2,g2,g2,g3,  g3,g2,g2,g2,g2,  g1,],
          [e1,e1,e3,e2,e1,   e2,e1,e1,e1,e1,   e1,e2,e1,e3,e1,   e1,e1,e1,e1,e1,  e1,e1,e3,e1,e1,  e1,e2,e1,e1,e3,  e1,e1,e1,e2,e1,  e1,],
          [e3,e1,e1,e1,e2,   e1,e1,e3,e1,e3,   e1,e3,e1,e1,e1,   e1,e1,e1,e1,e1,  e1,e1,e2,e1,e1,  e2,e1,e1,e1,e1,  e1,e2,e1,e3,e1,  e1,],

          [e1,e1,e1,e3,e1,   e1,e2,e1,e1,e1,   e1,e1,e1,e2,e1,   e1,e1,e1,e1,e1,  e1,e2,e1,e1,e3,  e1,e1,e3,e1,e1,  e2,e1,e1,e2,e1,  e2,],
          [e1,e1,e1,e1,e1,   e2,e1,e1,e1,e2,   e1,e1,e1,e3,e1,   e1,e1,e1,e1,e1,  e1,e1,e3,e1,e1,  e1,e2,e1,e1,e1,  e3,e1,e2,e1,e1,  e1,],
          [e3,e1,e2,e3,e1,   e3,e1,e1,e1,e1,   e1,e1,e1,e1,e1,   e2,e1,e1,e1,e1,  e2,e1,e2,e1,e2,  e1,e1,e1,e2,e1,  e1,e2,e1,e1,e3,  e1,],
          [e1,e1,e1,e1,e1,   e1,e1,e1,e1,e1,   e1,e3,e1,e1,e2,   e1,e1,e1,e1,e1,  e1,e1,e1,e1,e2,  e1,e1,e3,e1,e1,  e2,e1,e2,e1,e1,  e1,],
          [g2,g2,g2,g2,g2,   g2,g2,g2,g2,g2,   g2,g2,g2,g2,g2,   g2,g2,g2,g2,g2,  g2,g2,g2,g2,g2,  g2,g2,g2,g2,g2,  g2,g2,g2,g2,g2,  g2,],
          [g2,g2,g2,g2,g2,   g2,g2,g2,g2,g2,   g2,g2,g2,g2,g2,   g2,g2,g2,g2,g2,  g2,g2,g2,g2,g2,  g2,g2,g2,g2,g2,  g2,g2,g2,g2,g2,  g2,],

      ];
      let resolution = 15;

      p.setup = () => {
        let canvas = p.createCanvas(
            document.querySelector("body").clientWidth,
            document.querySelector("body").clientHeight
        );
      };

      p.draw = () => {
        p.background(0);
        p.noStroke();
        for (let i = 0; i < gird.length; i++) {
          for (let j = 0; j < gird[0].length; j++) {
            let x = (document.querySelector("body").clientWidth - resolution*36) / 2 + j * resolution;
            let y = i * resolution;

            p.fill(color_stard_for[gird[i][j]])
            p.rect(x, y, resolution, resolution,resolution/8);
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