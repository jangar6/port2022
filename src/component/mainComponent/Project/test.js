const onHandleScroll = () => {
	setScroll(window.scrollY);
};

useEffect(() => {
	if (2300 < window.pageYOffset) {
		// 900보다 크면 출력
		if (5500 < window.pageYOffset) {
			return;
		}
		return console.log('current: 2300 ~ 5500', window.pageYOffset);
	} else if (800 < window.pageYOffset) {
		// 900보다 크면 출력
		if (2000 < window.pageYOffset) {
			return;
		}
		return console.log('current: 800 ~ 2000', window.pageYOffset);
	}
	if (window.pageYOffset === 0) {
		return console.log('current: 0', window.pageYOffset);
	}
}, [window.pageYOffset]);

useEffect(() => {
	window.addEventListener('scroll', onHandleScroll);
	return () => {
		window.removeEventListener('scroll', onHandleScroll); //clean up
	};
}, [window.scrollY]);
