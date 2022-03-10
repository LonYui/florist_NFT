<template>
  <button @click="mint()" v-show="metamask_response.current?true:false">mint</button>
  <br/>
  <button @click="white_list_mint()" v-show="white_list.includes(metamask_response.current)">white_list_mint</button>
  <br/>
  <div v-if="metamask_response.current?true:false">
    <h1 v-if="metamask_response.network!=='mainnet'"> warn:this is testnet{{ metamask_response.network }}</h1>
    <p>current connect to :{{ metamask_response.current }}</p>
  </div>
  <div v-else>
    <button @click="connet_to_metamask()">connet_to_metamask</button>
  </div>
</template>

<script>
import {loadingController} from '@ionic/vue';

export default {
  name: "tmi_mint_site",
  data() {
    return {
      metamask_response: {
        network: 'rinkeby',
        current: '',
      },
      contract_address: '0x000000000',
      white_list: [],
      token_id: '123',
    }
  },
  methods: {
    async mint() {
      if (!this.metamask_response.current) {
        alert('plz conn to web3')
        return
      }
      const loading = await loadingController
          .create({
            message: '等待交易',
            duration: 9999 * 1000,
          });
      await loading.present();

      // TODO execute abi - mint  return contract_address and token_id
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(4000);
      // TODO end

      loading.dismiss()
      alert(`get ${this.contract_address}#${this.token_id}`)

    },
    async white_list_mint() {
      if (!this.metamask_response.current) {
        alert('plz conn to web3')
        return
      }
      if (!this.white_list.includes(this.metamask_response.current)) {
        alert('ur not in whitelist')
        return
      }
      const loading = await loadingController
          .create({
            message: '等待交易',
            duration: 9999 * 1000,
          });
      await loading.present();

      // TODO execute abi - white_list_mint  return contract_address and token_id
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(4000);
      // TODO end

      loading.dismiss()
      alert(`get ${this.contract_address}#${this.token_id}`)

    },
    connet_to_metamask() {
      // TODO metamask login
      // metamask login end
      this.metamask_response = {
        network: 'rinkeby',
        current: 'david.eth',
      }
      alert(`connect to ${this.metamask_response.current}`)
    },
    abi_get_contract_whitelist() {
      return ['david.eth', '0x24f40E6c01E8f5A33cf003Ba666D78dcE1577A42']
    }
  },
  mounted() {
    this.white_list = this.abi_get_contract_whitelist()
  }
}
</script>

<style scoped>

</style>