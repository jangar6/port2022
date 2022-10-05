import React, { useEffect, useState } from 'react';
import usePage from '@redux/store/hooks/usePage';
import { pageIndex } from '@redux/store/define/enum';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
	const { currentPageHeader, current } = usePage();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(true);
		currentPageHeader();
	}, []);

	return (
		<div id="header" styleName="header">
			<div styleName="contents">
				<div styleName={`main-contents ${open ? 'open' : ''}`}>
					<h1>P O L T F L O L I O</h1>
					<p styleName="title">Web FrontEnd & Publisher</p>
					<p>웹 개발과 퍼블리싱을 같이하는</p>
					<p>차별화된 개발자입니다.</p>
					<p>개인 프로젝트로써 해당 포트폴리오를 제작하였습니다.</p>
					<Link to={pageIndex.current_intro} styleName="btn-about">
						더 알아보기
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
