import './App.css';
import React, {useState, useEffect} from "react";
import {Col, Container, Figure, Row, Table, Button, Nav, Navbar, NavDropdown, Form, FormControl} from "react-bootstrap";
import './App.css';
import companyLogo from './photos/4.png';

function PhotoApp() {
    return (
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>Photo App</h3>
                        </div>

                        <ul className="list-unstyled components">
                            <li>
                                <a>Image 1</a>
                            </li>
                            <li>
                                <a>Image 2</a>
                            </li>
                            <li>
                                <a>Image 3</a>
                            </li>
                            <li>
                                <a>Image 4</a>
                            </li>
                        </ul>
                    </nav>
                <div id="content">
                    <div style={{background:"#000", width:"100%", height: "90%"}}>
                    <img className="imageBG" Hi />
                    </div>
                </div>
            </div>

    );
}

export default PhotoApp;
