import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Home from './pages/home/Home';
import ListPage from './pages/listPage/ListPage';
import SinglePage from './pages/singlePage/SinglePage';
import ProfilePage from './pages/profilePage/ProfilePage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/list',
        element: <ListPage />,
      },
      {
        path: '/:id',
        element: <SinglePage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
