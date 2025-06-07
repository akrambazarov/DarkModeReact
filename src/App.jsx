import Layout from './assets/Pages/Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Customer, Home, NotFound, Pricing, Products, Resources } from './assets/Router/Router';
import { Suspense } from 'react';
import Preloader from './assets/components/Preloader';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/products' element={<Suspense fallback = {<div><Preloader/></div>}><Home/></Suspense>} />
          <Route path="pricing" element={<Suspense fallback = {<div><Preloader/></div>}><Pricing/></Suspense>} />
          <Route index element={<Suspense fallback = {<div><Preloader/></div>}><Products/></Suspense>} />
          <Route path="resources" element={<Suspense fallback = {<div><Preloader/></div>}><Resources/></Suspense>} />
          <Route path="customer" element={<Suspense fallback = {<div><Preloader/></div>}><Customer/></Suspense>} />
        </Route>
        <Route path="*" element={<Suspense fallback = {<div><Preloader/></div>}><NotFound/></Suspense>} />
      </Routes>
    </Router>
  );
};

export default App;