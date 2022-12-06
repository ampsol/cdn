const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const includeHotjar = () => {
  console.log('Hotjar Loaded..')
  var script = document.createElement('script');
  script.src = 'https://ampsol.github.io/cdn/hotjar.js';
  script.async = true;
  document.getElementsByTagName('head')[0].appendChild(script);
}
const includeSegment = () => {
  console.log('Segment Loaded..')
  var script = document.createElement('script');
  script.src = 'https://ampsol.github.io/cdn/segment.js';
  script.async = true;
  document.getElementsByTagName('head')[0].appendChild(script);
}
const includeHeap = () => {
  console.log('Heap Loaded..')
  var script = document.createElement('script');
  script.src = 'https://ampsol.github.io/cdn/heap.js';
  script.async = true;
  document.getElementsByTagName('head')[0].appendChild(script);
}
const includeAppcues = () => {
  console.log('Appcues Loaded..')
  var script = document.createElement('script');
  script.src = 'https://fast.appcues.com/115517.js';
  script.async = true;
  document.getElementsByTagName('head')[0].appendChild(script);
  setTimeout(() => {
    window.AppcuesSettings = {
      enableURLDetection: true
    };
  }, 1000)
}
const includeGA = () => {
  console.log('GA4 Loaded..')
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3NM5DEWG0Q';
  script.async = true;
  document.getElementsByTagName('head')[0].appendChild(script);
  setTimeout(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-3NM5DEWG0Q');
  }, 1000)
}

const includeMarkie = () => {
  (function (w, d, s, o, f, m, js, fjs) {
    w["MarkieWidget"] = o;
    w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments); };
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]); 
    js.id = o; js.src = f; js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
    w[m] = w[m] || { boot: (u) => w.addEventListener('load', () => w[m].boot(u)) };
  })(window, document, "script", "mrkw", "https://widget.getmarkie.io", "markie");
  mrkw("init", "6388c97eaef53ca68b00058c");
  window.markie.boot(window.uuid);
  console.log('initate markie with uuid: '+window.uuid)
}
(function() {
  const window.uuid = makeid(32)
  includeHotjar()
  includeSegment()
  includeHeap()
  includeAppcues()
  includeGA()
})()