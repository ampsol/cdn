(function() {
})()
const dismissed = () => {
	document.getElementById('overview').classList.add('dismissed')
	document.getElementById('sleek').classList.add('dismissed')
	document.getElementById('suggest').classList.add('full')
}

const hideSuggest = () => {
	dismissed()
	document.getElementById('suggest').classList.add('hide')
}