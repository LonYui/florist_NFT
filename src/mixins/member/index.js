export let use_member = {
    data() {
        return {
            member: {
                mob:'0912345678',
                sexuality: 'm',
                username: 'test',
                birth_datetime: '1234/12/23',
                mob_country_code: '+86',
                email: 'test@test.com',
                image_url: 'https://test.com',
                created_time: '1234/12/23',
                metamask_address:'0x1234123412341234123412341234',
            }

        }
    },
    methods: {
        fetch_get_member(uuid) {

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member/read?member_id=${uuid}`, requestOptions)
        },
        fetch_post_member({
                              member_id,
                              mob,
                              sexuality,
                              username,
                              birth_datetime,
                              mob_country_code,
                              email,
                              image_url
                          } = {}) {

            var formdata = new FormData();
            formdata.append("member_id", member_id);
            formdata.append("mob", mob);
            if (sexuality) formdata.append("sexuality", sexuality);
            if (username) formdata.append("username", username);
            if (birth_datetime) formdata.append("birth_datetime", birth_datetime);
            if (mob_country_code) formdata.append("mob_country_code", mob_country_code);
            if (email) formdata.append("email", email);
            if (image_url) formdata.append("image_url", image_url);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member/create`, requestOptions)
        },
    },
    created(){
        this.member={}
    }
}