const hideHS = () => {
  document.querySelector('hs-cmsf-branding').remove()
}
const delayHideHS = () => {
  window.addEventListener('load', hideHS)
}
(function() {
  delayHideHS()
})()