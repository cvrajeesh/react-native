/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('React');
var Site = require('Site');
var center = require('center');

var apps = [
  {
    name: 'AIGA Design Conference 2015: New Orleans',
    icon: 'http://a5.mzstatic.com/us/r30/Purple69/v4/b0/4b/29/b04b2939-88d2-f61f-dec9-24fae083d8b3/icon175x175.png',
    link: 'https://itunes.apple.com/us/app/aiga-design-conference-2015/id1038145272?ls=1&mt=8',
    author: 'W&Co',
  },
  {
    name: 'Beetroot',
    icon: 'http://is1.mzstatic.com/image/pf/us/r30/Purple5/v4/66/fd/dd/66fddd70-f848-4fc5-43ee-4d52197ccab8/pr_source.png',
    link: 'https://itunes.apple.com/us/app/beetroot/id1016159001?ls=1&mt=8',
    author: 'Alex Duckmanton',
  },
  {
    name: 'Bionic eStore',
    icon: 'http://a5.mzstatic.com/us/r30/Purple7/v4/c1/9a/3f/c19a3f82-ecc3-d60b-f983-04acc203705f/icon175x175.jpeg',
    link: 'https://itunes.apple.com/us/app/bionic-estore/id994537615?mt=8',
    author: 'Digidemon',
  },
  {
    name: 'CANDDi',
    icon: 'http://a5.mzstatic.com/eu/r30/Purple7/v4/c4/e4/85/c4e48546-7127-a133-29f2-3e2e1aa0f9af/icon175x175.png',
    linkAppStore: 'https://itunes.apple.com/gb/app/canddi/id1018168131?mt=8',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.canddi',
    author: 'CANDDi LTD.',
  },
  {
    name: 'Company name search',
    icon: 'http://a4.mzstatic.com/us/r30/Purple69/v4/fd/47/53/fd47537c-5861-e208-d1d1-1e26b5e45a36/icon350x350.jpeg',
    link: 'https://itunes.apple.com/us/app/company-name-search/id1043824076',
    author: 'The Formations Factory Ltd',
  },
  {
    name: 'Discord',
    icon: 'http://a5.mzstatic.com/us/r30/Purple5/v4/c1/2f/4c/c12f4cba-1d9a-f6bf-2240-04085d3470ec/icon175x175.jpeg',
    link:  'https://itunes.apple.com/us/app/discord-chat-for-gamers/id985746746?mt=8',
    author: 'Hammer & Chisel',
  },
  {
    name: 'Discovery VR',
    icon: 'http://a2.mzstatic.com/us/r30/Purple6/v4/d1/d5/f4/d1d5f437-9f6b-b5aa-5fe7-47bd19f934bf/icon175x175.png',
    link:  'https://itunes.apple.com/us/app/discovery-vr/id1030815031?mt=8',
    author: 'Discovery Communications',
  },
  {
    name: 'DropBot',
    icon: 'http://a2.mzstatic.com/us/r30/Purple69/v4/fb/df/73/fbdf73e0-22d2-c936-3115-1defa195acba/icon175x175.png',
    link:  'https://itunes.apple.com/us/app/dropbot-phone-replacement/id1000855694?mt=8',
    author: 'Peach Labs',
  },
  {
    name: 'Exponent',
    icon: 'http://a4.mzstatic.com/us/r30/Purple2/v4/3a/d3/c9/3ad3c96c-5e14-f988-4bdd-0fdc95efd140/icon175x175.png',
    link:  'https://itunes.apple.com/ca/app/exponent/id982107779?mt=8',
    author: 'Exponent',
  },
  {
    name: 'F8',
    icon: 'http://is4.mzstatic.com/image/pf/us/r30/Purple5/v4/bf/d9/50/bfd9504e-a1bd-67c5-b50b-24e97016dae9/pr_source.jpg',
    link: 'https://itunes.apple.com/us/app/f8/id853467066?mt=8',
    author: 'Facebook',
  },
  {
    name: 'Facebook Groups',
    icon: 'http://is4.mzstatic.com/image/pf/us/r30/Purple69/v4/57/f8/4c/57f84c0c-793d-5f9a-95ee-c212d0369e37/mzl.ugjwfhzx.png',
    link: 'https://itunes.apple.com/us/app/facebook-groups/id931735837?mt=8',
    author: 'Facebook',
  },
  {
    name: 'Facebook Ads Manager',
    icon: 'http://is5.mzstatic.com/image/pf/us/r30/Purple5/v4/9e/16/86/9e1686ef-cc55-805a-c977-538ddb5e6832/mzl.gqbhwitj.png',
    linkAppStore: 'https://itunes.apple.com/us/app/facebook-ads-manager/id964397083?mt=8',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.facebook.adsmanager',
    author: 'Facebook',
  },
  {
    name: 'Fan of it',
    icon: 'http://a4.mzstatic.com/us/r30/Purple3/v4/c9/3f/e8/c93fe8fb-9332-e744-f04a-0f4f78e42aa8/icon350x350.png',
    link: 'https://itunes.apple.com/za/app/fan-of-it/id1017025530?mt=8',
    author: 'Fan of it (Pty) Ltd',
  },
  {
    name: 'FastPaper',
    icon: 'http://a2.mzstatic.com/us/r30/Purple5/v4/72/b4/d8/72b4d866-90d2-3aad-d1dc-0315f2d9d045/icon350x350.jpeg',
    link: 'https://itunes.apple.com/us/app/fast-paper/id1001174614',
    author: 'Liubomyr Mykhalchenko (@liubko)',
  },
  {
    name: 'Foodstand',
    icon: 'http://a3.mzstatic.com/us/r30/Purple69/v4/33/c1/3b/33c13b88-8ec2-23c1-56bb-712ad9938290/icon350x350.jpeg',
    link: 'https://www.thefoodstand.com/download',
    author: 'Foodstand, Inc.',
  },
  {
    name: 'Go Fire',
    icon: 'http://a2.mzstatic.com/us/r30/Purple5/v4/42/50/5a/42505a8d-3c7a-e49a-16e3-422315f24cf1/icon350x350.png',
    link: 'https://itunes.apple.com/us/app/gou-huo/id1001476888?ls=1&mt=8',
    author: 'beijing qingfengyun Technology Co., Ltd.',
  },
  {
    name: 'Harmonizome',
    icon: 'http://is1.mzstatic.com/image/thumb/Purple6/v4/18/a9/bc/18a9bcde-d2d9-7574-2664-e82fff7b7208/pr_source.png/350x350-75.png',
    link: 'https://itunes.apple.com/us/app/harmonizome/id1046990905?mt=8',
    author: 'Michael McDermott (@_mgmcdermott)',
  },
  {
    name: 'Hashley',
    icon: 'http://a2.mzstatic.com/us/r30/Purple4/v4/5f/19/fc/5f19fc13-e7af-cd6b-6749-cedabdaeee7d/icon350x350.png',
    link: 'https://itunes.apple.com/us/app/hashtag-by-hashley-ironic/id1022724462?mt=8',
    author: 'Elephant, LLC',
  },
  {
    name: 'Hey, Neighbor!',
    icon: 'https://raw.githubusercontent.com/scrollback/io.scrollback.neighborhoods/master/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png',
    link: 'https://play.google.com/store/apps/details?id=io.scrollback.neighborhoods',
    author: 'Scrollback',
  },
  {
    name: 'HSK Level 1 Chinese Flashcards',
    icon: 'http://is2.mzstatic.com/image/pf/us/r30/Purple1/v4/b2/4f/3a/b24f3ae3-2597-cc70-1040-731b425a5904/mzl.amxdcktl.jpg',
    link: 'https://itunes.apple.com/us/app/hsk-level-1-chinese-flashcards/id936639994',
    author: 'HS Schaaf',
  },
  {
    name: 'Kakapo',
    icon: 'http://a2.mzstatic.com/eu/r30/Purple3/v4/12/ab/2a/12ab2a01-3a3c-9482-b8df-ab38ad281165/icon175x175.png',
    linkAppStore: 'https://itunes.apple.com/gb/app/kakapo/id1046673139?ls=1&mt=8',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.kakaponative',
    author: 'Daniel Levitt',
  },
  {
    name: 'Leanpub',
    icon: 'http://a2.mzstatic.com/us/r30/Purple6/v4/9f/4a/6f/9f4a6f8c-8951-ed89-4083-74ace23df9ef/icon350x350.jpeg',
    link: 'https://itunes.apple.com/us/app/leanpub/id913517110?ls=1&mt=8',
    author: 'Leanpub',
  },
  {
    name: 'LoadDocs',
    icon: 'http://a2.mzstatic.com/us/r30/Purple3/v4/b5/ca/78/b5ca78ca-392d-6874-48bf-762293482d42/icon350x350.jpeg',
    link: 'https://itunes.apple.com/us/app/loaddocs/id1041596066',
    author: 'LoadDocs',
  },
  {
    name: 'Lrn',
    icon: 'http://is4.mzstatic.com/image/pf/us/r30/Purple1/v4/41/a9/e9/41a9e9b6-7801-aef7-2400-2eca14923321/mzl.adyswxad.png',
    link: 'https://itunes.apple.com/us/app/lrn-learn-to-code-at-your/id1019622677',
    author: 'Lrn Labs, Inc',
  },
  {
    name: 'Lumpen Radio',
    icon: 'http://is5.mzstatic.com/image/pf/us/r30/Purple1/v4/46/43/00/464300b1-fae3-9640-d4a2-0eb050ea3ff2/mzl.xjjawige.png',
    link: 'https://itunes.apple.com/us/app/lumpen-radio/id1002193127?mt=8',
    author: 'Joshua Habdas',
  },
  {
    name: 'Makerist Mediathek',
    icon: 'http://a5.mzstatic.com/eu/r30/Purple3/v4/fa/5f/4c/fa5f4ce8-5aaa-5a4b-ddcc-a0c6f681d08a/icon175x175.png',
    link: 'https://itunes.apple.com/de/app/makerist-mediathek/id1019504544',
    author: 'Railslove',
  },
  {
    name: 'MaxReward - Android',
    icon: 'https://lh3.googleusercontent.com/yynCUCdEnyW6T96xCto8KzWQr4Yeiy0M6c2p8auYMIyFgAZVBsjf4JCEX7QkPijhBg=w175-rw',
    link: 'https://play.google.com/store/apps/details?id=com.bitstrek.maxreward&hl=en',
    author: 'Neil Ma',
  },
  {
    name: 'MaxReward - iOS',
    icon: 'https://lh3.googleusercontent.com/yynCUCdEnyW6T96xCto8KzWQr4Yeiy0M6c2p8auYMIyFgAZVBsjf4JCEX7QkPijhBg=w175-rw',
    link: 'https://itunes.apple.com/us/app/maxreward/id1050479192?ls=1&mt=8',
    author: 'Neil Ma',
  },
  {
    name: 'MinTrain',
    icon: 'http://is5.mzstatic.com/image/pf/us/r30/Purple5/v4/51/51/68/51516875-1323-3100-31a8-cd1853d9a2c0/mzl.gozwmstp.png',
    link: 'https://itunes.apple.com/us/app/mintrain/id1015739031?mt=8',
    author: 'Peter Cottle',
  },
  {
    name: 'Mr. Dapper',
    icon: 'http://is5.mzstatic.com/image/pf/us/r30/Purple4/v4/e8/3f/7c/e83f7cb3-2602-f8e8-de9a-ce0a775a4a14/mzl.hmdjhfai.png',
    link: 'https://itunes.apple.com/us/app/mr.-dapper-men-fashion-app/id989735184?ls=1&mt=8',
    author: 'wei ping woon',
  },
  {
    name: 'Myntra',
    icon: 'http://a5.mzstatic.com/us/r30/Purple6/v4/9c/78/df/9c78dfa6-0061-1af2-5026-3e1d5a073c94/icon350x350.png',
    link: 'https://itunes.apple.com/in/app/myntra-fashion-shopping-app/id907394059',
    author: 'Myntra Designs',
  },
  {
    name: 'Nalathe Kerala',
    icon: 'https://lh3.googleusercontent.com/5N0WYat5WuFbhi5yR2ccdbqmiZ0wbTtKRG9GhT3YK7Z-qRvmykZyAgk0HNElOxD2JOPr=w300-rw',
    link: 'https://play.google.com/store/apps/details?id=com.rhyble.nalathekerala',
    author: 'Rhyble',
  },
  {
    name: 'Ncredible',
    icon: 'http://a3.mzstatic.com/us/r30/Purple2/v4/a9/00/74/a9007400-7ccf-df10-553b-3b6cb67f3f5f/icon350x350.png',
    link: 'https://itunes.apple.com/ca/app/ncredible/id1019662810?mt=8',
    author: 'NBC News Digital, LLC',
  },
  {
    name: 'Noodler',
    icon: 'http://a5.mzstatic.com/us/r30/Purple6/v4/d9/9a/69/d99a6919-7f11-35ad-76ea-f1741643d875/icon175x175.png',
    link: 'https://itunes.apple.com/us/app/noodler-noodle-soup-oracle/id1013183002?mt=8',
    author: 'Michele Humes & Joshua Sierles',
  },
  {
    name: 'Night Light',
    icon: 'http://is3.mzstatic.com/image/pf/us/r30/Purple7/v4/5f/50/5f/5f505fe5-0a30-6bbf-6ed9-81ef09351aba/mzl.lkeqxyeo.png',
    link: 'https://itunes.apple.com/gb/app/night-light-feeding-light/id1016843582?mt=8',
    author: 'Tian Yuan',
  },
  {
    name: 'Okanagan News',
    icon: 'http://a5.mzstatic.com/us/r30/Purple69/v4/aa/93/17/aa93171e-d0ed-7e07-54a1-be27490e210c/icon175x175.jpeg',
    link: 'https://itunes.apple.com/us/app/okanagan-news-reader-for-viewing/id1049147148?mt=8',
    author: 'Levi Cabral',
  },
  {
    name: 'Posyt - Tinder for ideas',
    icon: 'http://a3.mzstatic.com/us/r30/Purple6/v4/a5/b3/86/a5b38618-a5e9-6089-7425-7fa51ecd5d30/icon175x175.jpeg',
    link: 'https://itunes.apple.com/us/app/posyt-anonymously-meet-right/id1037842845?mt=8',
    author: 'Posyt.com',
  },
  {
    name: 'Raindrop.io',
    icon: 'http://a5.mzstatic.com/us/r30/Purple3/v4/f0/a4/57/f0a4574e-4a59-033f-05ff-5c421f0a0b00/icon175x175.png',
    link: 'https://itunes.apple.com/us/app/raindrop.io-keep-your-favorites/id1021913807',
    author: 'Mussabekov Rustem',
  },
  {
    name: 'ReactTo36',
    icon: 'http://is2.mzstatic.com/image/pf/us/r30/Purple5/v4/e3/c8/79/e3c87934-70c6-4974-f20d-4adcfc68d71d/mzl.wevtbbkq.png',
    link: 'https://itunes.apple.com/us/app/reactto36/id989009293?mt=8',
    author: 'Jonathan Solichin',
  },
  {
    name: 'RenovationFind',
    icon: 'http://a2.mzstatic.com/us/r30/Purple3/v4/4f/89/af/4f89af72-9733-2f59-6876-161983a0ee82/icon175x175.png',
    link: 'https://itunes.apple.com/ca/app/renovationfind/id1040331641?mt=8',
    author: 'Christopher Lord'
  },
  {
    name: 'RepairShopr',
    icon: 'http://a3.mzstatic.com/us/r30/Purple69/v4/fa/96/ee/fa96ee57-c5f0-0c6f-1a34-64c9d3266b86/icon175x175.jpeg',
    link: 'https://itunes.apple.com/us/app/repairshopr-payments-lite/id1023262888?mt=8',
    author: 'Jed Tiotuico',
  },
  {
    name: 'RN Playground',
    icon: 'http://is5.mzstatic.com/image/pf/us/r30/Purple1/v4/20/ec/8e/20ec8eb8-9e12-6686-cd16-7ac9e3ef1d52/mzl.ngvuoybx.png',
    linkAppStore: 'https://itunes.apple.com/us/app/react-native-playground/id1002032944?mt=8',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=org.rnplay.playground',
    author: 'Joshua Sierles',
  },
  {
    name: 'Rota Employer - Hire On Demand',
    link: 'https://itunes.apple.com/us/app/rota-employer-hire-on-demand/id1042270305?mt=8',
    icon: 'https://avatars2.githubusercontent.com/u/15051833?v=3&s=200',
    author: 'Rota',
  },
  {
    name: 'Rota Worker - Shifts On Demand',
    icon: 'http://a5.mzstatic.com/us/r30/Purple3/v4/51/ca/49/51ca4924-61c8-be1d-ab6d-afa510b1d393/icon175x175.jpeg',
    link: 'https://itunes.apple.com/us/app/rota-worker-shifts-on-demand/id1042111289?mt=8',
    author: 'Rota',
  },
  {
    name: 'SG Toto 4d',
    icon: 'http://a4.mzstatic.com/us/r30/Purple7/v4/d2/bc/46/d2bc4696-84d6-9681-a49f-7f660d6b04a7/icon175x175.jpeg',
    link: 'https://itunes.apple.com/us/app/sg-toto-4d/id1006371481?mt=8',
    author: 'Steve Ng'
  },
  {
    name: 'Spero for Cancer',
    icon: 'https://s3-us-west-1.amazonaws.com/cancerspot/site_images/Spero1024.png',
    link: 'https://geo.itunes.apple.com/us/app/spero-for-cancer/id1033923573?mt=8',
    author: 'Spero.io',
  },
  {
    name: 'Squad',
    icon: 'http://a4.mzstatic.com/us/r30/Purple69/v4/e8/5b/3f/e85b3f52-72f3-f427-a32e-a73efe2e9682/icon175x175.jpeg',
    link: 'https://itunes.apple.com/us/app/squad-snaps-for-groups-friends/id1043626975?mt=8',
    author: 'Tackk Inc.',
  },
  {
    name: 'Start - medication manager for depression',
    icon: 'http://a1.mzstatic.com/us/r30/Purple49/v4/de/9b/6f/de9b6fe8-84ea-7a12-ba2c-0a6d6c7b10b0/icon175x175.png',
    link: 'https://itunes.apple.com/us/app/start-medication-manager-for/id1012099928?mt=8',
    author: 'Iodine Inc.',
  },
  {
    name: 'Tabtor Parent',
    icon: 'http://a1.mzstatic.com/us/r30/Purple4/v4/80/50/9d/80509d05-18f4-a0b8-0cbb-9ba927d04477/icon175x175.jpeg',
    link: 'https://itunes.apple.com/us/app/tabtor-math/id1018651199?utm_source=ParentAppLP',
    author: 'PrazAs Learning Inc.',
  },
  {
    name: 'Tong Xing Wang',
    icon: 'http://a3.mzstatic.com/us/r30/Purple1/v4/7d/52/a7/7d52a71f-9532-82a5-b92f-87076624fdb2/icon175x175.jpeg',
    link: 'https://itunes.apple.com/cn/app/tong-xing-wang/id914254459?mt=8',
    author: 'Ho Yin Tsun Eugene',
  },
  {
    name: 'Townske - Stunning City Guides Made By Locals & Traveller',
    icon: 'http://a3.mzstatic.com/us/r30/Purple69/v4/8b/42/20/8b4220af-5165-91fd-0f05-014332df73ef/icon175x175.png',
    link: 'https://itunes.apple.com/us/app/townske-stunning-city-guides/id1018136179?ls=1&mt=8',
    author: 'Townske PTY LTD',
  },
  {
    name: 'WOOP',
    icon: 'http://a4.mzstatic.com/us/r30/Purple6/v4/b0/44/f9/b044f93b-dbf3-9ae5-0f36-9b4956628cab/icon350x350.jpeg',
    link: 'https://itunes.apple.com/us/app/woop-app/id790247988?mt=8',
    author: 'Moritz Schwörer (@mosch)',
  },
  {
    name: 'WPV',
    icon: 'http://a1.mzstatic.com/us/r30/Purple3/v4/f1/ae/51/f1ae516b-d8e9-1b6d-acfe-755623a88327/icon350x350.png',
    link: 'https://itunes.apple.com/us/app/wpv/id725222647?mt=8',
    author: 'Yamill Vallecillo (@yamill3)',
  },
  {
    name: 'Yoloci',
    icon: 'http://a5.mzstatic.com/eu/r30/Purple7/v4/fa/e5/26/fae52635-b97c-bd53-2ade-89e2a4326745/icon175x175.jpeg',
    link: 'https://itunes.apple.com/de/app/yoloci/id991323225?mt=8',
    author: 'Yonduva GmbH (@PhilippKrone)',
  },
  {
    name: 'youmeyou',
    icon: 'http://is1.mzstatic.com/image/pf/us/r30/Purple7/v4/7c/42/30/7c423042-8945-7733-8af3-1523468706a8/mzl.qlecxphf.png',
    link: 'https://itunes.apple.com/us/app/youmeyou/id949540333?mt=8',
    author: 'youmeyou, LLC',
  },
  {
    name: 'Ziliun',
    icon: 'https://lh3.googleusercontent.com/c6ot13BVlU-xONcQi-llFmKXZCLRGbfrCv1RnctWtOELtPYMc0A52srXAfkU897QIg=w300',
    link: 'https://play.google.com/store/apps/details?id=com.ziliunapp',
    author: 'Sonny Lazuardi',
  },
  {
    name: 'YazBoz',
    icon: 'http://a4.mzstatic.com/us/r30/Purple6/v4/80/4f/43/804f431d-2828-05aa-2593-99cfb0475351/icon175x175.png',
    link: 'https://itunes.apple.com/us/app/yazboz-batak-esli-batak-okey/id1048620855?ls=1&mt=8',
    author: 'Melih Mucuk',
  },
];

var showcase = React.createClass({
  renderLinks: function(app) {
    return (
      <p><a href={app.linkAppStore} target="blank">iOS</a> - <a href={app.linkPlayStore} target="blank">Android</a></p>
    );
  },
  render: function() {
    return (
      <Site section="showcase" title="Showcase">
        <section className="content wrap documentationContent nosidebar">
          <div className="inner-content showcaseHeader">
            <h1>Apps using React Native</h1>
            <div className="subHeader"></div>
            <p>
              Here is a list of apps using <strong>React Native</strong>. Submit a pull request on <a href="https://github.com/facebook/react-native">GitHub</a> to list your app.
            </p>
          </div>
          {
            apps.map((app, i) => {
              var inner = (
                <div>
                  <img src={app.icon} alt={app.name} />
                  <h3>{app.name}</h3>
                  {app.linkAppStore && app.linkPlayStore ? this.renderLinks(app) : null}
                  <p>By {app.author}</p>
                </div>
              );
              if (app.linkAppStore && app.linkPlayStore) {
                return (<div className="showcase" key={i}>{inner}</div>);
              }
              return (<a href={app.link} className="showcase" key={i} target="blank">{inner}</a>);
            })
          }
        </section>
      </Site>
    );
  }
});

module.exports = showcase;
