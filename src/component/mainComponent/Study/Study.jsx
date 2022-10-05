import React, { useEffect } from 'react';
import { pageIndex } from '@redux/store/define/enum';
import usePage from '@redux/store/hooks/usePage';
import StudyAni from './Study.ani';
import Menu from '../../Menu';

import './Study.scss';

function Study() {
	const { currentPageStudy } = usePage();

	useEffect(() => {
		currentPageStudy();
	}, []);

	return (
		<div id={pageIndex.current_study} styleName="study">
			<Menu />
			<p styleName="title">STUDY</p>

			<div styleName="box">
				<div styleName="column">
					<p styleName="desc">Figma</p>
					<div styleName="image-box">
						<div styleName="image figma" />
						<div styleName="links">
							{/*
							 * HTML
							 * JAVASCRIPT
							 * JQUREY
							 * CSS
							 * SASS
							 * REACT
							 * VUE
							 * SCRIPT
							 * MYSQL
							 */}

							<a
								href="https://www.figma.com/proto/UBp3n3ma7QLuHKUIjgXjvp/HTML?page-id=0%3A1&node-id=1%3A10&viewport=323%2C49%2C0.18&scaling=contain"
								target="_blank"
								rel="noopener noreferrer">
								HTML
							</a>
							<a
								href="https://www.figma.com/proto/pMJuaVvfsTFbC7LXPYIzA2/javascript?page-id=0%3A1&node-id=1%3A604&scaling=contain"
								target="_blank"
								rel="noopener noreferrer">
								Javascript
							</a>
							<a
								href="https://www.figma.com/proto/PVRZlc2CVdZstrLmRfj5GK/jQuery?page-id=0%3A1&node-id=1%3A12&scaling=contain"
								target="_blank"
								rel="noopener noreferrer">
								jQuery
							</a>

							<a
								href="https://www.figma.com/proto/7Cr8rdo3FWT7CFD270yFEG/CSS?page-id=0%3A1&node-id=3%3A2&viewport=298%2C51%2C0.09&scaling=contain"
								target="_blank"
								rel="noopener noreferrer">
								CSS
							</a>
							<a
								href="https://www.figma.com/proto/zzJKyBDjl8JQXGFR7U7bHd/sass?page-id=0%3A1&node-id=1%3A2&scaling=contain"
								target="_blank"
								rel="noopener noreferrer">
								SASS
							</a>

							<a
								href="https://www.figma.com/proto/07W4bOpKj95hUNAnF8fBfy/react?page-id=0%3A1&node-id=129%3A243&scaling=contain"
								target="_blank"
								rel="noopener noreferrer">
								React
							</a>
							<a
								href="https://www.figma.com/proto/42zYxKnb3C0zzUagmVjwmD/vue?page-id=0%3A1&node-id=1%3A2&viewport=234%2C355%2C0.5&scaling=contain"
								target="_blank"
								rel="noopener noreferrer">
								Vue
							</a>
							<a
								href="https://www.figma.com/proto/s73d1WEGv7OnGXiySJkhV9/Script?page-id=0%3A1&node-id=1%3A3&viewport=389%2C264%2C0.6&scaling=contain"
								target="_blank"
								rel="noopener noreferrer">
								Script
							</a>
							<a
								href="https://www.figma.com/proto/qJQL3X7h6AyLc2tWfLaE9O/mysql?page-id=0%3A1&node-id=1%3A22&viewport=123%2C341%2C0.18&scaling=contain"
								target="_blank"
								rel="noopener noreferrer">
								MySQL
							</a>

							{/* WEB */}
							<a
								href="https://www.figma.com/proto/dbTCG5iz0VENlr3GOF88Xc/%EC%9B%B9%ED%91%9C%EC%A4%80%EC%82%AC%EC%9D%B4%ED%8A%B8%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8?page-id=0%3A1&node-id=26%3A38&scaling=contain"
								target="_blank"
								rel="noopener noreferrer">
								Web Standard
							</a>
							<a
								href="https://www.figma.com/proto/sF9gxICGlPHgKOOjsZLrmm/Responsive?page-id=0%3A1&node-id=1%3A3&scaling=scale-down-width"
								target="_blank"
								rel="noopener noreferrer">
								Web Responsive
							</a>
							<a
								href="https://www.figma.com/proto/u95Ct3tyIthojVtlQvvHaG/%EC%9B%B9%EC%A0%91%EA%B7%BC%EC%84%B1?page-id=0%3A1&node-id=2%3A62&scaling=contain"
								target="_blank"
								rel="noopener noreferrer">
								Web Accessibility
							</a>
						</div>
					</div>
					<p styleName="sub-desc">공부하면서 새롭게 배운 용어들이나 문법, 관련 코드등을 'Figma'를 사용하여 정리하였습니다.</p>
				</div>
				<div styleName="column">
					<p styleName="desc">GitHub</p>
					<div styleName="image-box">
						<div styleName="image git" />
						<div styleName="links">
							<a href="https://github.com/jangar6/dothome1" target="_blank" rel="noopener noreferrer">
								GitHub
							</a>
							<a href="https://jangar6.github.io/dothome1" target="_blank" rel="noopener noreferrer">
								Home
							</a>
						</div>
					</div>
					<p styleName="sub-desc">퍼블리셔를 준비할 당시 공부한 내용을 정리하고 기록하였습니다.</p>
				</div>
				<div styleName="column">
					<p styleName="desc">GitBoock</p>
					<div styleName="image-box">
						<div styleName="image gitBook" />
						<div styleName="links">
							<a href="https://jangar6621.gitbook.io/javascript/" target="_blank" rel="noopener noreferrer">
								생활코딩
							</a>
							<a href="https://jangar6621.gitbook.io/javascript-jquery/" target="_blank" rel="noopener noreferrer">
								Javascript
							</a>
							<a href="https://jangar6621.gitbook.io/jquery-1/" target="_blank" rel="noopener noreferrer">
								JQuery
							</a>
							<a href="https://jangar6621.gitbook.io/react/" target="_blank" rel="noopener noreferrer">
								React
							</a>
							<a href="https://jangar6621.gitbook.io/vue/" target="_blank" rel="noopener noreferrer">
								Vue
							</a>
						</div>
					</div>
					<p styleName="sub-desc">기초적인 문법과 다양한 공부한 내용들을 'GitBoock'을 사용하여 기록하였습니다.</p>
				</div>
				<div styleName="column">
					<p styleName="desc">Tistory</p>
					<div styleName="image-box">
						<div styleName="image tistory" />
						<div styleName="links">
							<a href="https://j3a1.tistory.com/" target="_blank" rel="noopener noreferrer">
								Tistory
							</a>
						</div>
					</div>
					<p styleName="sub-desc">입사 후 주니어 개발자들끼리 스터디한 내용들과 개발 지식을 공유했던 사이트입니다.</p>
				</div>
				<div styleName="column">
					<p styleName="desc">Codepen</p>
					<div styleName="image-box">
						<div styleName="image">
							<StudyAni />
						</div>
						<div styleName="links">
							<a href="https://codepen.io/your-work?cursor=ZD0xJm89MCZwPTEmdj00OTE3NjQ0OQ==" target="_blank" rel="noopener noreferrer">
								CodePen
							</a>
						</div>
					</div>
					<p styleName="sub-desc">처음에는 퍼블적인 기술을 기록하였으나 현재는 입사 후 필요한 기술들을 테스트하는 용도로 사용중입니다.</p>
				</div>
			</div>
		</div>
	);
}

export default Study;
