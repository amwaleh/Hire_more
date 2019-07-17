import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import createStore from './createStore'
import { startup } from './startupRedux'
import { reducer as pageView } from './modules/ui'
export const reducers = combineReducers({
  form: formReducer,
  startup: require('./startupRedux').reducer,
  routes: pageView,
})

/**
 * Wrapper for `createStore`, dispatches `startup` action.
 *
 * TODO: Handle hot reloading here?
 *
 * @param {object} initialState The initial state
 * @param {object} options Next.js options
 */
export default (initialState, options) => {
  const store = createStore(reducers, initialState, options)

  store.dispatch(startup(options.isServer))

  return store
}
