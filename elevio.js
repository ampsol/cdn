(function() {
  console.log('document loaded..')
  Segment()
  TagIframe()
})()

function Segment () {
  var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="ZBlcGgFp22C6e2Oj9JGcJC7UkWZfreEe";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("ZBlcGgFp22C6e2Oj9JGcJC7UkWZfreEe");
  analytics.page();
  }
}

function TagIframe () {
  var ifrm = document.createElement('iframe');
  ifrm.setAttribute('id', 'tagmanager');
  ifrm.setAttribute('src', 'https://www.googletagmanager.com/ns.html?id=GTM-NMJKBKD');
  ifrm.setAttribute('width', '0');
  ifrm.setAttribute('height', '0');
  ifrm.setAttribute('style', 'display:none;visibility:hidden')
  document.body.appendChild(ifrm)
}
//Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMJKBKD');

