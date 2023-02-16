import { Middleware } from 'redux'

const state: any = {} // Let it be our global redux state

export const loggerMiddleware: Middleware<{}, RootState /* most of the type it is typeof rootReducer */> = (store /*global store of redux*/) => (next /*next action*/) => (action) => {
	if (!action.type) {
		return next(action)
	}

	console.log('type', action.type)
	console.log('payload', action.payload)
	console.log('current state', state.getState())

	next(action)

	console.log('next state', state.getState())
}