if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const s=e=>a(e,o),f={module:{uri:o},exports:c,require:s};i[o]=Promise.all(n.map((e=>f[e]||s(e)))).then((e=>(r(...e),c)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Rd2XW51CA82zwYpjuL_vS/_buildManifest.js",revision:"55ca852f51017209331ce445ec63890b"},{url:"/_next/static/Rd2XW51CA82zwYpjuL_vS/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/203-131fea02fc0e7f37.js",revision:"131fea02fc0e7f37"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-e4de5d1a4535be6d.js",revision:"e4de5d1a4535be6d"},{url:"/_next/static/chunks/pages/_app-084e14e6bfc0906e.js",revision:"084e14e6bfc0906e"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/index-e141be558c2b1f8e.js",revision:"e141be558c2b1f8e"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fd1bc4a65a80e5c8.js",revision:"fd1bc4a65a80e5c8"},{url:"/_next/static/css/2531d41da3fd3520.css",revision:"2531d41da3fd3520"},{url:"/favicon/android/android-launchericon-144-144.png",revision:"a287ac127bc7b776daeaf4ac546ea61d"},{url:"/favicon/android/android-launchericon-192-192.png",revision:"655e15b3aad694e71c5252be063fb122"},{url:"/favicon/android/android-launchericon-48-48.png",revision:"a14872e0f1f51716c1a4a1e0a19aaf41"},{url:"/favicon/android/android-launchericon-512-512.png",revision:"539bacd38c908e11b8621703b32f440f"},{url:"/favicon/android/android-launchericon-72-72.png",revision:"41549241484035e26ebc617de0ffd40e"},{url:"/favicon/android/android-launchericon-96-96.png",revision:"f167eec4f4978f3bd4d413d05b567adf"},{url:"/favicon/icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"/favicon/ios/100.png",revision:"cecda5239b43f09a1d3f6cd3515f14ef"},{url:"/favicon/ios/1024.png",revision:"d321f56b7da9f53e5ebeb33a9a1578ec"},{url:"/favicon/ios/114.png",revision:"eb8912b0b9f307c511bae434ff094670"},{url:"/favicon/ios/120.png",revision:"da1f3a2b808ac20f680d1c2acda7f2ba"},{url:"/favicon/ios/128.png",revision:"7c71e6a98bee1bcef7ff5fd0a15786b7"},{url:"/favicon/ios/144.png",revision:"a287ac127bc7b776daeaf4ac546ea61d"},{url:"/favicon/ios/152.png",revision:"1aad8e6680235e11ef5ffb76e6243805"},{url:"/favicon/ios/16.png",revision:"6dc85f8e7cdb476410c4919388f255d1"},{url:"/favicon/ios/167.png",revision:"286c0a429be8421b9b3dd3987897dd90"},{url:"/favicon/ios/180.png",revision:"bf1c35cba16f6c22e180345fb1224c20"},{url:"/favicon/ios/192.png",revision:"655e15b3aad694e71c5252be063fb122"},{url:"/favicon/ios/20.png",revision:"93084af5ff04aa2e7693b4821b9b291a"},{url:"/favicon/ios/256.png",revision:"866a545def70fa81a5f74a2e75881d44"},{url:"/favicon/ios/29.png",revision:"f2d6bb61d87b312bc44ca678b76b960e"},{url:"/favicon/ios/32.png",revision:"25f216da80bfb3ef150df4a8ab312eaf"},{url:"/favicon/ios/40.png",revision:"1eb235be0a01fb0c2772dab127569ead"},{url:"/favicon/ios/50.png",revision:"c91d4548d72a76b80a70cbca39e5f350"},{url:"/favicon/ios/512.png",revision:"539bacd38c908e11b8621703b32f440f"},{url:"/favicon/ios/57.png",revision:"a6cb555b1ebb35b23a862c1ac5bb027d"},{url:"/favicon/ios/58.png",revision:"6f73f2995ea36df9dfc540e2ae4e5da1"},{url:"/favicon/ios/60.png",revision:"48bdc0ccc333a702fd9435b05ddd54e6"},{url:"/favicon/ios/64.png",revision:"6147a85754fba8a192c0c701b257224f"},{url:"/favicon/ios/72.png",revision:"41549241484035e26ebc617de0ffd40e"},{url:"/favicon/ios/76.png",revision:"ea9e4ee22c5c53c3ceb237f6c4283a5c"},{url:"/favicon/ios/80.png",revision:"e959a3f686f306bb2815248da9ddd282"},{url:"/favicon/ios/87.png",revision:"f35e1b8666a11ba0c8147fbc5689214d"},{url:"/favicon/windows11/LargeTile.scale-100.png",revision:"82e94908855cc6b782ecfdd6fbbc0f09"},{url:"/favicon/windows11/LargeTile.scale-125.png",revision:"06fa92e92d67df9a46e6fefa4f478806"},{url:"/favicon/windows11/LargeTile.scale-150.png",revision:"47299d4687474b58704e6fc3e1686c76"},{url:"/favicon/windows11/LargeTile.scale-200.png",revision:"d4da55dd5e2bf18e71323f7964e6710d"},{url:"/favicon/windows11/LargeTile.scale-400.png",revision:"3b4a28b0ed1ab8f356185d3c3c9e5e8a"},{url:"/favicon/windows11/SmallTile.scale-100.png",revision:"a1bf231d589faebd5920be4819b5410c"},{url:"/favicon/windows11/SmallTile.scale-125.png",revision:"a516df9ee5f5d6ce766e1318e2c87520"},{url:"/favicon/windows11/SmallTile.scale-150.png",revision:"9726d697e78a7cbaf12fbb65e05109ad"},{url:"/favicon/windows11/SmallTile.scale-200.png",revision:"cd61e68c1777fe944443c6438b85a972"},{url:"/favicon/windows11/SmallTile.scale-400.png",revision:"8007fc4179d56ef926845ac5f776a0da"},{url:"/favicon/windows11/SplashScreen.scale-100.png",revision:"4b1497c133bd2bd1be7a3d0015f301a2"},{url:"/favicon/windows11/SplashScreen.scale-125.png",revision:"21624a1bca7684c4d1a7db6e22ed0fa5"},{url:"/favicon/windows11/SplashScreen.scale-150.png",revision:"d89a7c900531a89592024f17c4f28da7"},{url:"/favicon/windows11/SplashScreen.scale-200.png",revision:"aa914aa2e38c849ab4d86200922c25d7"},{url:"/favicon/windows11/SplashScreen.scale-400.png",revision:"a816e59eae4534239031f3a722cce96e"},{url:"/favicon/windows11/Square150x150Logo.scale-100.png",revision:"3cc44a3be65cae65f7f46374c8cbc0ad"},{url:"/favicon/windows11/Square150x150Logo.scale-125.png",revision:"0010fe5efab9f07bc19d086ffa168d01"},{url:"/favicon/windows11/Square150x150Logo.scale-150.png",revision:"22cdbe03c17ac410928f02719563442a"},{url:"/favicon/windows11/Square150x150Logo.scale-200.png",revision:"aae9a54c5c70c86931f5f06f217bb3e1"},{url:"/favicon/windows11/Square150x150Logo.scale-400.png",revision:"db67e7e1495e1801d1192336c0715880"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"a99235d4b9800ac1c26b676fe1c4fd20"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"cb53ae528e2aac090f25a0587e790b9e"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"cba923b22363f712cd15d3abe3662633"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"e3bae80a4ba1a9e856886ed640ebd331"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"a49e2f8b20a008f68ad06a76580f10c6"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"4c14c4a2a94e4e7cc1e75af27410cf2c"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"6a82d56df03c1b45c85cacd5aac681b7"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"e1fdb7472cba18ef23bae62d669f921c"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"1ec9b7bc793095cfa697dba2dad3cedb"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"dc482a5ded4cf7642ea10006beb7b3b9"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"cd8d68aca1e7d0ed281ac251a504fa28"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"79d1e2060ebb4fbef7061485f976b15f"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"7046e63340ffeccfba5a31b2a000e6ea"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"5f3a8bd3ed2f6bb84d4510c486826bcd"},{url:"/favicon/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"81f7ce138bc5e35770727f770bbfd8d1"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"a99235d4b9800ac1c26b676fe1c4fd20"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"cb53ae528e2aac090f25a0587e790b9e"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"cba923b22363f712cd15d3abe3662633"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"e3bae80a4ba1a9e856886ed640ebd331"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"a49e2f8b20a008f68ad06a76580f10c6"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"4c14c4a2a94e4e7cc1e75af27410cf2c"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"6a82d56df03c1b45c85cacd5aac681b7"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"e1fdb7472cba18ef23bae62d669f921c"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"1ec9b7bc793095cfa697dba2dad3cedb"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"dc482a5ded4cf7642ea10006beb7b3b9"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"cd8d68aca1e7d0ed281ac251a504fa28"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"79d1e2060ebb4fbef7061485f976b15f"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"7046e63340ffeccfba5a31b2a000e6ea"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"5f3a8bd3ed2f6bb84d4510c486826bcd"},{url:"/favicon/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"81f7ce138bc5e35770727f770bbfd8d1"},{url:"/favicon/windows11/Square44x44Logo.scale-100.png",revision:"1ec9b7bc793095cfa697dba2dad3cedb"},{url:"/favicon/windows11/Square44x44Logo.scale-125.png",revision:"fef017f4aa5c83ac14c4c07afd95f392"},{url:"/favicon/windows11/Square44x44Logo.scale-150.png",revision:"626864a1f0596972c0d02de66add811f"},{url:"/favicon/windows11/Square44x44Logo.scale-200.png",revision:"a38c854c7a5653a3c23ada64d781abde"},{url:"/favicon/windows11/Square44x44Logo.scale-400.png",revision:"026263d570456f8bcb304f596316e71d"},{url:"/favicon/windows11/Square44x44Logo.targetsize-16.png",revision:"a99235d4b9800ac1c26b676fe1c4fd20"},{url:"/favicon/windows11/Square44x44Logo.targetsize-20.png",revision:"cb53ae528e2aac090f25a0587e790b9e"},{url:"/favicon/windows11/Square44x44Logo.targetsize-24.png",revision:"cba923b22363f712cd15d3abe3662633"},{url:"/favicon/windows11/Square44x44Logo.targetsize-256.png",revision:"e3bae80a4ba1a9e856886ed640ebd331"},{url:"/favicon/windows11/Square44x44Logo.targetsize-30.png",revision:"a49e2f8b20a008f68ad06a76580f10c6"},{url:"/favicon/windows11/Square44x44Logo.targetsize-32.png",revision:"4c14c4a2a94e4e7cc1e75af27410cf2c"},{url:"/favicon/windows11/Square44x44Logo.targetsize-36.png",revision:"6a82d56df03c1b45c85cacd5aac681b7"},{url:"/favicon/windows11/Square44x44Logo.targetsize-40.png",revision:"e1fdb7472cba18ef23bae62d669f921c"},{url:"/favicon/windows11/Square44x44Logo.targetsize-44.png",revision:"1ec9b7bc793095cfa697dba2dad3cedb"},{url:"/favicon/windows11/Square44x44Logo.targetsize-48.png",revision:"dc482a5ded4cf7642ea10006beb7b3b9"},{url:"/favicon/windows11/Square44x44Logo.targetsize-60.png",revision:"cd8d68aca1e7d0ed281ac251a504fa28"},{url:"/favicon/windows11/Square44x44Logo.targetsize-64.png",revision:"79d1e2060ebb4fbef7061485f976b15f"},{url:"/favicon/windows11/Square44x44Logo.targetsize-72.png",revision:"7046e63340ffeccfba5a31b2a000e6ea"},{url:"/favicon/windows11/Square44x44Logo.targetsize-80.png",revision:"5f3a8bd3ed2f6bb84d4510c486826bcd"},{url:"/favicon/windows11/Square44x44Logo.targetsize-96.png",revision:"81f7ce138bc5e35770727f770bbfd8d1"},{url:"/favicon/windows11/StoreLogo.scale-100.png",revision:"c91d4548d72a76b80a70cbca39e5f350"},{url:"/favicon/windows11/StoreLogo.scale-125.png",revision:"d55f560885f2942718e9cbf9336929d6"},{url:"/favicon/windows11/StoreLogo.scale-150.png",revision:"e1130e7773eec91c1b5ce88f37960153"},{url:"/favicon/windows11/StoreLogo.scale-200.png",revision:"cecda5239b43f09a1d3f6cd3515f14ef"},{url:"/favicon/windows11/StoreLogo.scale-400.png",revision:"ad837451895322f626a4acb81ab91726"},{url:"/favicon/windows11/Wide310x150Logo.scale-100.png",revision:"b03d7e39a9a0bfdbaa9c1ac57d1b3f22"},{url:"/favicon/windows11/Wide310x150Logo.scale-125.png",revision:"fa25b79a2ccfc291bb81b0be71d47871"},{url:"/favicon/windows11/Wide310x150Logo.scale-150.png",revision:"907f7312d934c20446c4d9c43d1a7a4c"},{url:"/favicon/windows11/Wide310x150Logo.scale-200.png",revision:"4b1497c133bd2bd1be7a3d0015f301a2"},{url:"/favicon/windows11/Wide310x150Logo.scale-400.png",revision:"aa914aa2e38c849ab4d86200922c25d7"},{url:"/font/AppleSDGothicNeoB.ttf",revision:"018066fbccbce3cc4bbba5d3ac4f1033"},{url:"/font/AppleSDGothicNeoEB.ttf",revision:"eaafc4677b0f252b3404c5268e0eb26d"},{url:"/font/AppleSDGothicNeoH.ttf",revision:"ee2dab186809a3df292bd2297739c6c3"},{url:"/font/AppleSDGothicNeoL.ttf",revision:"b07ac29c8c063198e384a69bfe91c975"},{url:"/font/AppleSDGothicNeoM.ttf",revision:"3a44ffb1539dbcfce07e73ce69ea55de"},{url:"/font/AppleSDGothicNeoR.ttf",revision:"85ba110e6b8d4c2e961f21ef648d27ea"},{url:"/font/AppleSDGothicNeoSB.ttf",revision:"8683b84b58121f0dc4070ed892d02614"},{url:"/font/AppleSDGothicNeoT.ttf",revision:"c86faaf0dfc0eecd7d3fb29a684f9706"},{url:"/font/AppleSDGothicNeoUL.ttf",revision:"fa20f8e0f9a1cce5284e24efbc1e6d14"},{url:"/icons/dragable.png",revision:"1ef69da043bbe72655000c0a4f2ff92e"},{url:"/icons/homeDown.svg",revision:"d3c87a8724d81276f984d5113680e621"},{url:"/icons/map/blueSvg.svg",revision:"83007dd85e4ab9c98e9e70defcc0c06f"},{url:"/icons/navigation/comparisonOff.svg",revision:"93604751bd498b779471e9afe5eec074"},{url:"/icons/navigation/comparisonOn.svg",revision:"7c5633f774bf75612d42eca33a34cfa4"},{url:"/icons/navigation/homeOff.svg",revision:"69b8398823d984d33a725e60940397ea"},{url:"/icons/navigation/homeOn.svg",revision:"4be0ec6782c8cc53ad9481b6f31afd0b"},{url:"/icons/navigation/mypageOff.svg",revision:"0867dcc977292b3e2f6bd1e216831121"},{url:"/icons/navigation/mypageOn.svg",revision:"26a4fbbec74d66365ce9bdec41b04936"},{url:"/icons/navigation/telescopeOff.svg",revision:"fc2bd72cb6d7d673bf169c1cbffb654d"},{url:"/icons/navigation/telescopeOn.svg",revision:"ca373677d7ab209953fc295e501c6e9e"},{url:"/images/header_background.svg",revision:"600dce79cd4d22d61eb4b36929ae1310"},{url:"/images/profile/airconditioner.png",revision:"ec435a635aaa5028b484455889ad5189"},{url:"/images/profile/airconditioner_s.png",revision:"3cff34354c42c91401a942c3dd8a4522"},{url:"/images/profile/animal.png",revision:"238095c211cc47e60f1f69efb00b90f3"},{url:"/images/profile/animal_hand.png",revision:"e8c21c7d59e8f5110066ca991879a8b8"},{url:"/images/profile/animal_hand_s.png",revision:"f53560db59f700d1c17e25f5dfb16e21"},{url:"/images/profile/animal_s.png",revision:"2afc3afc9654dab430b37cd7a25b513b"},{url:"/images/profile/bal.png",revision:"98d3740176850b3fed83e7ebc1549149"},{url:"/images/profile/bal_s.png",revision:"5e9261f7a0006a1f0bb8281692011b86"},{url:"/images/profile/bat.png",revision:"db5afba0c6f19ba150636fc61f889bdf"},{url:"/images/profile/bat_s.png",revision:"f2d5ffe5253c9d705c35f121173890ff"},{url:"/images/profile/bunny.png",revision:"d003948b3d69c0f0bbda8bb35ecaa9d7"},{url:"/images/profile/bunny_s.png",revision:"b7f3d9538298ff9ffdb07b3c8c01b08e"},{url:"/images/profile/cat.png",revision:"692471add82cf7c57b916b70b8602eed"},{url:"/images/profile/cat_s.png",revision:"de4b45158598f97e49d18890b761d909"},{url:"/images/profile/circle_bird.png",revision:"28e970d2eacb3a30a79eec717bdb7f96"},{url:"/images/profile/circle_bird10.png",revision:"1b1a435592008ba42e9fda24e806e40e"},{url:"/images/profile/circle_bird11.png",revision:"c1530205182b58f3a4799a9d38246d81"},{url:"/images/profile/circle_bird12.png",revision:"8a5017a86466afcf929ad71757a7ff76"},{url:"/images/profile/circle_bird13.png",revision:"6dad2b621d0104bc9fb378801b4640fc"},{url:"/images/profile/circle_bird14.png",revision:"de3812ef62b8b7dd2608acc3c69b7f70"},{url:"/images/profile/circle_bird15.png",revision:"3e63175930ff8044b863ffa664b5890a"},{url:"/images/profile/circle_bird16.png",revision:"af673ab294aa0462d40418a0cbc46573"},{url:"/images/profile/circle_bird17.png",revision:"68c759b2bc9b04b340008d45591a6794"},{url:"/images/profile/circle_bird18.png",revision:"9374182586facfce6c4b0cf405b4a106"},{url:"/images/profile/circle_bird2.png",revision:"a82859a55d001e8be5760247249001cb"},{url:"/images/profile/circle_bird3.png",revision:"a0c0f811b940b28f56a90bca3450ffcd"},{url:"/images/profile/circle_bird4.png",revision:"0c41ff83d29e14ac9e9f8bf6d7c36f7b"},{url:"/images/profile/circle_bird5.png",revision:"602f18822b0abdd2f5fded49ce650995"},{url:"/images/profile/circle_bird6.png",revision:"580e0fc04c13e9d7b7a832a04d3e273c"},{url:"/images/profile/circle_bird7.png",revision:"60a07619568715ba46401da70e8a7984"},{url:"/images/profile/circle_bird8.png",revision:"36b6d1d8ad2439de16cffb357c59c05e"},{url:"/images/profile/circle_bird9.png",revision:"99c42a378e85b13aac247559884291d4"},{url:"/images/profile/circle_bull.png",revision:"6f6c256917b6ab7b83667da20c9582cd"},{url:"/images/profile/circle_cat.png",revision:"7fad32f8352b81940f1deabb32f0b485"},{url:"/images/profile/circle_chicken.png",revision:"04d216d2b658ccd8b9bb8d29e07deab9"},{url:"/images/profile/circle_chicken2.png",revision:"94f2aa3225d694773d55fe72449973c6"},{url:"/images/profile/circle_chicken3.png",revision:"03d8c47f492e9f515d9abc20260bb776"},{url:"/images/profile/circle_cow.png",revision:"4d18f9d3b91efd22658f7172cfbb95b2"},{url:"/images/profile/circle_dog.png",revision:"6a599a73bcbe24b3942507c3fa4f6ca8"},{url:"/images/profile/circle_dolphin.png",revision:"a329b2609f1867aa6d6d41721e41fef6"},{url:"/images/profile/circle_dolphin2.png",revision:"3acf978a235c75d07fdf5a150ed40ce1"},{url:"/images/profile/circle_duck.png",revision:"054feec3f5fd409e641913f4cb4bde4f"},{url:"/images/profile/circle_eagle.png",revision:"8b9b9bc0866ab73107b52cb22ec02a27"},{url:"/images/profile/circle_fish.png",revision:"67940ac24c2dca31f7336793499f7e1f"},{url:"/images/profile/circle_fish10.png",revision:"eba01d9d4b810d65db642964a44e1f9c"},{url:"/images/profile/circle_fish11.png",revision:"ae384e531e40aba90c4a0d98eaced9a0"},{url:"/images/profile/circle_fish12.png",revision:"d6ccf7f2e75eca54d81859dde31129da"},{url:"/images/profile/circle_fish13.png",revision:"5145867f2d22ced0a5ed7019fb208f40"},{url:"/images/profile/circle_fish14.png",revision:"f7b87752a11094fe76d34499cdd51dc7"},{url:"/images/profile/circle_fish15.png",revision:"2074464c9a3fa7679db03de66622bab0"},{url:"/images/profile/circle_fish16.png",revision:"05010496b6460620bfbd7ae188121657"},{url:"/images/profile/circle_fish17.png",revision:"5423f6d1d69968e17b423dd266fffa9b"},{url:"/images/profile/circle_fish2.png",revision:"7684600938bf59808daa4de6457963ed"},{url:"/images/profile/circle_fish3.png",revision:"51659ca57672f76d39a873f279becaae"},{url:"/images/profile/circle_fish4.png",revision:"0ac51cb8feae3713a8df20392ad8588e"},{url:"/images/profile/circle_fish5.png",revision:"8aff5c21c261cca09a735706549a532b"},{url:"/images/profile/circle_fish6.png",revision:"6c8e8506ff31f2672b9a70cae30a52a1"},{url:"/images/profile/circle_fish7.png",revision:"39847c23e54df3e498f9486ce378f89a"},{url:"/images/profile/circle_fish8.png",revision:"16996698cb9ecbe0922e5413260da825"},{url:"/images/profile/circle_fish9.png",revision:"0751e7cc36786c085606182ac51b057b"},{url:"/images/profile/circle_goat.png",revision:"eb76bf9aa6630681f2653aba1ffef9e7"},{url:"/images/profile/circle_goat2.png",revision:"82a5a52adeb5aef53ad21f7a7261c9cf"},{url:"/images/profile/circle_horse.png",revision:"625527835337848a2c7f116ab8c3611a"},{url:"/images/profile/circle_penguin.png",revision:"ddcefe55b44e13478020de384fe8d356"},{url:"/images/profile/circle_penguin_child.png",revision:"7000ccbacd63bf4a9d9d522acb3b0e65"},{url:"/images/profile/circle_pig.png",revision:"f4bf93540a25a34559bcb02bbf904ce4"},{url:"/images/profile/circle_rabbit.png",revision:"d347ee49ea43a5fdbc1fda47c5f2a892"},{url:"/images/profile/circle_shark.png",revision:"f9ec16e054fa3463cabbc92d4fca80c8"},{url:"/images/profile/circle_sheep.png",revision:"769abf38a44041dfa187ea688a8d9de0"},{url:"/images/profile/circle_worf.png",revision:"c7feb3ed59eec4177fc377e2bbc73b8e"},{url:"/images/profile/deer.png",revision:"d9b0213b4fe103905035edd433e9f020"},{url:"/images/profile/deer_s.png",revision:"bc68303a50020a47aadc84c009013108"},{url:"/images/profile/dog.png",revision:"3e9ea6fcfae5fd62569e91a172aa7cbf"},{url:"/images/profile/dog_s.png",revision:"776ebf18a0106f3f9d7547b527abe6bf"},{url:"/images/profile/dolphin.png",revision:"0bf84284e80151587c6a56dc72a88a06"},{url:"/images/profile/dolphin_s.png",revision:"850f7bd35ecfbe8b99ef5c62cd8db03a"},{url:"/images/profile/eel.png",revision:"b4e424c3e10cb1cd8e7bc6eab8036a87"},{url:"/images/profile/eel_s.png",revision:"be1154853f5dc1193bb06d7c859e7d2f"},{url:"/images/profile/fish.png",revision:"fb860eca1a8c7fb5ab58c9385435e300"},{url:"/images/profile/fish_s.png",revision:"e782e6fbaa84fe80d996234fc11f6de2"},{url:"/images/profile/kitty.png",revision:"b1b5b3bf8c09861bd7f60d5fdccda7e7"},{url:"/images/profile/kitty_s.png",revision:"be0ee11b725af4e899bc005f420eee19"},{url:"/images/profile/lion.png",revision:"d6e2cc39e6b4063c771388ef993ec543"},{url:"/images/profile/lion_s.png",revision:"e75617e26a041f9c67e07ee9c3368d36"},{url:"/images/profile/pawprint.png",revision:"95d623fe26ba626b2ca8a45edc13b510"},{url:"/images/profile/pawprint_s.png",revision:"6b84ac2d1944a796c022de1557995d4b"},{url:"/images/profile/pet.png",revision:"858e9f680a41b0fa507876e23e67b7ab"},{url:"/images/profile/pet_s.png",revision:"21f9ecb057579c11a3d64434fec3b3c6"},{url:"/images/profile/polarbear.png",revision:"f8d12f84b5daf517c56432cc672f8ba2"},{url:"/images/profile/polarbear_s.png",revision:"58c0d88d1dc71d2c23fb3f67aeff1f85"},{url:"/images/profile/rabbit.png",revision:"71890ced14225235cac3002ced19483c"},{url:"/images/profile/rabbit_s.png",revision:"6034baf5140deb499cec2de6a7ba2b53"},{url:"/images/profile/reindeer.png",revision:"ecdff3885889ec8c822c84672f17f7db"},{url:"/images/profile/reindeer_s.png",revision:"d47066b88f3cb01f7682e4352bd21e55"},{url:"/images/profile/scorpion.png",revision:"a7cec0046741271e6ad67a148a35215e"},{url:"/images/profile/scorpion_s.png",revision:"bbaf2238a4f47fdc1af8effb41d74814"},{url:"/images/profile/shark.png",revision:"638ed359458e2a72003d8a9fb72ba148"},{url:"/images/profile/shark_s.png",revision:"e281cd69fcbd61d97effe1a7df4b6065"},{url:"/images/profile/squirrel.png",revision:"ce15777a8f4ab69d2fb686d46a14d300"},{url:"/images/profile/squirrel_s.png",revision:"3115272ed5e943451fbae766b6ff5e9d"},{url:"/images/profile/tiger.png",revision:"9b118cf8a2b5bf3bae92a76190c59951"},{url:"/images/profile/tiger_s.png",revision:"a4f9b6b1399e9e823f6615c35fb8d133"},{url:"/images/profile/whale.png",revision:"e4b4cfed105c29a7933990df977c0795"},{url:"/images/profile/whale_s.png",revision:"a52986f3f0ed95edce65456032b88b1b"},{url:"/images/profile/wolf.png",revision:"e224831a045eed7c3bbda5791af7ad42"},{url:"/images/profile/wolf_s.png",revision:"05c870f7fd97a726b4ac26c3f5d7a372"},{url:"/images/readme.txt",revision:"bdb885606f3e3efe6055adb7deadcfa6"},{url:"/images/splash_screens/10.2__iPad_landscape.png",revision:"58aeb796a3024bea49320744c223ab27"},{url:"/images/splash_screens/10.2__iPad_portrait.png",revision:"86a99a9ca647bd54a13cf03c28da8528"},{url:"/images/splash_screens/10.5__iPad_Air_landscape.png",revision:"4aed35853f8c8616f006440454d7ff27"},{url:"/images/splash_screens/10.5__iPad_Air_portrait.png",revision:"c4b4d073a656b4fc3a3bd70d2b5ef73d"},{url:"/images/splash_screens/10.9__iPad_Air_landscape.png",revision:"b49f82d93f26aabdc09af13f82967bd4"},{url:"/images/splash_screens/10.9__iPad_Air_portrait.png",revision:"df77a921d8f40ddee9ff5539c81ebcba"},{url:"/images/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"cb4c5dbe1c1566fa6124f6b51a686186"},{url:"/images/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"9b4e1d5e8f11606a538b2b3f62f7f4e7"},{url:"/images/splash_screens/12.9__iPad_Pro_landscape.png",revision:"3c8d63abd5c01c311a3b75770e9a6fa5"},{url:"/images/splash_screens/12.9__iPad_Pro_portrait.png",revision:"cfb2571bc3cc36ed545ec874f05cf0f3"},{url:"/images/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"9322e6dd27aea1b68357f29b02ccaad4"},{url:"/images/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"d9b8b712d9b5cb6513539ac40bec67d1"},{url:"/images/splash_screens/8.3__iPad_Mini_landscape.png",revision:"20b07f770da10495b7f04be572a0d63f"},{url:"/images/splash_screens/8.3__iPad_Mini_portrait.png",revision:"8e0165d083cc46bdea8f35787302322b"},{url:"/images/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"9565f356420c0dd28cba303386eb5fd9"},{url:"/images/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"9f3be3554d0edd1cc2f7f7b0d8ea6567"},{url:"/images/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"2cb462d1114cb26357ab4b832643b240"},{url:"/images/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"383f3721618f39239f3691e6f8b0f01b"},{url:"/images/splash_screens/iPhone_11__iPhone_XR_landscape.png",revision:"4a95187bec4bb53079e24267173bd185"},{url:"/images/splash_screens/iPhone_11__iPhone_XR_portrait.png",revision:"0f813f55d624c83611320d9e76aba470"},{url:"/images/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"6c02ade6c13e8adac021e3fa32b19e45"},{url:"/images/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"4db807e3dd1dc49518cb460cc16f33fe"},{url:"/images/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"7427b68d9c9897fa206d616963feab0b"},{url:"/images/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"1acbfcfd8f070463cedaff0f1b1782b0"},{url:"/images/splash_screens/iPhone_14_Pro_Max_landscape.png",revision:"3fe47a2d21a072bf4fa3610c5be36cf2"},{url:"/images/splash_screens/iPhone_14_Pro_Max_portrait.png",revision:"f43724ec03dd81eb8762fe8383d41f46"},{url:"/images/splash_screens/iPhone_14_Pro_landscape.png",revision:"65c7e8034e4fd212e0f304104d1dba86"},{url:"/images/splash_screens/iPhone_14_Pro_portrait.png",revision:"4c081039afa22d0530207f296f0c4d84"},{url:"/images/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"32019b61d8e26bf5e213d18fc109b383"},{url:"/images/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"a918db7c6b28ff3368a02f98f9236498"},{url:"/images/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"86d218f22f091353839a888ae94909c4"},{url:"/images/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"3161f18a92080fa5d4f56ef3812cb64b"},{url:"/images/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"f593fafb914a95b6c4ad5e08448c9814"},{url:"/images/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"669829ad0fa3a55fc8749bd5ac90dbce"},{url:"/images/splash_screens/icon.png",revision:"049649387f72e76486f2113e26d10231"},{url:"/manifest.json",revision:"e2f1f618b0957b4db4835c50fa2965ea"},{url:"/robots.txt",revision:"a6e015a3cb860891c734dfc5201bbbe3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:n})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
