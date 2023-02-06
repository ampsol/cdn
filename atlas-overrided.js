const hideHS = () => {
  const styleTag = document.createElement('style')
  styleTag.innerHTML = 'hs-cmsf-branding { display: none!important; visibility: hidden!important; opacity: 0!important; }'
  document.querySelector('body').appendChild(styleTag)
}
const delayHideHS = () => {
  window.addEventListener('load', hideHS)
}
const overrideText = () => {
  const currentYear = document.querySelector('.__override-current-year')
  currentYear.innerHTML = `©${new Date().getFullYear()}`;
  currentYear.className += 'overrided';
}
(function() {
  delayHideHS()
  overrideText()
})()