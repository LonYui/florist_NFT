<template>
  <div class="balck-background">
	<section class="container">
		<div class="border-serial">
    <i>
      <img
          src="../imgs/return-icon-white.svg"
          alt=""
          class="return-icon-white"
          @click="push_to_page5()"
      />
    </i>
			<span class="serial-num">152</span>
		</div>
	</section>
  </div>
</template>
<script>
	import "./page6.css";
  import router from "../../router";

	export default {
		name: "page6",
    methods:{
      push_to_page5(){
        router.replace('/page5').then(()=>{window.location.reload()})
      }

    }
	};
</script>

<style scoped>
</style>