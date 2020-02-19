import React from 'react';
const Login = React.lazy(() => import('./../Pages/Auth/Login'));
const Films = React.lazy(() => import('./../Pages/Others/Films'));


const route = [
    { path: '/films', exact: true, name: 'Films', component: Films },
    { path: '/guest', exact: true, name: 'Login', component: Login },
  
];

export default route;