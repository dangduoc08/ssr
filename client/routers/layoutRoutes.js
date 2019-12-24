import Home from '../containers/Home'
import NotFound from '../containers/NotFound'

export default [
  {
    path: '/',
    component: Home,
    key: 'Home',
    exact: true
  },
  {
    path: '/404',
    component: NotFound,
    key: 'NotFound'
  }
]