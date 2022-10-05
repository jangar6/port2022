import React from 'react';
import './Project.image.scss';

function ProjectImage({ name }) {
	return (
		<div styleName={`image-box ${name}`}>
			<div styleName="image" />
			<div styleName="image" />
		</div>
	);
}

export default ProjectImage;
