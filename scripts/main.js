(function(document) {
	document.addEventListener('DOMContentLoaded', () => {
		// class Names
		let chatItemVisible = 'ntflx-chat__item--visible';
		let plusIconSelectedClassName = 'ntflx-plus--selected';
		let mediaTrayItemSelectedClassName = 'ntflx-media-tray__item--selected';
		let mediaTrayVisibleClassName = 'ntflx-media-tray--visible';

		// cache all elements
		let plusBtn = document.getElementsByClassName('ntflx-plus')[0];
		let mediaTray = document.getElementsByClassName('ntflx-media-tray')[0];
		let chatItems = document.getElementsByClassName('ntflx-chat__item');
		let video = document.getElementById('ntflx-media-tray__video');
		let textInput = document.getElementsByClassName('ntflx-message__text-input')[0];
		let submitButton = document.getElementsByClassName('ntflx-check')[0];
		let gifImage = document.getElementsByClassName('ntflx-media-tray__img--dynamic')[0];
		let targetText = document.getElementById('target-text');
		let imgMessage = document.getElementsByClassName('ntflx-chat__item--img')[0];

		// Fake first chat messages on load
		setTimeout(() => chatItems[0].classList.add(chatItemVisible), 3500);

		// Fake second chat messages on load
		setTimeout(() => chatItems[1].classList.add(chatItemVisible), 5000);

		textInput.addEventListener('keypress', evt => {
			if (evt.which === 13 && textInput.value !== '') {
				setMessage(textInput.value);
			}
		});

		submitButton.addEventListener('click', () => {
			if (textInput.value !== '') {
				setMessage(textInput.value);
				resetTray();
			}
		});

		// Add Gif Image to chat area
		gifImage.addEventListener('click', () => {
			chatItems[1].classList.add('ntflx-chat__item--partial');
			chatItems[2].classList.add(chatItemVisible);
			window.scrollTo(0, 200);
		});

		// Video Functionality
		video.addEventListener('mouseenter', () => video.play());
		video.addEventListener('mouseleave', () => video.pause());

		// Plus Icon Functionality
		plusBtn.addEventListener('click', evt => {
			evt.target.classList.toggle(plusIconSelectedClassName);
			mediaTray.classList.toggle(mediaTrayVisibleClassName);
		});

		// Media Tray Functionality
		mediaTray.addEventListener('click', evt => {
			if ([...evt.target.parentElement.classList].indexOf('ntflx-media-tray__item--animated') > 0) {
				resetTray();
			}
		});

		function setMessage(msg) {
			targetText.innerHTML = msg;

			chatItems[3].classList.add(chatItemVisible);

			// Reset text value to empty
			textInput.value = '';

			imgMessage.classList.add('ntflx-chat__item--respond');
		}

		function resetTray() {
			// Close Mediat Tray
			mediaTray.classList.remove(mediaTrayVisibleClassName);
			// Reset Plus Icon to default state
			plusBtn.classList.remove(plusIconSelectedClassName);
			// Remove selected state on media tray item if one exists
			document.getElementsByClassName(mediaTrayItemSelectedClassName)[0].classList.remove(mediaTrayItemSelectedClassName);
			// Remove selected treatment from current selected media tray item
			evt.target.parentElement.classList.remove(mediaTrayItemSelectedClassName);
		}
	});
})(document);
