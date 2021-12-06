<template>
	<div class="banner-img">
		<i>
			<img src="../imgs/return-icon.svg" alt="" class="return-icon" />
		</i>
		<section class="container">
			<button type="button" class="btn-text" @click="push_to_page6">
				<p>競標大明星 <span>2016/12/06</span></p>
				<p>SUPERSTAR <span>AUCTION GALA</span></p>
			</button>

			<button type="button" class="btn-text">
				<p>競標大明星 <span>2016/12/06</span></p>
				<p>SUPERSTAR <span>AUCTION GALA</span></p>
			</button>
		</section>
	</div>
</template>




<script>
	import "./page5.css";
  import router from "../../router";
	export default {
		name: "page5",
    methods:{
      push_to_page6(){
        router.push('/page6').then(()=>{window.location.reload()})
      }
    },
	};
</script>

<style scoped>
</style>