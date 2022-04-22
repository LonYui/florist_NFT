<template>
      <div id="mint" >
    <mint/>
  </div>
</template>

<script>
import mint from '@/components/tmi_mint_site/mint';


export default {
  name: "tmi_mint_site",
  components:{mint},
  mounted(){
    const sketch = p => {
      let gird;
      let cols;
      let rows;
      let resolution = 10;

      const make2DArray = (cols, rows) => {
        let arr = new Array(cols);
        for (let x = 0; x < arr.length; x++) {
          arr[x] = new Array(rows);
        }
        return arr;
      };

      const setValue = grid => {
        for (let x = 0; x < cols; x++) {
          for (let y = 0; y < rows; y++) {
            grid[x][y] = p.floor(p.random(2));
          }
        }
        return grid;
      };

      const rule = (self, neighbor) => {
        let flag = self;
        const SUM = neighbor.reduce((acc, cur) => (acc += cur));
        if (self === 0 && SUM === 3) {
          flag = 1;
        } else if (self === 1 && (SUM < 2 || SUM > 3)) {
          flag = 0;
        }
        return flag;
      };

      const getNeighbor = (grid, x, y, direction) => {
        if (!direction) direction = 4;
        let result = [];
        const MAXX = grid.length - 1;
        const MAXY = grid[0].length - 1;

        let dirX = [-1, 1, 0, 0, -1, 1, -1, 1];
        let dirY = [0, 0, -1, 1, -1, -1, 1, 1];

        if (x === 0) dirX = dirX.map(dx => (dx === -1 ? MAXX : dx));
        if (y === 0) dirY = dirY.map(dy => (dy === -1 ? MAXY : dy));
        if (x === MAXX) dirX = dirX.map(dx => (dx === 1 ? -MAXX : dx));
        if (y === MAXY) dirY = dirY.map(dy => (dy === 1 ? -MAXY : dy));

        const STEP = Array.from(Array(direction).keys());

        STEP.forEach(function(i) {
          result.push(grid[x + dirX[i]][y + dirY[i]]);
        });

        return result;
      };

      const update = () => {
        let next = make2DArray(cols, rows);
        for (let x = 0; x < cols; x++) {
          for (let y = 0; y < rows; y++) {
            next[x][y] = rule(gird[x][y], getNeighbor(gird, x, y, 8));
          }
        }
        gird = next;
      };

      p.setup = () => {
        p.createCanvas(
            document.querySelector("body").clientWidth,
            document.querySelector("body").clientHeight
        );
        cols = ~~(p.width / resolution);
        rows = ~~(p.height / resolution);
        gird = setValue(make2DArray(cols, rows));
      };

      p.draw = () => {
        p.background(0);

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (gird[i][j] === 1) {
              p.fill(144, 255, 59);
              p.rect(x, y, resolution, resolution);
            }
          }
        }
        update();
      };

      //クリックで再度実行
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