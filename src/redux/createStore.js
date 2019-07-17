import { createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

/**
 * Creates the store with enhancers, middleware and dev tools
 *
 * @param {func} rootReducer Redux root reducer
 * @param {object} initialState The initial state
 * @param {object} options Next.js options
 */
export default (rootReducer, initialState = {}, options = {}) => {
  const enhancers = []

  const composedEnhancers = compose(composeWithDevTools(), ...enhancers)

  return createStore(rootReducer, initialState, composedEnhancers)
}
