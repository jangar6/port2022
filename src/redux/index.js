import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/modules';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import pageMiddleWare from './store/middleware/page.mid';

export default function configureStore() {
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(pageMiddleWare)));
	return store;
}
