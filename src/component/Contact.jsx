import React, { useState } from 'react';
import './Contact.scss';

function Contact() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div styleName={`contact-wrap ${open ? 'open' : ''}`}>
				<ul styleName="box">
					<li>
						<p>이름</p>
						<p>장아름</p>
					</li>

					<li>
						<p>이메일</p>
						<p>jangar6621@gmail.com</p>
					</li>

					<li>
						<p>연락처</p>
						<p>010-8266-0865</p>
					</li>
				</ul>

				<button type="button" styleName="contact" onClick={() => setOpen(!open)}>
					CONTACT
				</button>
			</div>

			<div styleName={`layer ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
		</>
	);
}

export default Contact;
