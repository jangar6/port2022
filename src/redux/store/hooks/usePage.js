import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { pageIndex } from '../define/enum';
import { set_current_page } from '../modules/page.moduls';

const usePage = () => {
	const { current } = useSelector((state) => state.page);
	const dispatch = useDispatch();

	const currentPageHeader = useCallback(async () => {
		dispatch(set_current_page(pageIndex.current_header));
	}, [dispatch]);

	const currentPageMain = useCallback(async () => {
		dispatch(set_current_page(pageIndex.current_main));
	}, [dispatch]);

	const currentIntro = useCallback(async () => {
		dispatch(set_current_page(pageIndex.current_intro));
	}, [dispatch]);

	const currentPageAboutMe = useCallback(async () => {
		dispatch(set_current_page(pageIndex.current_aboutMe));
	}, [dispatch]);

	const currentPageSkils = useCallback(async () => {
		dispatch(set_current_page(pageIndex.current_skils));
	}, [dispatch]);

	const currentPageStudy = useCallback(async () => {
		dispatch(set_current_page(pageIndex.current_study));
	}, [dispatch]);

	const currentPageProject = useCallback(async () => {
		dispatch(set_current_page(pageIndex.current_project));
	}, [dispatch]);

	return {
		current,
		currentPageHeader,
		currentPageMain,
		currentIntro,
		currentPageAboutMe,
		currentPageSkils,
		currentPageStudy,
		currentPageProject,
	};
};
export default usePage;
