import {
  PAGEVIEW,
} from 'reduxPath/actionTypes'

/* --------------------------------------------------------
 * Action Creators
 */
export const pageview = (router) => {
  // console.log('router', router);
  // console.log('location', location);
  return {
    type: PAGEVIEW,
    pathname: (location && location.pathname) || router.pathname,
    route: router.route,
    query: router.query,
  }
}

/* --------------------------------------------------------
 * Async Action Creators
 */
