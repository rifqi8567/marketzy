'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b7269fa2508548e4032c455818f1e321",
".git/config": "1f3db54c346ddf2f86caa70affee9a32",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fe969c435f77742ace5ed211971701a4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "532082f39746efb2b0905f49b8ce336f",
".git/logs/refs/heads/main": "4837efbd217cfb8f8668bcb1023e8bd4",
".git/logs/refs/remotes/origin/main": "0a4d64f5aa1887537b7b19333e0c1ca3",
".git/objects/01/051b5bc382bcc7278be69b2ace091896d38831": "37d95292a1d49176389bbe0b7f2d8ea1",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/a21e0f47576defc5d11267eda4a9886be00245": "095894d14278e21aeca551c90b4fbbde",
".git/objects/08/4462c20cb203b75ddfc5371d8173a231d1b2c0": "b266d03dc47d12ff6356714f5520aec4",
".git/objects/0d/ef35f1612589eb6a855525ac30d17cc6ca2ee1": "dce9e78971c15350cce388f27e12ecc2",
".git/objects/0e/49dabee83bbe5d7fc58bd0ce93f52e60a7b5e5": "17ac186cb47d09ae41872593a007b3ed",
".git/objects/10/b15ef6c7341f184b011413a4a89017282590e2": "a0c4476eaa8f2b78d9158dd7971538ad",
".git/objects/26/916c1286a35b4ed4f5bfecea15dcaf822c1833": "5a229f8384dbf2d0fd306e3a954452d0",
".git/objects/2d/0d42a77d3aeb8cb32921fd14750d186a4ed88f": "87cb0a05488397b388352d93e522ac09",
".git/objects/2e/871c6079414fafc22752887f4f3687f7223f17": "6cd487cf43793b0a84f91f99af510218",
".git/objects/2f/294281e4bc9418ff212caf45244a2daa4a71a0": "fc518bcf0feb5d365a92c9eaeefe99a6",
".git/objects/31/492f535851dc17e41fc235d747552ee0b6f68a": "6e6cb04efeaca68e1a5119a2a5db21d4",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/70c5401ebe5415f6e5cd5911701a639c5b2cb2": "67670ce96a9434b13d7ff1c0c0898ff8",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/7be4a42dcd75067ad9d7385ae1972f28dad295": "fe74eafa28e4da2e1dff110e857a9e03",
".git/objects/42/7e15328580802ce4d77833eee4597d37381299": "477c91c042c12db6884358d55d0c8d81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/6c9c1ace81f9281504346a1602e3005a0dadff": "932abdeb687e1897abbc9985c97d07b4",
".git/objects/4a/84b67f6bd2dd7dd2b874747d888d47690f6b3c": "17612700987044658b708334d30bf484",
".git/objects/4d/16d939900a54a266b260ac9c86b8452a8f8f24": "2d4a3d68f951fbaa1f96d335f3e992ed",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/991622c4263791cf1feaeeeef918e50ff94eb7": "52af31ac1b5f027268639cd54bda9328",
".git/objects/54/da133b053542aa1003eabf8f615968a49a64ef": "df8568e4472744ddd6f58aa02c38cb79",
".git/objects/57/0e82bf2d4724a5a53c3f69253318eb7b72ee34": "63d6ab0a0d0bc4d8647ea4449e9797cc",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/009f3799bdea7673eef8caaa30f957c0fde69c": "b8bde3a77f8a364e65938a4ff5b3bb54",
".git/objects/5e/8b929f05d384e1d50ef1070119ac0fa2e32269": "e1cbbd93e15a6d67d1e6705beeab31c0",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/34fed73cf7047182cc05eedf284ddf921462fa": "3be28e125ea95c0da8f975377a707cd0",
".git/objects/66/e09d44f3ae901565f52eea499ebdc617d07315": "d95eb69e3baaec6b2faf18f8fc5bf7f7",
".git/objects/6a/36be0ec3523079fde8ffc049151996624b5e07": "fa429dd721831bc4adc9b20aaa8c535c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/77/5908924b526391d00f38829f5cdeabe2f21c97": "5e7dae315174b737e21cbd7cc4340617",
".git/objects/78/1bd076504b8a1f0f6577a90e2508b6a5d1318c": "aef63918a547afd8ec5fac901aa025fc",
".git/objects/7c/5d9be69b2782a88acf87de104eb8d8f805b7f8": "18d5f2d464fb88c045a9b9f7852df80e",
".git/objects/7f/85063352c0d1ca2711ebf13e16763ec292fe59": "325af1d2e5dab4aaac5b6b896259a6d3",
".git/objects/80/d3586e4a2294099e4d0cfe6e6a88662a86bd67": "85c4312362f286d612b9de4748ae4e4d",
".git/objects/80/f0b1ff1dbb31d70544e85b0c165db56ecd4ec6": "eff90ea9d3851c8f558e270d8ced9f12",
".git/objects/82/02fbc40f7cb0d61ff22ea3128653b0501315c2": "c5241e239de07ef744d7d2f6764798b5",
".git/objects/82/4076afeb3a1a571a0a80435a7d74219d49ff3e": "01248a18f2957523963fc4dfedf6f9b6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/dd60cddea564b87be7d424a84a4a7fd32054f6": "21563a7e22aa2f74f2995d053d439918",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/b9288bdc9340b011cc577b02939e3f771d3dd0": "6ea5177f53acfaae0224efbad42b7d83",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/ba63c3d13a978d7d3c3e6e787d69da203696e6": "41e34dc59c4a5af7109860d8707775df",
".git/objects/9c/9ce362dd39856f5e9ef9469bf73acf4f5b68a5": "03975b0989c54f8a3e87b28c7440b565",
".git/objects/9d/ba8ab78c48031b4f9b93676f3c1c2ac164c319": "8ff57affbe8eb9463791cc27b4a3e635",
".git/objects/9e/47ba8c8fdec52cc7f2b254871a091c6b7b9841": "d8e566c28e359b10cdf8eba4c7e6abc6",
".git/objects/a2/e6b3b888b0e5de8f4ed0b923f11b10f2085abc": "d764407104d41278ec9a18c297ba5304",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ab/37c9d430b849916d3550549898f4d268b4cd9f": "b0494a7144adb7e48a6fad11ef8983eb",
".git/objects/b0/b26b6f5508523c8dbca29728bf90699c806d7b": "e49f15560dd3f606b2be06fa460facdf",
".git/objects/b3/c15726d407cbeb5585437f2a9ad1fec4ff936a": "d6409a9db46fb24c7847361e8c83df52",
".git/objects/b5/97a7052b90d8ed88b45c7267eff58fe8006b97": "bdd2fdbca3889a3c48efe297cd4d2a6c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/c2fb2b67068d6caff710a456450c435158f8fb": "968cf45e0a8e4b897a64914ad4a64179",
".git/objects/bb/d083210d4aa6204e17b1d78bc97686dfba790a": "7af379f18ea44ff19124f1d662cf839a",
".git/objects/bf/35f5e1ce56cf0bee21d10cdfabfe9b716bddbe": "cf37e3988d20338ba2b8265d697953a3",
".git/objects/c0/41675068c4ffaedba374373acc9ae381333a56": "ce603ead0e131266b096fa4381da1412",
".git/objects/c0/8b7c86d05093d08947ebf800ef9a3a7002669e": "d3c1e7e3f44aeca93e3c45029950a3a5",
".git/objects/c2/fe7594fd226c67b79e8a317614b50bc13effd4": "9a0f121c2400d7f8e2e2888df5566211",
".git/objects/c4/048d3bef736727b251bec0d28730f8a323fa69": "cff60f6134bb6445a2a1a22106d46ccc",
".git/objects/c7/9ee4e24dab35240809b0d5270ff131f7ccbce6": "2b9d3b992737636330fa8867f57a4e81",
".git/objects/c8/e572ae238f6af9581db87cfd517eabb5509fa7": "726fefed998b68a8d200e0a9ea33ed2f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/dad6c7c643cfb5c8e886fe437523e94e200e4b": "23895edf4d3f5b5793c4c582c774b31f",
".git/objects/e0/150d72bed0acfd37cf894c7a0083d00dcb0532": "d1187fd4afcdc0bbc77497cd395ad0b3",
".git/objects/e2/8742b50316149fc8be91fd60e128b9f5f859a2": "625486d42ad1868aec9c940062f254dd",
".git/objects/e8/3231be1061f2b83d5a57da1694d7f62863cd0e": "58716c44bb0cb9c6dac4e9e20e0f6d10",
".git/objects/e9/40a4504bf32145f1813cb02c6dd2268a490a45": "1b40adb1e3928394560df262cd4d4bb5",
".git/objects/e9/4d14845b9038e15968cc988672b5e7008eb30a": "20f153826b9bde4aa34b53560f872bd2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/7560f29bc1806b36b5f03035829e05bb8c7ea7": "130acf8e2761513290208a99c8ecf934",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b0b8c09988f5a1c509ce82d88f1ea9f908a450": "450fc41c8db4fc61f545be7e5c450d0f",
".git/objects/ec/bcef676545e6732a8c3b7ec22ace3282a2234a": "5ea96fd05d993c8f6b5011afbaa834e6",
".git/objects/ed/3ade02ce54aa62954a8651b5442084d85cf327": "bb4962fd4663781645acc2cce7f9bb4d",
".git/objects/ef/09c43dc937644dbf0ce56d59ea24d67a654847": "4dc86712d1628f94ffad05f56b23d766",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/bab5ab2878c2b8d434f63f77d9b9923eaf85d8": "9b09a6a986be4ed3d6aa7912430350cb",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/ef12083b0d9ff9d6ed7c73bd5330840d1cc5ce": "9ed605d1ab3943b54bacd60d3cd3bff8",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/73b09715dad5b33925e97d01dfb9688e855c9f": "03e4c7efdcedabc2fbc10ed89b223b79",
".git/refs/heads/main": "06679beace553932ef9b0a0bf56619d1",
".git/refs/remotes/origin/main": "06679beace553932ef9b0a0bf56619d1",
"assets/AssetManifest.bin": "582e3712356edd602c6357a3e65877b3",
"assets/AssetManifest.bin.json": "45715301e96e22b564dcbb587268cfd6",
"assets/AssetManifest.json": "c0048fdff238625b303cf60620b8fd40",
"assets/assets/apple.png": "66b434c433d983c4697ae26a03b927af",
"assets/assets/baju.png": "04335fc5f1e1f9b5598b3a12c9ff930c",
"assets/assets/baju_item(1).png": "e54229ba32e34e83c6d92608f644badb",
"assets/assets/baju_item(2).png": "e776a7627387275709ed05bfd7ddafcc",
"assets/assets/baju_item(3).png": "7c328a61aafa34e7a52290f1301ec982",
"assets/assets/baju_item(4).png": "7fe7cfeba3240108587b9be7ec7c03e9",
"assets/assets/baju_item(5).png": "91e1390e8250fac220ba44dd504cc89b",
"assets/assets/cart.png": "45d71c5ac499f0dd588f828f235b42aa",
"assets/assets/celana.png": "4c0ce09e9be791681c724f8306fa0748",
"assets/assets/chat.png": "10e1fb49f7df83d6913c60e3d35e435c",
"assets/assets/circle.png": "baba9646445a4246f28cfe534c33f5a8",
"assets/assets/clothes02.png": "b6c695dd2c1269d31a52aba790774d99",
"assets/assets/default_image.png": "9b3d8ac2438a1639163da57f54a4732a",
"assets/assets/facebook.png": "e5297c7da05b96989f1913880db6be26",
"assets/assets/filter.png": "ae58420e8451339bb317552044c5aa1c",
"assets/assets/google.png": "61fae26cecaa4d85ab1589675d5922c1",
"assets/assets/ic_baju.png": "c5e066e3cc8b7d4a7ba5c4737fb290b8",
"assets/assets/ic_card.png": "630e22e00418de2187bbad634e5f1097",
"assets/assets/ic_check.png": "4461d440448599c4cbdc035938eebda6",
"assets/assets/ic_discount.png": "8e45c22378e2c0eb15a2878ddca6dd8d",
"assets/assets/ic_elec.png": "e8254278d55b55014b471eefdba0755c",
"assets/assets/ic_heart.png": "593230c4a97dd06b7fe2963a5d24b85a",
"assets/assets/ic_house.png": "98f3cb65532a49d2ddc97e40354d07d7",
"assets/assets/ic_location.png": "bed7b4513005c6884f3361ce4186076b",
"assets/assets/ic_search.png": "e0c0332770b3d424eef8099692179fa4",
"assets/assets/ic_shoes.png": "52c32814000b9d7413178a74e76a4f60",
"assets/assets/ic_trending.png": "5ab659799c296ad48fcc8a496e224fa5",
"assets/assets/ic_user.png": "c3f31513e41b25ce0bdf80f3e3716b8d",
"assets/assets/ic_user_botom.png": "8801b6a4fa4db7da2157b8053782f31c",
"assets/assets/login_logo.png": "3543339b96017ee2d3b4eac029f11f8b",
"assets/assets/logo.png": "89dc6778433a8f0ce85469a9f486c02c",
"assets/assets/material-symbols_lock.png": "93407fe33197d37303599d14e9141de6",
"assets/assets/mi_email.png": "2517495c91c84c2123df4b96753a9b20",
"assets/assets/pants01.png": "6b2eac828c28cead73f6979a8b063bc4",
"assets/assets/pants02.png": "97ccc470592cf37189c52ef16b4715b6",
"assets/assets/register_logo.png": "ab59b7da3526abb61854a01121228063",
"assets/assets/shoes01.png": "0a1a9ca0dc84531e71230ecd66c2978d",
"assets/assets/shoes02.png": "49e8ac92dc8f155a8d0d91b56cff0830",
"assets/assets/slider01.png": "86ab8141dd0fd9eeef290cda30c983db",
"assets/assets/three.png": "ca198e1092b4e3bb12312b31ba3c0e6c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "50857f0046540b4ceba984496f883f9e",
"assets/NOTICES": "8aaf5edbbad9017bf48e3ec301608020",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "76f1e233fd773ca428019cc505dd6f71",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50f12db07bd60fa871d53ea5308e1dbf",
"/": "50f12db07bd60fa871d53ea5308e1dbf",
"main.dart.js": "28fbd42d7f1492f782f9f944e9892230",
"manifest.json": "865b04388d5e5dbebf3600f8c7401610",
"version.json": "399440c9146d601ecb084e30d2bc9353"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
