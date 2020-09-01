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
    "revision": "f3071c21acbddd11a3e30d1eeb89e33a"
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
    "url": "assets/js/10.a5559d7c.js",
    "revision": "d088137b61f29328942201f4902d9265"
  },
  {
    "url": "assets/js/11.e8461400.js",
    "revision": "35c9432e3808a3270dc3e524b9c917a5"
  },
  {
    "url": "assets/js/12.233de1a6.js",
    "revision": "18c753d0c054819fa8a68e5b0042f159"
  },
  {
    "url": "assets/js/2.933ffaed.js",
    "revision": "3a0cd28ee11fbd62a52a12857b0376e6"
  },
  {
    "url": "assets/js/3.1ac00bfc.js",
    "revision": "9c3a5ab346742a36356bd5c04d8c618b"
  },
  {
    "url": "assets/js/4.40e1ab8f.js",
    "revision": "c5fe345062de2274d0385476efa8236d"
  },
  {
    "url": "assets/js/5.40452514.js",
    "revision": "5fd808f66a9eecdb5e49acae6ca81644"
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
    "url": "assets/js/8.b0ec2040.js",
    "revision": "df42c1b16030dfd797b0be69e95dd5fe"
  },
  {
    "url": "assets/js/9.bee2dbaf.js",
    "revision": "7ffd4685d94d7843ed9f99a8b6aa8936"
  },
  {
    "url": "assets/js/app.f00ff40f.js",
    "revision": "6b4a7de6d996444ff1dcd237979015ea"
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
    "revision": "da500bab30b9956e9ac958a0ac34375d"
  },
  {
    "url": "常用导航/index.html",
    "revision": "d356aee5d140bd0550c6e4f1da4a3a14"
  },
  {
    "url": "项目/iMall/index.html",
    "revision": "5c94b94e1a13fd190e23b6c21b0aa579"
  },
  {
    "url": "项目/sn-reader/index.html",
    "revision": "1949876b85822ff137c7f9c51f04dfbb"
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
