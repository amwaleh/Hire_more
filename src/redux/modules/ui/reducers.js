import {
  PAGEVIEW,
} from 'reduxPath/actionTypes'

/* --------------------------------------------------------
 * Initial State
 */
const initialState = {
  pageview: {},
}

/* --------------------------------------------------------
 * Selectors
 */

/* --------------------------------------------------------
 * Reducers
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case PAGEVIEW:
      return { ...state, pageview: action }

    default:
      return state
  }
}
