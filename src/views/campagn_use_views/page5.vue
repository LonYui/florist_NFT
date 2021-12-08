<template>
	<div class="banner-img">
		<i>
			<img src="../imgs/return-icon.svg" alt="" class="return-icon" @click="push_to_page4()"/>
		</i>
		<section class="container">
			<button type="button" class="btn-text" @click="push_to_page6">
				<p>競標大明星 <span>2021/12/16</span></p>
				<p>SUPERSTAR <span>AUCTION GALA</span></p>
			</button>

			<button type="button" class="btn-text" @click="open_back_school_page()">
				<p>返校派對 <span>2022/01/02</span></p>
				<p>HOMECOMING <span>PARTY</span></p>
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
        router.replace('/page6').then(()=>{window.location.reload()})
      },
      push_to_page4(){
        router.replace('/page4').then(()=>{window.location.reload()})
      },
      open_back_school_page(){
        window.open('https://www.accupass.com/event/2111020651351616384553?utm_source=other&utm_medium=Direct&utm_campaign=accu_211116b75daacg')
      }

    },
	};
</script>

<style scoped>
</style>