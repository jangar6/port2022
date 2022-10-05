import React, { useEffect } from 'react';
import Menu from '../../Menu';
import usePage from '@redux/store/hooks/usePage';
import './Skills.scss';

function Skills() {
	const { currentPageSkils } = usePage();
	useEffect(() => {
		currentPageSkils();
	}, []);

	return (
		<div styleName="skills">
			<Menu />
			<div styleName="text-box">
				<div styleName="title">
					<p>SKILS</p>
				</div>
			</div>
			<div styleName="image-box">
				<div styleName="sklis-1">
					<p styleName="sklis">FrontEnd</p>
					<div styleName="skills-image" />
				</div>
				<div styleName="skills-2">
					<p styleName="sklis">Version Control</p>
					<div styleName="group">
						<div styleName="skills-image" />
						<div styleName="skills-text">
							<p>Git</p>
							<p>GitHub</p>
							<p>GitLab</p>
						</div>
					</div>
				</div>
				<div styleName="skills-3">
					<p styleName="sklis">UI/UX Control</p>
					<div styleName="group">
						<div styleName="skills-image" />
						<div styleName="skills-text">
							<p>Figma</p>
							<p>Zeplin</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
