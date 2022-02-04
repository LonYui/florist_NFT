export let use_member_NFTs = {
    data() {
        return {
            NFTs: [{
                "contract_address": "0x3ba8ad37211ad070dca1a5f0a7f1fee6aab3fdc1",
                "token_id": "0x00000000000000000000000000000000000000000000000000000000000000c7",
                "balance": "1"
            },{
                "contract_address": "0x3ba8ad37211ad070dca1a5f0a7f1fee6aab3fdc1",
                "token_id": '0x00000000000000000000000000000000000000000000000000000000000000c8',
                "balance": "1"
            }
            ]
        }
    },
    methods:{
        fetch_memeber_nft(member_id){
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member/nfts?member_id=${member_id}`, requestOptions)
        },
    }
}