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
(function() {
  includeHotjar()
  includeSegment()
})()