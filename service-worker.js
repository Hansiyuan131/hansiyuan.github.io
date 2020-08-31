/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c2b8cdc16b21f7d3f16d9a9952bb35f4"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "b6a95eb9860081ba407c2cc0ef4be748"
  },
  {
    "url": "assets/css/0.styles.9983b828.css",
    "revision": "a534c3d01d28b272856381d10e359a03"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.da01beaf.js",
    "revision": "25a57fe5b979743158f738b343b2cf59"
  },
  {
    "url": "assets/js/11.60832861.js",
    "revision": "92d61edb23e0e169392b4cd9f9fc200c"
  },
  {
    "url": "assets/js/12.46b7f824.js",
    "revision": "7c816b86431d53c51915897b28c843c2"
  },
  {
    "url": "assets/js/13.c05dbbd3.js",
    "revision": "610dcb438bbbf5fdc1f59df37193ab76"
  },
  {
    "url": "assets/js/14.0849ab08.js",
    "revision": "ca9d5b6a20d0c05149680e9d75abb91d"
  },
  {
    "url": "assets/js/15.0260603f.js",
    "revision": "25c28ca6fee160371ea6487f57d34e9d"
  },
  {
    "url": "assets/js/16.b5ce1d69.js",
    "revision": "a570c6fc961499df957b1affd51e82bf"
  },
  {
    "url": "assets/js/17.ee70ad0f.js",
    "revision": "07446b6699c9aa6ee9a07fee3f4db3e8"
  },
  {
    "url": "assets/js/18.9fb72237.js",
    "revision": "f97a1910ddad6fce70b9c6128392d707"
  },
  {
    "url": "assets/js/19.197e4423.js",
    "revision": "f075cc01a362d6551a7ffa7c90b08cda"
  },
  {
    "url": "assets/js/2.cb1efa29.js",
    "revision": "3425f41ada5e923ca10ca88801225a59"
  },
  {
    "url": "assets/js/20.b7bab479.js",
    "revision": "b94b3bffec22b8f761184a9b9c4b008a"
  },
  {
    "url": "assets/js/21.631097a2.js",
    "revision": "4e6619043e9c618bd2a27cee94ca39ba"
  },
  {
    "url": "assets/js/22.588f1f99.js",
    "revision": "c861d6e50131d11a87050a756d863a37"
  },
  {
    "url": "assets/js/23.f7db75a2.js",
    "revision": "3546bba99b5faee7dc379aa96f95b932"
  },
  {
    "url": "assets/js/24.d0a92f37.js",
    "revision": "10ba34ad73160e5eb7e4b0db4adcc06f"
  },
  {
    "url": "assets/js/25.192929e4.js",
    "revision": "628ebd4dd02c6b78efb6badeb94f2c12"
  },
  {
    "url": "assets/js/26.29747567.js",
    "revision": "d5ac62be1ff6efdc84d81a2d4e277af7"
  },
  {
    "url": "assets/js/27.6a14665e.js",
    "revision": "5e4ecfc9025cbfcb58aeb5b03a5f7462"
  },
  {
    "url": "assets/js/28.8469c569.js",
    "revision": "a013db4c0ab4be58a767c84d058c1de0"
  },
  {
    "url": "assets/js/29.0e598ce7.js",
    "revision": "ea6fc2a4aae5d2c77dc1d27abd808b35"
  },
  {
    "url": "assets/js/3.86630006.js",
    "revision": "3f6d1fd7e843441b568769625dfb1ac9"
  },
  {
    "url": "assets/js/30.f61888cd.js",
    "revision": "2cdb15ec35f6c99d9aad3004d612c38f"
  },
  {
    "url": "assets/js/31.64af9460.js",
    "revision": "261e26617b4f76bfcebe0c314dbccaa8"
  },
  {
    "url": "assets/js/32.dc7e7034.js",
    "revision": "3a89308483887732406ca4f55938e190"
  },
  {
    "url": "assets/js/33.feb9522f.js",
    "revision": "84b7004e95554d311234471d2ef4d249"
  },
  {
    "url": "assets/js/34.596872ca.js",
    "revision": "1675de3c70866461d5dca266d6d527b3"
  },
  {
    "url": "assets/js/35.15df2c18.js",
    "revision": "e0292351ab1d1d38f520e7986390df3f"
  },
  {
    "url": "assets/js/36.ebacaa49.js",
    "revision": "9c94bc189c76d83660acf9298ed53fe6"
  },
  {
    "url": "assets/js/37.1c9fe52f.js",
    "revision": "a45a0dd3c294c02eb775b0e072056bc2"
  },
  {
    "url": "assets/js/38.6438cdde.js",
    "revision": "62926020632b7401bc98468f89971b9e"
  },
  {
    "url": "assets/js/39.9b5993f0.js",
    "revision": "59b80852df0080b5acda9c28c41d8166"
  },
  {
    "url": "assets/js/4.6c41b86e.js",
    "revision": "81d105251db16688333b36acfcc8377a"
  },
  {
    "url": "assets/js/40.1f56a9ff.js",
    "revision": "601262b8d566ffbd7b4900ec6d1a5b3b"
  },
  {
    "url": "assets/js/41.a6cb7f4b.js",
    "revision": "579dad9d255c95262c6e41fc46729e6f"
  },
  {
    "url": "assets/js/42.0eac2a2b.js",
    "revision": "267b0b8d029cd3b0bf71714149cbdced"
  },
  {
    "url": "assets/js/43.7996f5e9.js",
    "revision": "6662766198fd85aaade907a0732a737c"
  },
  {
    "url": "assets/js/44.34b76eef.js",
    "revision": "e6de8caa24c0f9b3f97c7484f0d8a9a6"
  },
  {
    "url": "assets/js/45.3cb593b0.js",
    "revision": "e2f9ff5bbf1a1f19811751e34b4ac656"
  },
  {
    "url": "assets/js/46.de2ed787.js",
    "revision": "8bb1b7773c989226774b2d1eb49c830c"
  },
  {
    "url": "assets/js/47.b1887ae2.js",
    "revision": "8a1ebe01c5cf590b15bcec3c0849c908"
  },
  {
    "url": "assets/js/48.251cb371.js",
    "revision": "f57bb939d92c274ed161cb7c916fe4e1"
  },
  {
    "url": "assets/js/49.f343c36e.js",
    "revision": "893218883a2cb008de52d6afa3ab5781"
  },
  {
    "url": "assets/js/5.40452514.js",
    "revision": "5fd808f66a9eecdb5e49acae6ca81644"
  },
  {
    "url": "assets/js/50.17564016.js",
    "revision": "5f2e1874f09ce095074fb989f7bc01d3"
  },
  {
    "url": "assets/js/51.d080457d.js",
    "revision": "09c4b5b7cd025cad4d15d45cce7aa844"
  },
  {
    "url": "assets/js/52.512ded93.js",
    "revision": "295325d09a02a3a8a0650c024355c45c"
  },
  {
    "url": "assets/js/53.86243de8.js",
    "revision": "782f2edccb409e4884dacc4b07f91196"
  },
  {
    "url": "assets/js/54.2767f2c2.js",
    "revision": "685ebd0b275e1d9cce85aa959d5ba450"
  },
  {
    "url": "assets/js/55.91793e75.js",
    "revision": "78e49acecd0b4c5efe1c55209895b21d"
  },
  {
    "url": "assets/js/56.b4c5bebd.js",
    "revision": "81df4fba740dc500ec8874e9be96a182"
  },
  {
    "url": "assets/js/57.f20ec28d.js",
    "revision": "d8b1a090b6865bbeb6e482f818b77e13"
  },
  {
    "url": "assets/js/58.e6079be9.js",
    "revision": "9da941089eed3da96e145a34f4ff5c70"
  },
  {
    "url": "assets/js/6.180eae89.js",
    "revision": "881359418980fa1b9a934d3859e0500d"
  },
  {
    "url": "assets/js/7.4d402272.js",
    "revision": "30ccc3937939062346c393ec2d1d1574"
  },
  {
    "url": "assets/js/8.2f37510a.js",
    "revision": "a8e742daea279059936baabc4615f752"
  },
  {
    "url": "assets/js/9.09359b4b.js",
    "revision": "d80518a3a25e41b44d3044f77b20e397"
  },
  {
    "url": "assets/js/app.d214fd8d.js",
    "revision": "5d0634632cb84af44b19824be4189b29"
  },
  {
    "url": "DevOps/001IDE.html",
    "revision": "ad7c894be4f202ecd2497f53fdc7e979"
  },
  {
    "url": "DevOps/002Git.html",
    "revision": "920995e32d61732126e5ee37e98a5b48"
  },
  {
    "url": "DevOps/003Liunx命令大全.html",
    "revision": "c5f04763cf65e749dfa00fa8e8e252c9"
  },
  {
    "url": "DevOps/004终端中的编辑器.html",
    "revision": "bb46f96be59673bd9869eb9aef1c3b6b"
  },
  {
    "url": "DevOps/index.html",
    "revision": "55ec97cad78b93177546bbed82f3d70b"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "89a6dcaef22a133855ea428964e707ab"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "8291166b18892daf61310d86e7fb6d13"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "5c8e1946d08869fdf698f8db1686c3ba"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "fb84025e9499809275cf23bac090e3bd"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "8ff77722e6d4e1d6a459e4feb49f1b34"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "ecd85649a3e6db7eab54e10955723d9c"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "37d32685fcf671db5d99e8fdfd0d7fc8"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "37d32685fcf671db5d99e8fdfd0d7fc8"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "f2694cc1584a53bce6c594bc94600861"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "c8c71626be6e853928ee0ad86d06fbe5"
  },
  {
    "url": "index.html",
    "revision": "6266b19b3e59b6b64f50c2ff3e964706"
  },
  {
    "url": "Python/人工智能/index.html",
    "revision": "87caa7e879bf2a314c097695b455ab0d"
  },
  {
    "url": "Python/爬虫/001第一个Scrapy网络爬虫.html",
    "revision": "81b281070ea3d0940d58fcbdce230eb6"
  },
  {
    "url": "Python/爬虫/002初识爬虫.html",
    "revision": "3f7ffc7d37e87f47076e0f12e962e458"
  },
  {
    "url": "Python/爬虫/003ChromeDevTools使用技巧.html",
    "revision": "ddbb13cda8723e109aa85241cfb73c59"
  },
  {
    "url": "Python/爬虫/004爬虫requests库.html",
    "revision": "efb7137e48accc9f5afe46b2a6274bfa"
  },
  {
    "url": "Python/爬虫/index.html",
    "revision": "6f94a3dc262527908e487361fef92202"
  },
  {
    "url": "Python/量化分析/001股票相关.html",
    "revision": "7c5123a96fb37d8bbc417ab0f9390ac7"
  },
  {
    "url": "Python/量化分析/002量化投资与Python.html",
    "revision": "96cb6e4e774829b12c56196bdfa48b11"
  },
  {
    "url": "Python/量化分析/index.html",
    "revision": "764bb1cf3d0b1185d9d85da981dc3233"
  },
  {
    "url": "关于我/index.html",
    "revision": "0b336a77420c596fad51dd95b9897c56"
  },
  {
    "url": "其他/index.html",
    "revision": "a0968c0ab41a15e7dfce3f8a86db5a00"
  },
  {
    "url": "前端/React/index.html",
    "revision": "ff8475d4555ac760bd77c94b7110a3a7"
  },
  {
    "url": "前端/Vue/index.html",
    "revision": "8144232e8c05b1d585633caf72d0c7b4"
  },
  {
    "url": "后端/JavaBlog/Github开源之旅.html",
    "revision": "a97aeb67f717987cbcc56f1bafb7db3b"
  },
  {
    "url": "后端/JavaBlog/index.html",
    "revision": "00947b26be07217829b2b209426f96d6"
  },
  {
    "url": "后端/JavaBlog/关于Maven你需要了解什么？.html",
    "revision": "23c1d99da076e0516aaea21017095ce1"
  },
  {
    "url": "后端/JavaBlog/在成为高效程序员的路上.html",
    "revision": "978104be0b4c8dfc16eb4e2b38ba9f58"
  },
  {
    "url": "后端/NetBlog/index.html",
    "revision": "d585bbe2c11d9de7be275c06e778f38a"
  },
  {
    "url": "常用导航/index.html",
    "revision": "dab2503ffdb5fe003175a68dd0420965"
  },
  {
    "url": "数据库/MongoDB/index.html",
    "revision": "092850239e44068f817b879553f9a9a7"
  },
  {
    "url": "数据库/Mysql/001Mysql安装.html",
    "revision": "2fd30cec6f141bcf64421a41f6241854"
  },
  {
    "url": "数据库/Mysql/002MySQL基础.html",
    "revision": "9d23e169daf71ebc02325de0b20169b0"
  },
  {
    "url": "数据库/Mysql/003MySQL数据库设计实战.html",
    "revision": "5407c75bc4e0a0a5ff6d4da8dbe5a2a1"
  },
  {
    "url": "数据库/Mysql/index.html",
    "revision": "a68fb4549e7694540cd965d94a0ddc46"
  },
  {
    "url": "数据库/Redis/index.html",
    "revision": "5deb93af18e86bec39cdb859ef8953a5"
  },
  {
    "url": "数据库/SQLServer/001SQL基础.html",
    "revision": "868ee0d8a39922e0e001d6c8b65ea5e2"
  },
  {
    "url": "数据库/SQLServer/index.html",
    "revision": "aae011619ad5671a95a06b6de4be3e60"
  },
  {
    "url": "每月小记/2019年小记.html",
    "revision": "ea24d31e3a568e69f6a6f47e273a8076"
  },
  {
    "url": "每月小记/2020年小记.html",
    "revision": "a1b88b78f2b12731248599de0e6a9ac9"
  },
  {
    "url": "每月小记/index.html",
    "revision": "703daa5f11691f9aba06d500d0d7fa29"
  },
  {
    "url": "算法/LeetCode/001LeetCode.html",
    "revision": "6aa7e1b3d60ababf2b9ce39d385f4a7a"
  },
  {
    "url": "算法/LeetCode/index.html",
    "revision": "903857748cc97d048f166f0f86abcfdb"
  },
  {
    "url": "算法/剑指Offer/index.html",
    "revision": "a8a8d3400399322bd55e5ebb9211bc91"
  },
  {
    "url": "算法/算法基础/001复杂度分析.html",
    "revision": "ed96b0f23fecc504bf83ea90102c328c"
  },
  {
    "url": "算法/算法基础/002数组.html",
    "revision": "858087d0f4fbf021e735b3af0657b4ca"
  },
  {
    "url": "算法/算法基础/003链表.html",
    "revision": "8fe44885d0cf2b7f9c93e1134468a904"
  },
  {
    "url": "算法/算法基础/004栈.html",
    "revision": "c08df6212a9561c2b6061f47951aaa9b"
  },
  {
    "url": "算法/算法基础/005队列.html",
    "revision": "c561ee4b766647c551aa979ce22e9dce"
  },
  {
    "url": "算法/算法基础/006数据结构.html",
    "revision": "79428d302c68213a62eefc749180ae01"
  },
  {
    "url": "算法/算法基础/index.html",
    "revision": "eec3c49a37a20c951b81651c5e22fc4e"
  },
  {
    "url": "读书/001程序员的思维修炼-读后感悟.html",
    "revision": "b0564c3854233d0871948ea484e2153e"
  },
  {
    "url": "读书/index.html",
    "revision": "252f8e0e01027d28b1681e52694bda55"
  },
  {
    "url": "项目/iMall/index.html",
    "revision": "7f89d65e0733b997f166dda56bf33658"
  },
  {
    "url": "项目/sn-reader/index.html",
    "revision": "c8fe662336923cf17e4fabaa5ee8a70a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
