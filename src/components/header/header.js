import React from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg'
/*import SearchIcon from '@mui/icons-material';*/
const Header = () => {
    return (
      <>
      <header>
         <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
        <img src={Logo} alt="logo"/>
                    </div>
{/* header search start*/}
            <div className="col-sm-5">

            <div className="headerSearch d-flex align-items-center">
                <div className='selecrDrop cursor'>
                    All categories
                </div>
                <div className='search'>
                    <input type='text' placeholder='Search for text...'></input>
              </div>

            </div>
            </div>
                    
{/* header search end*/}
                        </div>
                    </div>
        </header>
      </>
    );
  }


export default Header;