import React, { useState } from 'react';
import Header from '../component/Header';
import Main from '../component/Main';
import Contact from '../component/Contact';
import Intro from '../component/mainComponent/Intro/Intro';
import AboutMe from '../component/mainComponent/About/AboutMe';
import Skills from '../component/mainComponent/Skills/Skills';
import Study from '../component/mainComponent/Study/Study';
import Project from '../component/mainComponent/Project/Project';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import { pageIndex } from '@redux/store/define/enum';

import './App.scss';

function App() {
	return (
		<div styleName="home">
			<div styleName="contents">
				<BrowserRouter>
					<Routes>
						<Route path={pageIndex.current_header} element={<Header />} />
						<Route path={pageIndex.current_main} element={<Main />} />
						<Route path={pageIndex.current_intro} element={<Intro />} />
						<Route path={pageIndex.current_skils} element={<Skills />} />
						<Route path={pageIndex.current_study} element={<Study />} />
						<Route path={pageIndex.current_project} element={<Project />} />
					</Routes>
				</BrowserRouter>
				<Contact />
			</div>
		</div>
	);
}

export default App;
