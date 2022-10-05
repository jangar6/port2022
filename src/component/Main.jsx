import React, { useEffect, useRef, useState } from 'react';
import usePage from '@redux/store/hooks/usePage';
import { pageIndex } from '@redux/store/define/enum';
import Menu from './Menu';
import Intro from './mainComponent/Intro/Intro';
import AboutMe from './mainComponent/About/AboutMe';
import Skills from './mainComponent/Skills/Skills';
import Study from './mainComponent/Study/Study';
import Project from './mainComponent/Project/Project';

import './Main.scss';

function Main() {
	const { currentPageMain, currentPageAboutMe, current } = usePage();

	// useEffect(() => {
	// 	console.log(mainRef.current.scrollTop);
	// }, [mainRef, scrollValue]);
	const [scroll, setScroll] = useState(0);

	// const onHandleScroll = () => {
	// 	setScroll(window.scrollY);
	// };

	// useEffect(() => {
	// 	if (2300 < window.pageYOffset) {
	// 		// 900보다 크면 출력
	// 		if (5500 < window.pageYOffset) {
	// 			return;
	// 		}
	// 		return console.log('current: 2300 ~ 5500', window.pageYOffset);
	// 	} else if (800 < window.pageYOffset) {
	// 		// 900보다 크면 출력
	// 		if (2000 < window.pageYOffset) {
	// 			return;
	// 		}
	// 		return console.log('current: 800 ~ 2000', window.pageYOffset);
	// 	}
	// 	if (window.pageYOffset === 0) {
	// 		return console.log('current: 0', window.pageYOffset);
	// 	}
	// }, [window.pageYOffset]);

	// useEffect(() => {
	// 	window.addEventListener('scroll', onHandleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', onHandleScroll); //clean up
	// 	};
	// }, [window.scrollY]);

	return (
		<div styleName="main">
			<Menu />
			<div id="section-1">
				<Intro />
			</div>
			<div styleName="black-box" />
			<div id="section-2">
				<AboutMe />
			</div>
			<div styleName="black-box" />
			<div id="section-3">
				<Skills />
			</div>
			<div styleName="black-box" />
			<div id="section-4">
				<Study />
			</div>
			<div styleName="black-box" />
			<div id="section-5">
				<Project />
			</div>
		</div>
	);
}

export default Main;
