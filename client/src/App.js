import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';

function App() {
  const router = createBrowserRouter([]);

  return (
    <div>
      <h1>App</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
