<template>
{{title}}
  <br/>
{{contract_name}}#{{token_id}}:{{price}}
  <br/>
  {{description}}

</template>

<script>
const default_sale = {
  title:'ccb 發行 ntf',
  description:'rare dog',
  price:12000,
}
export default {
  name: "Sale_detail",
  data(){
    return {
      title:default_sale.title,
      price:default_sale.price,
      description:default_sale.description,
      contract_name:'yolo cat',
    }
  },
  props:['token_id'],
  mounted(){
    // fetch the sale from our app
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/sale?contract_address=${this.$route.params.contract_address}&token_id=${this.token_id}`, requestOptions)
        .then(response => response.json().then(json => {
          for (var key in default_sale) {
            this[key] = json[key]
          }
        }))
    //fetch the contract from ether scan
  },
}
</script>