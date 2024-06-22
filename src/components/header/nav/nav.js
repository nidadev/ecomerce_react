import React from "react";
import './nav.css';
import Button from '@mui/material/Button';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';



const Nav = ()=> {
    return(
        <div className="nav d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                    <Button className="bg-success text-white catTab"><CategoryOutlinedIcon />&nbsp;Browse All Categories<KeyboardArrowDownIcon /></Button>

                    </div>
                    <div className="col-sm-7">
                        <nav>
                            <ul className="list list-inline mb-0">
                                <li className="list-inline-item"><Button><Link>Home</Link></Button></li>
                                <li className="list-inline-item"><Button><Link>About</Link></Button></li>
                                <li className="list-inline-item"><Button><Link>Shop<KeyboardArrowDownIcon /></Link></Button></li>
                                <li className="list-inline-item"><Button><Link>Vendors</Link></Button></li>
                                <li className="list-inline-item"><Button><Link>Mega menu<KeyboardArrowDownIcon /></Link></Button></li>
                                <li className="list-inline-item"><Button><Link>Blog</Link></Button></li>
                                <li className="list-inline-item"><Button><Link>Pages<KeyboardArrowDownIcon /></Link></Button>
                                <div className="dropdown_menu">
                                    <ul>
                                        <li><Button><Link to="/react/about">About Us</Link></Button></li>
                                        <li><Button><Link to="/react/about">Contact</Link></Button></li>

                                        <li><Button><Link to="/react/about">My Account</Link></Button></li>

                                        <li><Button><Link to="/react/about">Login</Link></Button></li>

                                        <li><Button><Link to="/react/about">Register</Link></Button></li>
                                        <li><Button><Link to="/react/about">Forgot password</Link></Button></li>
                                        <li><Button><Link to="/react/about">Reset password</Link></Button></li>
                                        <li><Button><Link to="/react/about">Purchase Guide</Link></Button></li>

                                    </ul>

                                </div>
                                
                                </li>
                                <li className="list-inline-item"><Button><Link>Contact</Link></Button></li>

                            </ul>
                        </nav>

                    </div>
                    <div className="col-sm-2 d-flex align-items-center part3">
                        <div className="phNo d-flex align-items-center ml-0">
                        <span><HeadphonesOutlinedIcon /></span>
                        <div className="info ml-3">
                            <h3 className="text-g mb-0">1900 - 888</h3>
                            <p className="">24/7 Support Center</p></div>
                        </div>

                    </div>
                </div>

            </div>
            </div>
    )

    }

export default Nav; 