import React from 'react';
import ProjectImage from './Project.image';
import './Project.refo.scss';

function ProjectRefo({ imageClass, desc, cont_1, cont_2, cont_3, cont_4, cont_5, cont_6 }) {
	return (
		<div styleName="projectRefo">
			<div styleName="test">
				<ProjectImage name={imageClass} />
				<div styleName="text-box">
					<p styleName="desc">{desc}</p>
					<ul>
						<li>
							<p>개발기간</p>
							<p>{cont_1}</p>
						</li>
						<li>
							<p>사용언어 및 개발환경</p>
							<p>{cont_2}</p>
						</li>
						<li>
							<p>인원구성 및 기여도</p>
							{cont_3}
						</li>
						<li>
							<p>주요 업무 및 상세 역할</p>
							{cont_4}
						</li>
						<li>
							<p>성과 및 결과</p>
							<p>{cont_5}</p>
						</li>
						<li>
							<p>참고: URL</p>
							{cont_6}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProjectRefo;
