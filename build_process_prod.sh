vue-cli-service build
rpl '<link rel="manifest" href="/manifest.json">' '<link rel="manifest" id="my-manifest-placeholder">' dist/index.html
rpl '<link rel="apple-touch-icon" href="/img/icons/apple-touch-icon-152x152.png">' '    <link rel="apple-touch-icon" sizes="57x57" href="/img/icons/apple-icon-57x57.png">
                                                                                         <link rel="apple-touch-icon" sizes="60x60" href="/img/icons/apple-icon-60x60.png">
                                                                                         <link rel="apple-touch-icon" sizes="72x72" href="/img/icons/apple-icon-72x72.png">
                                                                                         <link rel="apple-touch-icon" sizes="76x76" href="/img/icons/apple-icon-76x76.png">
                                                                                         <link rel="apple-touch-icon" sizes="114x114" href="/img/icons/apple-icon-114x114.png">
                                                                                         <link rel="apple-touch-icon" sizes="120x120" href="/img/icons/apple-icon-120x120.png">
                                                                                         <link rel="apple-touch-icon" sizes="144x144" href="/img/icons/apple-icon-144x144.png">
                                                                                         <link rel="apple-touch-icon" sizes="152x152" href="/img/icons/apple-icon-152x152.png">
                                                                                         <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-icon-180x180.png">
' dist/index.html
rpl '<meta name="msapplication-TileImage" content="/img/icons/msapplication-icon-144x144.png">' '<meta name="msapplication-TileImage" content="/img/icons/ms-icon-144x144.png">' dist/index.html
ccb_rock_pwa_version=$(jq -r '.version' package.json)
heroku config:set ccb-rock-pwa-version=$ccb_rock_pwa_version --app ccb-rock-backed-prod
firebase use prod
firebase deploy