const hideHS = () => {
  const styleTag = document.createElement('style')
  styleTag.innerHTML = 'hs-cmsf-branding { display: none!important; visibility: hidden!important; opacity: 0!important; }'
  document.querySelector('body').appendChild(styleTag)
}
const delayHideHS = () => {
  window.addEventListener('load', hideHS)
}
(function() {
  delayHideHS()
})()