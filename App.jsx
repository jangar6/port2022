import React, { useState } from 'react';
import Header from './src/component/Header';
import Main from './src/component/Main';
import Contact from './src/component/Contact';
import Intro from './src/component/mainComponent/Intro/Intro';
import AboutMe from './src/component/mainComponent/About/AboutMe';
import Skills from './src/component/mainComponent/Skills/Skills';
import Study from './src/component/mainComponent/Study/Study';
import Project from './src/component/mainComponent/Project/Project';
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
