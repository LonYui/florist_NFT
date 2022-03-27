/* eslint-disable no-undef */
/* eslint no-use-before-define: 0 */  // --> OFF
// from https://gist.github.com/wdmtech/c77ae1b30767e275240545f319871cb2
export let facebookSDK = {
    mounted () {
        let _this = this
        // todo understainding the nextTick => what: this make mixin'hook call agter compomnet's hook
        // this.$nextTick(() => {
            window.fbAsyncInit = function () {
                FB.init({
                    appId: '722300725407829',
                    xfbml: true,
                    version: process.env.VUE_APP_facebook_js_sdk_version
                })
                FB.AppEvents.logPageView()
                _this.FB = FB
                console.log('FB SDK was initialized as mixin')
            };
            (function (d, s, id) {
                let js, fjs = d.getElementsByTagName(s)[0]
                if (d.getElementById(id)) { return }
                js = d.createElement(s); js.id = id
                js.src = '//connect.facebook.net/en_US/sdk.js'
                fjs.parentNode.insertBefore(js, fjs)
            }(document, 'script', 'facebook-jssdk'))
        // })
    },
    data () {
        return {
            FB: {}
        }
    }
}