import App from './App';
import UserListPage from './pages/UserListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UserListPage,
                path: '/users',
            },
            {
                ...NotFoundPage
            }
        ]
    }
];
