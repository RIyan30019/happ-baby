import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg nav-brand ">
            <div class="container-fluid row">

               
            
            <div className="col-md-4">
                    <h1 className="text-brand">Happy Baby</h1>
            </div>
            <div className="col-md-8">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item">
                            <Link class="nav-link ms-5 active" aria-current="page" to="/home">Home</Link>
                        </li>
                       
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/user">User</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/appointment">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 " to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 " to="/admin">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 " to="#">Contact US</Link>
                        </li>
                    </ul>
                </div>
            </div>



            </div>
        </nav>
    );
};

export default Navbar;