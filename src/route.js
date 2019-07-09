import Home from './component/Home.jsx';
import Map from './component/CreateMap'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/creatMap',
        component: Map,
        exact: true,
    }
];

export default routes;