import Home from './component/Home.jsx';
import Map from './component/CreateMap';
import MapClient from './component/MapClient/MapClient';

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
    },
    {
        path: '/map',
        component: MapClient,
        exact: true,
    },
];

export default routes;