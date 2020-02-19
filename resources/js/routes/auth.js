import React from 'react';
const Film = React.lazy(() => import('./../Pages/Film'));
const route = [
    { path: '/', exact: true, name: 'Film', component: Film },
    { path: '/films/:id(\\d+)',  name: 'Single', component: Single },
  
];

export default route;