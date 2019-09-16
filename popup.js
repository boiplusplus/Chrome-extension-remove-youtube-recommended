let button = document.querySelector('.only')

document.addEventListener('DOMcontentLoaded', button.addEventListener('click',
	() => {chrome.tabs.query({currentWindow: true, active: true},
		(tabs) => chrome.tabs.sendMessage(tabs[0].id, 'go'))}))
