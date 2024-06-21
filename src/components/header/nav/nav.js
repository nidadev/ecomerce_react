import React from "react";
import './nav.css';
import Button from '@mui/material/Button';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';


const Nav = ()=> {
    return(
        <div className="nav d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                    <Button className="bg-success text-white catTab"><CategoryOutlinedIcon />Browse All Categories</Button>

                    </div>
                    <div className="col-sm-7">
                        <nav>
                        </nav>

                    </div>
                    <div className="col-sm-2">

                    </div>
                </div>

            </div>
            </div>
    )

    }

export default Nav; 