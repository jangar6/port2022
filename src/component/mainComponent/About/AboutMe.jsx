import React, { useEffect } from 'react';
import usePage from '@redux/store/hooks/usePage';
import Menu from '../../Menu';
import './AboutMe.scss';

function AboutMe() {
	const { currentPageAboutMe } = usePage();
	useEffect(() => {
		currentPageAboutMe();
	}, []);

	return (
		<div id="aboutMe" styleName="aboutme">
			<div styleName="text-box">
				<div styleName="title">
					<div styleName="title-box">
						<p>ABOUT</p>
						<p>ME</p>
					</div>
				</div>
				<p styleName="text">
					처음엔 웹 퍼블리셔로 시작하였습니다. 혼자 작업했을 때와 달리 여럿이서 프로젝트를 진행했을 때 어려움을 겪었습니다. 고객 입장만을 고려하다
					보니 코드를 작성할 때 개발자들의 개발 방법 때문에 여러 번 변경을 요구해왔기 때문입니다. 그래서 저는 개발자 입장을 고려하기 위해 개발 공부를
					조금씩 배워갔습니다. 차츰 개발자에 대해 알수록 재미와 호기심으로 개발을 더 공부해나가며 입사 후 웹 퍼블리셔에서 프론트엔드로 포지션을
					변경하였습니다.
				</p>
				<p styleName="text">
					일을 맡을 때만 해도 불안하고 걱정되었던 것과는 달리 일에 적응하는 게 빨랐으며 고객 입장과 개발자의 입장을 고려하는 코드를 작성함으로써
					팀에서 인정받는 프론트엔드 개발자가 되었습니다. 개발자와 기획자의 중간에서 의견을 조율하는 역할도 하며 웹 퍼블리셔 사고와 개발자사고를
					같이하는 차별화된 프론트엔드 개발자가 되었습니다.
				</p>
			</div>

			<div styleName="right-bg"></div>
		</div>
	);
}

export default AboutMe;
