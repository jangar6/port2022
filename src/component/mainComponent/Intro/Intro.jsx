import React, { useEffect, useState } from 'react';
import usePage from '@redux/store/hooks/usePage';
import { pageIndex } from '@redux/store/define/enum';
import './Intro.scss';
import Menu from '../../Menu';

function Intro() {
	const { currentIntro, current } = usePage();
	const [aniActive, setAniActive] = useState(false);

	// useEffect(() => {
	// 	currentPageIntro();
	// }, []);

	useEffect(() => {
		currentIntro();
		setAniActive(true);
	}, []);

	return (
		<div id="Intro" styleName={`intro ${aniActive ? 'active' : ''}`}>
			<Menu />
			<div styleName="text-box">
				<p styleName="icon">“</p>
				<div styleName="text">
					<p>단순 사이트 제작뿐만 아니라 기능과 게임 콘텐츠까지,</p>
					<p>퍼블리싱과 웹 개발을 같이하는 개발자입니다.</p>
				</div>
				<p styleName="icon">”</p>
			</div>
			<div styleName="image-box">
				<div styleName="image" />
			</div>
		</div>
	);
}

export default Intro;
