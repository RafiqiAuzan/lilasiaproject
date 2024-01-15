import { createRouter, createWebHistory } from 'vue-router';


import productlist from './pages/productlist.vue';
import landing from './pages/landing.vue';
import productdetails from './pages/productdetails.vue';
import addproduct from './pages/addproduct.vue';
import editproduct from './pages/editproduct.vue';
import Login from './components/Login.vue'; // Import the Login component
import Register from './components/Register.vue'; // Import the Register component


const routes = [
{
path: '/',
name: 'landing',
component: landing,
meta: { public: false } // Mark this route as private
},
{
path: '/dashboard',
name: 'productlist',
component: productlist,
meta: { admin: true } // Mark this route as private
},
{
path: '/productdetails/:id',
name: 'productdetails',
component: productdetails,
meta: { public: false } // Mark this route as private
},
{
path: '/add-product',
name: 'addproduct',
component: addproduct,
meta: { public: false } // Mark this route as private
},
{
path: '/edit-product/:id',
name: 'editproduct',
component: editproduct,
meta: { public: false } // Mark this route as private
},
{
path: '/login', // Add this route
name: 'Login',
component: Login,
meta: { public: true } // Mark this route as public
},
{
path: '/register', // Add this route
name: 'Register',
component: Register,
meta: { public: true } // Mark this route as public
}
];


const router = createRouter({
history: createWebHistory(),
routes,
});



router.beforeEach((to, from, next) => {
// Check if the user is authenticated (e.g., check if a token is stored)
const isAuthenticated = !!localStorage.getItem('token');
const isAdmin = localStorage.getItem('role') === 'admin';

if (!to.meta.public && !isAuthenticated) {
    // If the route is not public and the user is not authenticated, redirect to login
    next({ name: 'Login' });
} else if (to.meta.requiresAdmin && !isAdmin) {
    // If the route requires admin role and the user is not admin, redirect to another route or show an error
    next('/'); // Change this to the route you want to redirect to if not admin
} else {
    // Otherwise, allow navigation
    next();
}
});


export default router;