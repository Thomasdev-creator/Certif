// assets/js/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './react/controllers/FixComponents/Navbar';
import Footer from './react/controllers/FixComponents/Footer';

const navbarRoot = createRoot(document.getElementById('navbar-root'));
navbarRoot.render(<Navbar />);

const footerRoot = createRoot(document.getElementById('footer-container'));
footerRoot.render(<Footer />);



import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

import { registerReactControllerComponents } from '@symfony/ux-react';
registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));