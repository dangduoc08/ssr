import Home from '../containers/Home'
import NotFound from '../containers/NotFound'
import Brands from '../containers/Brands'
import Products from '../containers/Products'

export default [
  {
    path: '/',
    component: Home,
    key: 'Home',
    exact: true
  },
  {
    path: '/brands',
    component: Brands,
    key: 'Brands'
  },
  {
    path: '/products',
    component: Products,
    key: 'Products'
  },
  {
    path: '/404',
    component: NotFound,
    key: 'NotFound'
  }
]