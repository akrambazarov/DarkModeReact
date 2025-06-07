import { lazy } from "react"

export const Home = lazy(() => import('../Pages/Home/Home'));
export const Header = lazy(() => import('../Pages/Header/Header'));
export const Footer = lazy(() => import('../Pages/Footer/Footer'));
export const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));
export const Customer = lazy(() => import('../Pages/Customers/Customer'));
export const Pricing = lazy(() => import('../Pages/Pricing/Pricing'));
export const Resources = lazy(() => import('../Pages/Resources/Resources'));
export const Products = lazy(() => import('../Pages/Products/Products'));