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
                                <li className="list-inline-item"><Button><Link>Pages<KeyboardArrowDownIcon /></Link></Button></li>
                                <li className="list-inline-item"><Button><Link>Contact</Link></Button></li>

                            </ul>
                        </nav>

                    </div>
                    <div className="col-sm-2 d-flex align-items-center">
                        <div className="phNo d-flex align-items-center">
                        <span><HeadphonesOutlinedIcon /></span>
                        <div className="info ml-3">
                            <h4 className="text-g">1900 - 888</h4></div>
                        </div>

                    </div>
                </div>

            </div>
            </div>
    )

    }

export default Nav; 