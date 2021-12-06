<template>
	<div class="banner-img">
		<i>
			<img src="../imgs/return-icon.svg" alt="" class="return-icon" />
		</i>
		<section class="container">
			<button type="button" class="btn-text" @click="push_to_page5">參加活動</button>

			<button type="button" class="btn-text" @click="redirect_to_landing_page()">關於我們</button>
		</section>
	</div>
</template>


<script>
	import "./page4.css";
  import router from "../../router";
	export default {
		name: "page4",
    methods:{
      redirect_to_landing_page(){
        window.location.replace('https://ccb.rocks/zhongwen_index.html')
      },
      push_to_page5(){
        router.push('/page5')
      }
    },
	};
</script>
