
import userListPage from '../components/pages/userList';
import dashboardPage from '../components/dashboardPage';
const routes = [
    {
        name : 'dashboard',
        path : '/admin/dashboard',
        component :dashboardPage,
        meta : {dataUrl : 'api/dashboard'}
    },

    {
        name : 'users',
        path : '/admin/users',
        component :userListPage,
        meta : {dataUrl : 'api/users'}
    }

];

export default routes;
