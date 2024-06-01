import React, { useState } from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg'
/*import SearchIcon from '@mui/icons-material';*/
import { ImageSearch } from '@mui/icons-material';
import Select from '../../components/selectDrop/select'

const Header = () => {
  const [Categories,setCategories] = useState([
    'All Categories',
    'Milks and Dairies',
    'Wines & Drinks',
    'Clothing & beauty',
    'Fresh Seafood',
    'Pet Foods & Toy',
    'Fast food',
    'Baking material',
    'Vegetables',
    'Fresh Fruit',
    'Bread and Juice'
    
  ]);
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} alt="logo" />
            </div>
            {/* header search start*/}
            <div className="col-sm-5">

              <div className="headerSearch d-flex align-items-center">
                <Select data={Categories}/>
                <div className='search'>
                  <input type='text' placeholder='Search for text...'></input>
                  <ImageSearch className='searchicon' />
                </div>
              </div>

            </div>
            <div className='col-sm-5'>
              <Select />
            </div>
            {/* header search end*/}

          </div> {/* row end */}
        </div>
      </header>
    </>
  );
}


export default Header;