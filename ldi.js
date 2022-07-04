const includePendo = (apiKey) => {
  (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
  v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
      o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
      y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
      z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
  console.log('Pendo Loaded..')
}
const includeLOU = () => {
  console.log('Heap Loaded..')
  var script = document.createElement('script');
  script.src = 'https://run.louassist.com/v2.5.1-m?id=426066551891';
  script.async = true;
  document.getElementsByTagName('head')[0].appendChild(script);
}
(function() {
  includePendo('9f96e989-c030-46d9-7dcb-5ddd97190f5a')
  includeLOU()
})()

