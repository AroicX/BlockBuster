import React from 'react';
const Login = React.lazy(() => import('./../Pages/Auth/Login'));
const Register = React.lazy(() => import('./../Pages/Auth/Register'));
const Films = React.lazy(() => import('../Pages/Films'));
const Create = React.lazy(() => import('../Pages/Create'));
const Single = React.lazy(() => import('./../Pages/Single'));


const route = [
    { path: '/films', exact: true, name: 'Films', component: Films },
    { path: '/films/create', exact: true, name: 'Create', component: Create },
    { path: '/films/:id(\\d+)',  name: 'Single', component: Single },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/register', exact: true, name: 'Register', component: Register },
  
];

export default route;