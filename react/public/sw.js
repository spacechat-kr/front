if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let c={};const r=e=>i(e,s),d={module:{uri:s},exports:c,require:r};a[s]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(o(...e),c)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ZomlFbP-FrK6gYP9V0TCz/_buildManifest.js",revision:"dba7ea4b209f66b1f856572920adc5d4"},{url:"/_next/static/ZomlFbP-FrK6gYP9V0TCz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/24-fa8d756cf9ed30a3.js",revision:"fa8d756cf9ed30a3"},{url:"/_next/static/chunks/29107295-fbcfe2172188e46f.js",revision:"fbcfe2172188e46f"},{url:"/_next/static/chunks/382-562c23ebc7abcb47.js",revision:"562c23ebc7abcb47"},{url:"/_next/static/chunks/477-0e5702b61565da41.js",revision:"0e5702b61565da41"},{url:"/_next/static/chunks/7d0bf13e-334592b00088b6c1.js",revision:"334592b00088b6c1"},{url:"/_next/static/chunks/872-bd2e38f503ffc30f.js",revision:"bd2e38f503ffc30f"},{url:"/_next/static/chunks/954-2c5c85d70992452f.js",revision:"2c5c85d70992452f"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-e4de5d1a4535be6d.js",revision:"e4de5d1a4535be6d"},{url:"/_next/static/chunks/pages/_app-a11dd13e9b1ceac0.js",revision:"a11dd13e9b1ceac0"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/chat/%5Bid%5D-22acd92a1477de9c.js",revision:"22acd92a1477de9c"},{url:"/_next/static/chunks/pages/index-31c1324fe3acfca8.js",revision:"31c1324fe3acfca8"},{url:"/_next/static/chunks/pages/list/chat-d8424b3d068250c7.js",revision:"d8424b3d068250c7"},{url:"/_next/static/chunks/pages/option-432307c28dd91b4b.js",revision:"432307c28dd91b4b"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-42cdea76c8170223.js",revision:"42cdea76c8170223"},{url:"/_next/static/css/03259de4d07eef53.css",revision:"03259de4d07eef53"},{url:"/_next/static/media/AppleSDGothicNeoB.a4d113d9.woff2",revision:"a4d113d9"},{url:"/_next/static/media/AppleSDGothicNeoEB.871e45b4.woff2",revision:"871e45b4"},{url:"/_next/static/media/AppleSDGothicNeoH.72d113d7.woff2",revision:"72d113d7"},{url:"/_next/static/media/AppleSDGothicNeoL.1656eac0.woff2",revision:"1656eac0"},{url:"/_next/static/media/AppleSDGothicNeoM.855acbde.woff2",revision:"855acbde"},{url:"/_next/static/media/AppleSDGothicNeoR.79c30b67.woff2",revision:"79c30b67"},{url:"/_next/static/media/AppleSDGothicNeoSB.819ad80f.woff2",revision:"819ad80f"},{url:"/_next/static/media/AppleSDGothicNeoT.6a26aa1f.woff2",revision:"6a26aa1f"},{url:"/_next/static/media/AppleSDGothicNeoUL.50446d4a.woff2",revision:"50446d4a"},{url:"/favicon/android/android-launchericon-144-144.png",revision:"a287ac127bc7b776daeaf4ac546ea61d"},{url:"/favicon/android/android-launchericon-192-192.png",revision:"655e15b3aad694e71c5252be063fb122"},{url:"/favicon/android/android-launchericon-48-48.png",revision:"a14872e0f1f51716c1a4a1e0a19aaf41"},{url:"/favicon/android/android-launchericon-512-512.png",revision:"539bacd38c908e11b8621703b32f440f"},{url:"/favicon/android/android-launchericon-72-72.png",revision:"41549241484035e26ebc617de0ffd40e"},{url:"/favicon/android/android-launchericon-96-96.png",revision:"f167eec4f4978f3bd4d413d05b567adf"},{url:"/favicon/icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"/favicon/ios/100.png",revision:"cecda5239b43f09a1d3f6cd3515f14ef"},{url:"/favicon/ios/1024.png",revision:"d321f56b7da9f53e5ebeb33a9a1578ec"},{url:"/favicon/ios/114.png",revision:"eb8912b0b9f307c511bae434ff094670"},{url:"/favicon/ios/120.png",revision:"da1f3a2b808ac20f680d1c2acda7f2ba"},{url:"/favicon/ios/128.png",revision:"7c71e6a98bee1bcef7ff5fd0a15786b7"},{url:"/favicon/ios/144.png",revision:"a287ac127bc7b776daeaf4ac546ea61d"},{url:"/favicon/ios/152.png",revision:"1aad8e6680235e11ef5ffb76e6243805"},{url:"/favicon/ios/16.png",revision:"6dc85f8e7cdb476410c4919388f255d1"},{url:"/favicon/ios/167.png",revision:"286c0a429be8421b9b3dd3987897dd90"},{url:"/favicon/ios/180.png",revision:"bf1c35cba16f6c22e180345fb1224c20"},{url:"/favicon/ios/192.png",revision:"655e15b3aad694e71c5252be063fb122"},{url:"/favicon/ios/20.png",revision:"93084af5ff04aa2e7693b4821b9b291a"},{url:"/favicon/ios/256.png",revision:"866a545def70fa81a5f74a2e75881d44"},{url:"/favicon/ios/29.png",revision:"f2d6bb61d87b312bc44ca678b76b960e"},{url:"/favicon/ios/32.png",revision:"25f216da80bfb3ef150df4a8ab312eaf"},{url:"/favicon/ios/40.png",revision:"1eb235be0a01fb0c2772dab127569ead"},{url:"/favicon/ios/50.png",revision:"c91d4548d72a76b80a70cbca39e5f350"},{url:"/favicon/ios/512.png",revision:"539bacd38c908e11b8621703b32f440f"},{url:"/favicon/ios/57.png",revision:"a6cb555b1ebb35b23a862c1ac5bb027d"},{url:"/favicon/ios/58.png",revision:"6f73f2995ea36df9dfc540e2ae4e5da1"},{url:"/favicon/ios/60.png",revision:"48bdc0ccc333a702fd9435b05ddd54e6"},{url:"/favicon/ios/64.png",revision:"6147a85754fba8a192c0c701b257224f"},{url:"/favicon/ios/72.png",revision:"41549241484035e26ebc617de0ffd40e"},{url:"/favicon/ios/76.png",revision:"ea9e4ee22c5c53c3ceb237f6c4283a5c"},{url:"/favicon/ios/80.png",revision:"e959a3f686f306bb2815248da9ddd282"},{url:"/favicon/ios/87.png",revision:"f35e1b8666a11ba0c8147fbc5689214d"},{url:"/favicon/windows11/LargeTile.scale-100.png",revision:"82e94908855cc6b782ecfdd6fbbc0f09"},{url:"/favicon/windows11/LargeTile.scale-125.png",revision:"06fa92e92d67df9a46e6fefa4f478806"},{url:"/favicon/windows11/LargeTile.scale-150.png",revision:"47299d4687474b58704e6fc3e1686c76"},{url:"/favicon/windows11/LargeTile.scale-200.png",revision:"d4da55dd5e2bf18e71323f7964e6710d"},{url:"/favicon/windows11/LargeTile.scale-400.png",revision:"3b4a28b0ed1ab8f356185d3c3c9e5e8a"},{url:"/favicon/windows11/SmallTile.scale-100.png",revision:"a1bf231d589faebd5920be4819b5410c"},{url:"/favicon/windows11/SmallTile.scale-125.png",revision:"a516df9ee5f5d6ce766e1318e2c87520"},{url:"/favicon/windows11/SmallTile.scale-150.png",revision:"9726d697e78a7cbaf12fbb65e05109ad"},{url:"/favicon/windows11/SmallTile.scale-200.png",revision:"cd61e68c1777fe944443c6438b85a972"},{url:"/favicon/windows11/SmallTile.scale-400.png",revision:"8007fc4179d56ef926845ac5f776a0da"},{url:"/favicon/windows11/SplashScreen.scale-100.png",revision:"4b1497c133bd2bd1be7a3d0015f301a2"},{url:"/favicon/windows11/SplashScreen.scale-125.png",revision:"21624a1bca7684c4d1a7db6e22ed0fa5"},{url:"/favicon/windows11/SplashScreen.scale-150.png",revision:"d89a7c900531a89592024f17c4f28da7"},{url:"/favicon/windows11/SplashScreen.scale-200.png",revision:"aa914aa2e38c849ab4d86200922c25d7"},{url:"/favicon/windows11/SplashScreen.scale-400.png",revision:"a816e59eae4534239031f3a722cce96e"},{url:"/favicon/windows11/Square150x150Logo.scale-100.png",revision:"3cc44a3be65cae65f7f46374c8cbc0ad"},{url:"/favicon/windows11/Square150x150Logo.scale-125.png",revision:"0010fe5efab9f07bc19d086ffa168d01"},{url:"/favicon/windows11/Square150x150Logo.scale-150.png",revision:"22cdbe03c17ac410928f02719563442a"},{url:"/favicon/windows11/Square150x150Logo.scale-200.png",revision:"aae9a54c5c70c86931f5f06f217bb3e1"},{url:"/favicon/windows11/Square150x150Logo.scale-400.png",revision:"db67e7e1495e1801d1192336c0715880"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"a99235d4b9800ac1c26b676fe1c4fd20"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"cb53ae528e2aac090f25a0587e790b9e"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"cba923b22363f712cd15d3abe3662633"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"e3bae80a4ba1a9e856886ed640ebd331"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"a49e2f8b20a008f68ad06a76580f10c6"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"4c14c4a2a94e4e7cc1e75af27410cf2c"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"6a82d56df03c1b45c85cacd5aac681b7"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"e1fdb7472cba18ef23bae62d669f921c"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"1ec9b7bc793095cfa697dba2dad3cedb"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"dc482a5ded4cf7642ea10006beb7b3b9"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"cd8d68aca1e7d0ed281ac251a504fa28"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"79d1e2060ebb4fbef7061485f976b15f"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"7046e63340ffeccfba5a31b2a000e6ea"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"5f3a8bd3ed2f6bb84d4510c486826bcd"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"81f7ce138bc5e35770727f770bbfd8d1"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"a99235d4b9800ac1c26b676fe1c4fd20"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"cb53ae528e2aac090f25a0587e790b9e"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"cba923b22363f712cd15d3abe3662633"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"e3bae80a4ba1a9e856886ed640ebd331"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"a49e2f8b20a008f68ad06a76580f10c6"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"4c14c4a2a94e4e7cc1e75af27410cf2c"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"6a82d56df03c1b45c85cacd5aac681b7"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"e1fdb7472cba18ef23bae62d669f921c"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"1ec9b7bc793095cfa697dba2dad3cedb"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"dc482a5ded4cf7642ea10006beb7b3b9"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"cd8d68aca1e7d0ed281ac251a504fa28"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"79d1e2060ebb4fbef7061485f976b15f"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"7046e63340ffeccfba5a31b2a000e6ea"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"5f3a8bd3ed2f6bb84d4510c486826bcd"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"81f7ce138bc5e35770727f770bbfd8d1"},{url:"/favicon/windows11/Square44x44Logo.scale-100.png",revision:"1ec9b7bc793095cfa697dba2dad3cedb"},{url:"/favicon/windows11/Square44x44Logo.scale-125.png",revision:"fef017f4aa5c83ac14c4c07afd95f392"},{url:"/favicon/windows11/Square44x44Logo.scale-150.png",revision:"626864a1f0596972c0d02de66add811f"},{url:"/favicon/windows11/Square44x44Logo.scale-200.png",revision:"a38c854c7a5653a3c23ada64d781abde"},{url:"/favicon/windows11/Square44x44Logo.scale-400.png",revision:"026263d570456f8bcb304f596316e71d"},{url:"/favicon/windows11/Square44x44Logo.targetsize-16.png",revision:"a99235d4b9800ac1c26b676fe1c4fd20"},{url:"/favicon/windows11/Square44x44Logo.targetsize-20.png",revision:"cb53ae528e2aac090f25a0587e790b9e"},{url:"/favicon/windows11/Square44x44Logo.targetsize-24.png",revision:"cba923b22363f712cd15d3abe3662633"},{url:"/favicon/windows11/Square44x44Logo.targetsize-256.png",revision:"e3bae80a4ba1a9e856886ed640ebd331"},{url:"/favicon/windows11/Square44x44Logo.targetsize-30.png",revision:"a49e2f8b20a008f68ad06a76580f10c6"},{url:"/favicon/windows11/Square44x44Logo.targetsize-32.png",revision:"4c14c4a2a94e4e7cc1e75af27410cf2c"},{url:"/favicon/windows11/Square44x44Logo.targetsize-36.png",revision:"6a82d56df03c1b45c85cacd5aac681b7"},{url:"/favicon/windows11/Square44x44Logo.targetsize-40.png",revision:"e1fdb7472cba18ef23bae62d669f921c"},{url:"/favicon/windows11/Square44x44Logo.targetsize-44.png",revision:"1ec9b7bc793095cfa697dba2dad3cedb"},{url:"/favicon/windows11/Square44x44Logo.targetsize-48.png",revision:"dc482a5ded4cf7642ea10006beb7b3b9"},{url:"/favicon/windows11/Square44x44Logo.targetsize-60.png",revision:"cd8d68aca1e7d0ed281ac251a504fa28"},{url:"/favicon/windows11/Square44x44Logo.targetsize-64.png",revision:"79d1e2060ebb4fbef7061485f976b15f"},{url:"/favicon/windows11/Square44x44Logo.targetsize-72.png",revision:"7046e63340ffeccfba5a31b2a000e6ea"},{url:"/favicon/windows11/Square44x44Logo.targetsize-80.png",revision:"5f3a8bd3ed2f6bb84d4510c486826bcd"},{url:"/favicon/windows11/Square44x44Logo.targetsize-96.png",revision:"81f7ce138bc5e35770727f770bbfd8d1"},{url:"/favicon/windows11/StoreLogo.scale-100.png",revision:"c91d4548d72a76b80a70cbca39e5f350"},{url:"/favicon/windows11/StoreLogo.scale-125.png",revision:"d55f560885f2942718e9cbf9336929d6"},{url:"/favicon/windows11/StoreLogo.scale-150.png",revision:"e1130e7773eec91c1b5ce88f37960153"},{url:"/favicon/windows11/StoreLogo.scale-200.png",revision:"cecda5239b43f09a1d3f6cd3515f14ef"},{url:"/favicon/windows11/StoreLogo.scale-400.png",revision:"ad837451895322f626a4acb81ab91726"},{url:"/favicon/windows11/Wide310x150Logo.scale-100.png",revision:"b03d7e39a9a0bfdbaa9c1ac57d1b3f22"},{url:"/favicon/windows11/Wide310x150Logo.scale-125.png",revision:"fa25b79a2ccfc291bb81b0be71d47871"},{url:"/favicon/windows11/Wide310x150Logo.scale-150.png",revision:"907f7312d934c20446c4d9c43d1a7a4c"},{url:"/favicon/windows11/Wide310x150Logo.scale-200.png",revision:"4b1497c133bd2bd1be7a3d0015f301a2"},{url:"/favicon/windows11/Wide310x150Logo.scale-400.png",revision:"aa914aa2e38c849ab4d86200922c25d7"},{url:"/icons/chatCamera.svg",revision:"b197666ee73d472ddd9e1512f9fbc6ae"},{url:"/icons/chatGallery.svg",revision:"b4636b13bc7eb55009e9f5ee2078856e"},{url:"/icons/chatMoon.svg",revision:"fefe103769cd6250b27f61184bb35b0a"},{url:"/icons/chatVideo.svg",revision:"d1a90f9eb29b6b09f3241f40541e6d41"},{url:"/icons/dragable.png",revision:"1ef69da043bbe72655000c0a4f2ff92e"},{url:"/icons/homeDown.svg",revision:"d3c87a8724d81276f984d5113680e621"},{url:"/icons/homeLogo.svg",revision:"8a1e1e15a9f15467f3445f4fe86ae9ed"},{url:"/icons/letter.png",revision:"6b1c06362c5f6b69af3f972d59d181e4"},{url:"/icons/map/blueSvg.svg",revision:"83007dd85e4ab9c98e9e70defcc0c06f"},{url:"/icons/map/lv1.svg",revision:"d22f2e09ba7488a1f894b9c1ed139a5b"},{url:"/icons/map/lv1_transparent.svg",revision:"d1522647d99f25888038d83870361908"},{url:"/icons/map/lv2.svg",revision:"4a066e54ddad3917d1277df2b4270e2e"},{url:"/icons/map/lv2_transparent.svg",revision:"558a60631c36c042919e9b3790b586d7"},{url:"/icons/map/lv3.svg",revision:"ab423ed68f8af79df53b605fda790252"},{url:"/icons/map/lv3_transparent.svg",revision:"1325d42c173493c024e7549fc1b3263c"},{url:"/icons/map/lv4.svg",revision:"2d5843bb04db3579c8f11b288fabc567"},{url:"/icons/map/lv4_transparent.svg",revision:"dd0fcba1a9c0d66e1f79e2ade9a698ac"},{url:"/icons/map/myLetter.svg",revision:"6b29ea52a86b99611799f4743a0e8b10"},{url:"/icons/map/warning_3km.svg",revision:"816ac3c0bf1ea0c74ed0d1f5afbd57db"},{url:"/icons/mapWrite.png",revision:"bdf939088693c89b2cc92fc73a46415c"},{url:"/icons/mapWrite4x.png",revision:"91b7c3723c5b1d231046ab7b865b45d9"},{url:"/icons/modalAlert.svg",revision:"3570f925c94c192c7d62dfccca448f30"},{url:"/icons/modalCreate.png",revision:"0d5979ad0a1d86118d19e1709a8d4639"},{url:"/icons/modalMail.svg",revision:"d9e15304b8bcdb974b90b407b7d82a89"},{url:"/icons/option/changeNickname.svg",revision:"bb686dc48eb2ce8e2f37d3fda24d20dc"},{url:"/icons/option/downChatList.svg",revision:"aa4643a7d2a91faee9635b184a8bf454"},{url:"/icons/option/expertChat.svg",revision:"7fc6d1d6066883fd0c0a77b9e7bd81f3"},{url:"/icons/option/importChat.svg",revision:"d81b587cd0761198869c07adffa1b332"},{url:"/icons/send.svg",revision:"c32cfc2317c7183cc5cf0fa47c6d3d76"},{url:"/images/header_background.svg",revision:"600dce79cd4d22d61eb4b36929ae1310"},{url:"/images/readme.txt",revision:"bdb885606f3e3efe6055adb7deadcfa6"},{url:"/images/splash_screens/10.2__iPad_landscape.png",revision:"58aeb796a3024bea49320744c223ab27"},{url:"/images/splash_screens/10.2__iPad_portrait.png",revision:"86a99a9ca647bd54a13cf03c28da8528"},{url:"/images/splash_screens/10.5__iPad_Air_landscape.png",revision:"4aed35853f8c8616f006440454d7ff27"},{url:"/images/splash_screens/10.5__iPad_Air_portrait.png",revision:"c4b4d073a656b4fc3a3bd70d2b5ef73d"},{url:"/images/splash_screens/10.9__iPad_Air_landscape.png",revision:"b49f82d93f26aabdc09af13f82967bd4"},{url:"/images/splash_screens/10.9__iPad_Air_portrait.png",revision:"df77a921d8f40ddee9ff5539c81ebcba"},{url:"/images/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"cb4c5dbe1c1566fa6124f6b51a686186"},{url:"/images/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"9b4e1d5e8f11606a538b2b3f62f7f4e7"},{url:"/images/splash_screens/12.9__iPad_Pro_landscape.png",revision:"3c8d63abd5c01c311a3b75770e9a6fa5"},{url:"/images/splash_screens/12.9__iPad_Pro_portrait.png",revision:"cfb2571bc3cc36ed545ec874f05cf0f3"},{url:"/images/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"9322e6dd27aea1b68357f29b02ccaad4"},{url:"/images/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"d9b8b712d9b5cb6513539ac40bec67d1"},{url:"/images/splash_screens/8.3__iPad_Mini_landscape.png",revision:"20b07f770da10495b7f04be572a0d63f"},{url:"/images/splash_screens/8.3__iPad_Mini_portrait.png",revision:"8e0165d083cc46bdea8f35787302322b"},{url:"/images/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"9565f356420c0dd28cba303386eb5fd9"},{url:"/images/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"9f3be3554d0edd1cc2f7f7b0d8ea6567"},{url:"/images/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"2cb462d1114cb26357ab4b832643b240"},{url:"/images/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"383f3721618f39239f3691e6f8b0f01b"},{url:"/images/splash_screens/iPhone_11__iPhone_XR_landscape.png",revision:"4a95187bec4bb53079e24267173bd185"},{url:"/images/splash_screens/iPhone_11__iPhone_XR_portrait.png",revision:"0f813f55d624c83611320d9e76aba470"},{url:"/images/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"6c02ade6c13e8adac021e3fa32b19e45"},{url:"/images/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"4db807e3dd1dc49518cb460cc16f33fe"},{url:"/images/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"7427b68d9c9897fa206d616963feab0b"},{url:"/images/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"1acbfcfd8f070463cedaff0f1b1782b0"},{url:"/images/splash_screens/iPhone_14_Pro_Max_landscape.png",revision:"3fe47a2d21a072bf4fa3610c5be36cf2"},{url:"/images/splash_screens/iPhone_14_Pro_Max_portrait.png",revision:"f43724ec03dd81eb8762fe8383d41f46"},{url:"/images/splash_screens/iPhone_14_Pro_landscape.png",revision:"65c7e8034e4fd212e0f304104d1dba86"},{url:"/images/splash_screens/iPhone_14_Pro_portrait.png",revision:"4c081039afa22d0530207f296f0c4d84"},{url:"/images/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"32019b61d8e26bf5e213d18fc109b383"},{url:"/images/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"a918db7c6b28ff3368a02f98f9236498"},{url:"/images/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"86d218f22f091353839a888ae94909c4"},{url:"/images/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"3161f18a92080fa5d4f56ef3812cb64b"},{url:"/images/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"f593fafb914a95b6c4ad5e08448c9814"},{url:"/images/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"669829ad0fa3a55fc8749bd5ac90dbce"},{url:"/images/splash_screens/icon.png",revision:"049649387f72e76486f2113e26d10231"},{url:"/manifest.json",revision:"e2f1f618b0957b4db4835c50fa2965ea"},{url:"/robots.txt",revision:"a6e015a3cb860891c734dfc5201bbbe3"},{url:"/styles/font/woff2/AppleSDGothicNeoB.woff2",revision:"96225f203a9ae8d6f89dec199ae8335a"},{url:"/styles/font/woff2/AppleSDGothicNeoEB.woff2",revision:"6e485ded0374aaccfde47e4bd043dc72"},{url:"/styles/font/woff2/AppleSDGothicNeoH.woff2",revision:"e49d25470cf0428d81a30a60b3e96cb5"},{url:"/styles/font/woff2/AppleSDGothicNeoL.woff2",revision:"c2b91892baa1ac14de36e291d63d768a"},{url:"/styles/font/woff2/AppleSDGothicNeoM.woff2",revision:"90f753cd9f2429b6189a81ce0762e45f"},{url:"/styles/font/woff2/AppleSDGothicNeoR.woff2",revision:"45bae3a85fa72215a2a2e128841443d6"},{url:"/styles/font/woff2/AppleSDGothicNeoSB.woff2",revision:"73f8793b86c87375e8eeb128b9c8a454"},{url:"/styles/font/woff2/AppleSDGothicNeoT.woff2",revision:"8c21d7c35d13b97dba52ab0b69a92a06"},{url:"/styles/font/woff2/AppleSDGothicNeoUL.woff2",revision:"f779b98a1173bc03e5ee627a1094384a"},{url:"/styles/globals.css",revision:"8e23eb5c13dcdaa3bdfbe1995e3dc511"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
