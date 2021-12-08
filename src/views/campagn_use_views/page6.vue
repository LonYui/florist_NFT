<template>
 <div class="black-background" @click="click_page()">
		<div class="border-serial">
    <i>
      <img
          src="../imgs/return-icon-white.svg"
          alt=""
          class="return-icon-white"
          @click="push_to_page5()"
      />
    </i>
			<span class="serial-num">{{ 拍賣數字 }}</span>
		</div>
 </div>
</template>
<script>
	import "./page6.css";
  import router from "../../router";
  import {facebookSDK} from "../../mixins/facebook_javascript_sdk"
	export default {
		name: "page6",
    mixins:[facebookSDK,],
    data(){
      return{
        拍賣數字:'non',
      }
    },
    watch: {
      '拍賣數字': function (val) {
        if (val.toString().length===1){
          this.拍賣數字= '00'+val.toString()
        }
        else if (val.toString().length===2){
          this.拍賣數字 ='0'+val.toString()
        }
      }
    },
    methods:{
      push_to_page5(){
        router.replace('/page5').then(()=>{window.location.reload()})
      },
      fetch_member_join_order(mob){

        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member/created_order?mob=${mob}`, requestOptions)
            .then(response => {
              return response
            })
      },
      fetch_member_mob_by_facebook_user_id(facebook_user_id){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member_mob_by_facebook_user_id?facebook_user_id=${facebook_user_id}`, requestOptions)
            .then(response => {
              return response
            })
      },
    },
  async mounted(){
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(1000);

    var facebook_user_id
    await this.FB.getLoginStatus(function(response) {
      facebook_user_id = response.authResponse.userID
    });

    const response_1 = await this.fetch_member_mob_by_facebook_user_id(facebook_user_id)
    var mob
    await response_1.json().then(json=>{
      mob = json.mob
    })
    const response_2 = await this.fetch_member_join_order(mob)
    response_2.json().then(json=>{
      this.拍賣數字 = json.order
    })
  },
  };
</script>

<style scoped>
</style>