import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageIndex } from '@redux/store/define/enum';
import usePage from '@redux/store/hooks/usePage';
import './Menu.scss';

function Menu() {
	const { current } = usePage();
	useEffect(() => {
		console.log(current);
	}, []);

	return (
		<div styleName="menu">
			<Link styleName={`nav ${current === pageIndex.current_intro ? 'active' : ''}`} to={pageIndex.current_intro} />
			<Link styleName={`nav ${current === pageIndex.current_aboutMe ? 'active' : ''}`} to={pageIndex.current_aboutMe} />
			<Link styleName={`nav ${current === pageIndex.current_skils ? 'active' : ''}`} to={pageIndex.current_skils} />
			<Link styleName={`nav ${current === pageIndex.current_study ? 'active' : ''}`} to={pageIndex.current_study} />
			<Link styleName={`nav ${current === pageIndex.current_project ? 'active' : ''}`} to={pageIndex.current_project} />
		</div>
	);
}

export default Menu;
