import React, { useEffect, useState } from 'react';
import usePage from '@redux/store/hooks/usePage';
import ProjectRefo from './Project.refo';
import Menu from '../../Menu';
import './Project.scss';

const index = {
	pg: 0,
	port: 1,
	web: 2,
	b2b: 3,
	se: 4,
};

function Project() {
	const { currentPageProject } = usePage();

	const [indexNum, setIndexNum] = useState(index.pg);

	const onHandleScroll = () => {
		if (10 < window.pageYOffset) {
			if (500 < window.pageYOffset) {
				setIndexNum(index.pg);
			}
			setIndexNum(index.pg);
		}
		if (500 < window.pageYOffset) {
			if (1000 < window.pageYOffset) {
				setIndexNum(index.port);
			}
			setIndexNum(index.port);
		}
		if (1000 < window.pageYOffset) {
			if (1500 < window.pageYOffset) {
				setIndexNum(index.web);
			}
			setIndexNum(index.web);
		}
		if (1500 < window.pageYOffset) {
			if (2000 < window.pageYOffset) {
				setIndexNum(index.b2b);
			}
			setIndexNum(index.b2b);
		}
		if (2000 < window.pageYOffset) {
			if (2500 < window.pageYOffset) {
				setIndexNum(index.se);
			}
			setIndexNum(index.se);
		}
		if (window.pageYOffset === 0) {
			setIndexNum(index.pg);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', onHandleScroll);

		return () => {
			window.removeEventListener('scroll', onHandleScroll); //clean up
		};
	}, [window.scrollY]);

	useEffect(() => {
		window.scrollTo(0, 0);
		currentPageProject();
	}, []);

	return (
		<div styleName="project">
			<Menu />

			{/* pickandgo */}
			<div styleName={`column-1 ${indexNum === index.pg ? ' active' : ''}`}>
				<p styleName="title">PROJECT01</p>
				<div styleName="contents">
					<ProjectRefo
						imageClass={'pickgo'}
						desc={
							'‘twitch’라는 플랫폼에서 진행되는 ‘League of Legends’게임 중계 방송에서 twitch extension을 사용하여 코드르 띄우는 방식입니다. 간단한 빙고게임과 실시간 게임정보를 업데이트하여 차트로 시각화하여 보여주어 시청하는 고객에게 재미를 더해주는 컨텐츠 입니다.'
						}
						cont_1={'21.03 ~ 22.08 (계속 진행)'}
						cont_2={'react, gitLab, javascript, sass, webpack ...'}
						cont_3={
							<p>
								1 ~ 3명 (시기에 따라 조정)
								<br /> 70%
							</p>
						}
						cont_4={
							<p>
								웹 개발 및 퍼블리싱 <br /> 리팩토링 후 퍼블 수정 <br /> 모바일 코드 수정 <br /> 새로운 차트 기능 추가
							</p>
						}
						cont_5={'공통 모듈 사용으로 코드 간소화, 모바일 출시 기존에 없던 새로운 차트 개발'}
						cont_6={
							<a href="https://www.youtube.com/watch?v=s4VpFxbw8M0" target="_blank" rel="noopener noreferrer">
								GIUDE YOUTUBE
							</a>
						}
					/>
				</div>
				<p styleName="sub-title">PICK & GO</p>
			</div>

			{/* POLT */}
			<div styleName={`column-2 ${indexNum === index.port ? 'active' : ''}`}>
				<p styleName="title">PROJECT02</p>
				<div styleName="contents">
					<ProjectRefo
						imageClass={'port'}
						desc={'port'}
						cont_1={'20.11 ~ 21.01'}
						cont_2={'javascript, jQuery, css, git'}
						cont_3={
							<p>
								1명
								<br />
								95%
							</p>
						}
						cont_4={<p>html과 css, script작성으로 다양한 슬라이드와 마우스 이펙트들을 직접 개발해보았습니다.</p>}
						cont_5={'javascript로 작성한 것을 jQuery로 변환 혹은 반대로 변환하며 두 언어를 습득하는 과정이였습니다.'}
						cont_6={
							<div>
								<a href="https://jangar6.github.io/dothome1/effect/sliderEffect01-javascript.html" target="_blank" rel="noopener noreferrer">
									SLIDE EFFECT SITE
								</a>
								<a href="https://jangar6.github.io/dothome1/effect/mouseEffect02-javascript.html" target="_blank" rel="noopener noreferrer">
									MOUSE EFFECT SITE
								</a>
								<a href="https://github.com/jangar6/dothome1/tree/master/effect" target="_blank" rel="noopener noreferrer">
									SLIDE & EFFECT GITHUB
								</a>
							</div>
						}
					/>
				</div>
				<p styleName="sub-title">PORTFOLIO SITE</p>
			</div>

			{/* webSite */}
			<div styleName={`column-3 ${indexNum === index.web ? 'active' : ''}`}>
				<p styleName="title">PROJECT03</p>
				<div styleName="contents">
					<ProjectRefo
						imageClass={'web'}
						desc={
							'반응형 웹이란 하나의 웹사이트에서 PC, 스마트폰, 태블릿 PC 등 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로 변하도록 만든 웹페이지 접근 기법을 말합니다. 미디어 쿼리를 사용하여 이러한 반응형 사이트를 완성하였습니다. 웹 표준은 월드 와이드 웹의 측면을 서술하고 정의하는 공식 표준이나 다른 기술 규격을 가리키는 일반적인 용어입니다. 이러한 웹 표준을 준수한 사이트를 완성한 예제 입니다.'
						}
						cont_1={'20.11.11 , 20.11.27'}
						cont_2={'javascript, css, git'}
						cont_3={
							<p>
								1명
								<br />
								100%
							</p>
						}
						cont_4={<p>웹 표준을 고려한 사이트와 반응형을 고려한 사이트로 퍼블위주로 작업하였습니다.</p>}
						cont_5={'공부한 웹 표준과 반응형을 고려하여 메가박스 사이트를 제작해보았습니다.'}
						cont_6={
							<div>
								<a href="https://jangar6.github.io/dothome1/respansive/index.html" target="_blank" rel="noopener noreferrer">
									WEB RESPONSIVE SITE
								</a>
								<a href="https://github.com/jangar6/dothome1/tree/master/respansive" target="_blank" rel="noopener noreferrer">
									WEB RESPONSIVE GITHUB
								</a>
								<a href="https://jangar6.github.io/dothome1/wabstandard/index.html" target="_blank" rel="noopener noreferrer">
									WEB STANDARD SITE
								</a>
								<a href="https://github.com/jangar6/dothome1/tree/master/wabstandard" target="_blank" rel="noopener noreferrer">
									WEB STANDARD GITHUB
								</a>
								<a href="https://github.com/jangar6/dothome1/tree/master/megabox" target="_blank" rel="noopener noreferrer">
									MEGABOX SITE
								</a>
								<a href="https://jangar6.github.io/dothome1/megabox/" target="_blank" rel="noopener noreferrer">
									MEGABOX GITHUB
								</a>
							</div>
						}
					/>
				</div>
				<p styleName="sub-title">WEB RESPONSIVE & STANDARD</p>
			</div>

			{/* b2b */}
			<div styleName={`column-4 ${indexNum === index.b2b ? 'active' : ''}`}>
				<p styleName="title">PROJECT04</p>
				<div styleName="contents">
					<ProjectRefo
						imageClass={'b2b'}
						desc={
							'유저 b2b 사이트를 제작하였습니다. 경기정보나 새로운 소식도 얻을 수 있으며 경험치를 얻어 그에 대한 보상까지 지급하는 사이트로 회사만의 거래사이트로 볼 수 있습니다.'
						}
						cont_1={'22.05 ~ 22.05'}
						cont_2={'javascript, sass, gitLab'}
						cont_3={
							<p>
								1명
								<br />
								95%
							</p>
						}
						cont_4={
							<p>
								SASS를 사용하요 퍼블 위주로 작업하였으며 라우터를 사용하여 페이지 전환을 하며 클릭하면 고정이 되는 탭메뉴나 슬라이드 등 다양한 기능을
								개발하였습니다.
							</p>
						}
						cont_5={
							'회사내에서 공통으로 사용하는 모듈을 제외한 모든 뼈대를 잡는 작업을 하였으며 다른 업무와 시기가 겹쳐 정식 출시는 되지 못하였습니다.'
						}
						cont_6={
							<div>
								<a href="https://github.com/jangar6/ac.b2b" target="_blank" rel="noopener noreferrer">
									USER B2B WEB SITE GITHUB
								</a>
							</div>
						}
					/>
				</div>
				<p styleName="sub-title">USER B2B WEB SITE</p>
			</div>

			{/* SLIDE & EFFECT */}
			<div styleName={`column-5 ${indexNum === index.se ? 'active' : ''}`}>
				<p styleName="title">PROJECT05</p>
				<div styleName="contents">
					<ProjectRefo
						imageClass={'effect'}
						desc={'다양한 슬라이드 기능과 마우스를 움직일때의 이펙트들을 정리한 사이트들 입니다.'}
						cont_1={'20.11 ~ 21.01'}
						cont_2={'javascript, jQuery, css, git'}
						cont_3={
							<p>
								1명
								<br />
								95%
							</p>
						}
						cont_4={<p>html과 css, script작성으로 다양한 슬라이드와 마우스 이펙트들을 직접 개발해보았습니다.</p>}
						cont_5={'javascript로 작성한 것을 jQuery로 변환 혹은 반대로 변환하며 두 언어를 습득하는 과정이였습니다.'}
						cont_6={
							<div>
								<a href="https://jangar6.github.io/dothome1/effect/sliderEffect01-javascript.html" target="_blank" rel="noopener noreferrer">
									SLIDE EFFECT SITE
								</a>
								<a href="https://jangar6.github.io/dothome1/effect/mouseEffect02-javascript.html" target="_blank" rel="noopener noreferrer">
									MOUSE EFFECT SITE
								</a>
								<a href="https://github.com/jangar6/dothome1/tree/master/effect" target="_blank" rel="noopener noreferrer">
									SLIDE & EFFECT GITHUB
								</a>
							</div>
						}
					/>
				</div>
				<p styleName="sub-title">SLIDE & ACT EFFECT</p>
			</div>
		</div>
	);
}

export default Project;
