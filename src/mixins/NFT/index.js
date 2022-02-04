export let use_NFT = {
    data() {
        return {
            NFT: {
                "contract": {
                    "address": "0x3ba8ad37211ad070dca1a5f0a7f1fee6aab3fdc1"
                },
                "id": {
                    "tokenId": "0x00000000000000000000000000000000000000000000000000000000000000c7",
                    "tokenMetadata": {
                        "tokenType": "ERC721"
                    }
                },
                "title": "#199",
                "description": "5,555 Stickman X coming to the metaverse",
                "tokenUri": {
                    "raw": "https://nft.aiyah.io/199.json",
                    "gateway": "https://nft.aiyah.io/199.json"
                },
                "media": [
                    {
                        "uri": {
                            "raw": "https://nft.aiyah.io/199.png",
                            "gateway": "https://nft.aiyah.io/199.png"
                        }
                    }
                ],
                "metadata": {
                    "name": "#199",
                    "collection": "Aiyah Verse Stickman X",
                    "id": "8b2e2fd08974ae30cc1a93303ede504c63beba18",
                    "description": "5,555 Stickman X coming to the metaverse",
                    "image": "https://nft.aiyah.io/199.png",
                    "external_url": "https://nft.aiyah.io/199.png",
                    "animation_url": "https://nft.aiyah.io/199.png",
                    "attributes": [
                        {
                            "trait_type": "BACKGROUND",
                            "value": "Wine Red Fluorescent Triangle"
                        },
                        {
                            "trait_type": "CLOTHES",
                            "value": "Brown Painted"
                        },
                        {
                            "trait_type": "HELMET",
                            "value": "Purple Killzone"
                        },
                        {
                            "trait_type": "MASK",
                            "value": "None"
                        },
                        {
                            "trait_type": "MODELING",
                            "value": "None"
                        },
                        {
                            "trait_type": "EYE",
                            "value": "None"
                        },
                        {
                            "trait_type": "MOUTH",
                            "value": "None"
                        },
                        {
                            "trait_type": "HAIR",
                            "value": "None"
                        },
                        {
                            "trait_type": "TATTOO",
                            "value": "None"
                        },
                        {
                            "trait_type": "WEAPON",
                            "value": "Dagger"
                        },
                        {
                            "trait_type": "VFX",
                            "value": "None"
                        }
                    ],
                    "optionIds": [
                        "BACKGROUND@Wine Red Fluorescent Triangle",
                        "BASE@Darkness",
                        "WEAPON_BACK@Dagger",
                        "CLOTHES@Brown Painted",
                        "HELMET@Purple Killzone",
                        "MASK@None",
                        "MODELING@None",
                        "EYE@None",
                        "MOUTH@None",
                        "HAIR@None",
                        "TATTOO@None",
                        "WEAPON_FRONT@Dagger",
                        "VFX@None"
                    ],
                    "number": 199,
                    "extension": "png",
                    "compiler": "AIYAH VERSE"
                },
                "timeLastUpdated": "2022-02-04T06:19:45.859Z"
            }
        }
    },
    methods:{
        fetch_NFT_metadata(address,token_id,token_type='erc721'){
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            return fetch(`https://eth-mainnet.alchemyapi.io/v2/qU8XsEsGWwI4Lxt5bc_hcj0F64rB8VnD/getNFTMetadata?contractAddress=${address}&tokenId=${token_id}&tokenType=${token_type}`, requestOptions)
        }
    }
}