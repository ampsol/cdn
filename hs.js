const dimbuiltonhs = () => {
  const hselem = document.getElementById('hs-cmsf-branding')
  hselem.innerHTML = ''
  hselem.style.opacity = 0
}
setTimeout(() => {
  dimbuiltonhs()
}, 5000)