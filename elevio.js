const includeHotjar = () => {
  console.log('document loaded..')
  var script = document.createElement('script');
  script.src = 'https://ampsol.github.io/cdn/hotjar.js';
  script.async = true;
  document.getElementsByTagName('head')[0].appendChild(script);
}
const includeSegment = () => {
  console.log('document loaded..')
  var script = document.createElement('script');
  script.src = 'https://ampsol.github.io/cdn/segment.js';
  script.async = true;
  document.getElementsByTagName('head')[0].appendChild(script);
}
(function() {
  includeHotjar()
  includeSegment()
})()