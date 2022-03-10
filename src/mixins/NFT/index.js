export let use_NFT = {
    data() {
        return {
            NFT: {
                "contract": {
                    "address": "0xa720a6754b20e1204e77a4f1625410c6e9e8413a"
                },
                "id": {
                    "tokenId": "222",
                    "tokenMetadata": {
                        "tokenType": "ERC721"
                    }
                },
                "title": "",
                "description": "",
                "tokenUri": {
                    "raw": "https://metadata.sueibiandao.io/222",
                    "gateway": "https://metadata.sueibiandao.io/222"
                },
                "media": [
                    {
                        "uri": {
                            "raw": "ipfs://QmYCG7viHB2HXi7yDv12xsudwdHPWWHWghFfdbzb3TdXTN",
                            "gateway": "https://ipfs.io/ipfs/QmYCG7viHB2HXi7yDv12xsudwdHPWWHWghFfdbzb3TdXTN"
                        }
                    }
                ],
                "metadata": {
                    "image": "ipfs://QmYCG7viHB2HXi7yDv12xsudwdHPWWHWghFfdbzb3TdXTN",
                    "attributes": [
                        {
                            "trait_type": "Background",
                            "value": "Sueibian Light Purple"
                        },
                        {
                            "trait_type": "CupBody",
                            "value": "Sueibian Blue"
                        },
                        {
                            "trait_type": "Texture",
                            "value": "Sueibian Exclusive Pattern 1"
                        },
                        {
                            "trait_type": "CupTop",
                            "value": "Sueibian Bubble Yellow"
                        },
                        {
                            "trait_type": "Straw",
                            "value": "Sueibian Yellow"
                        },
                        {
                            "trait_type": "Eyes",
                            "value": "Sueibian Bear Blue"
                        },
                        {
                            "trait_type": "Head",
                            "value": "Sueibian Bear White"
                        },
                        {
                            "trait_type": "Face",
                            "value": "Sueibian Suture 3"
                        },
                        {
                            "trait_type": "CupBottom",
                            "value": "Sueibian Planet 4"
                        }
                    ]
                },
                "timeLastUpdated": "2022-02-04T05:31:50.565Z"
            }        }
    },
    methods:{
        fetch_NFT_metadata(address,token_id,token_type='erc721'){
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            return fetch(`${process.env.VUE_APP_alchemyapi_domain}/${process.env.VUE_APP_alchemyapi_key}/getNFTMetadata?contractAddress=${address}&tokenId=${token_id}&tokenType=${token_type}`, requestOptions)
        },
        refresh(){
            const _this = this
            this.fetch_NFT_metadata(this.address,this.token_id).then(response => {
                response.json().then(json => {
                    _this.NFT = json
                })
            })
        },
    },
    computed:{
        image_url() {
            // check is ipfs?
            const regex_http = /^https:\/\//
            const regex_ifps = /^ipfs:\/\//
            if (regex_ifps.test(this.NFT['metadata']['image'])) {
                // is -> use hardcode source1:
                return this.NFT['metadata']['image'].replace('ipfs://','https://cloudflare-ipfs.com/ipfs/')
            }
            // check is https
            else if (regex_http.test(this.NFT['metadata']['image'])) {
                //is return
                return this.NFT['metadata']['image']
            } else {
                return -1
            }
        },
        token_id_ten(){
            return parseInt(this.token_id, 16)
        }
    },
    mounted(){
        const _this = this
        this.fetch_NFT_metadata(this.address,this.token_id).then(response => {
            response.json().then(json => {
                _this.NFT = json
            })
        })
    },
    watch:{
        'token_id':function (){
            const _this = this
            this.fetch_NFT_metadata(this.address,this.token_id).then(response => {
                response.json().then(json => {
                    _this.NFT = json
                })
            })
        }
    },
}