/**
 * Interfaces
 */
interface Post {
	author: string,
	content: string,
};

interface Action {
	type: string,
	payload: any,
};

/**
 * Action Types
 */
export const ActionTypes = {
	ADD_POST: 'posts/ADD_POST',
};

/**
 * Action Creators
 */
export function addPostAction(post: Post) {
	return {
		type: ActionTypes.ADD_POST,
		payload: post,
	};
};

/**
 * Reducer
 */
const initialState = {
	posts: [],
};

export default function reducer(state = initialState, action: Action) {
	switch (action.type) {
		case ActionTypes.ADD_POST:
			return {
				...state,
				posts: [ ...state.posts, action.payload ],
			};
		default:
			return state;
	}
};
