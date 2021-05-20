import {
	combineReducers,
	createStore,
} from 'redux';

import posts from './posts';

/**
 * Combine all reducers
 */
const rootReducer = combineReducers({
	posts,
});

/**
 * Create store
 */
export default createStore(rootReducer);
