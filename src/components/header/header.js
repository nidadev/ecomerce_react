import React, { useEffect, useState } from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg'
/*import SearchIcon from '@mui/icons-material';*/
import { ImageSearch } from '@mui/icons-material';
import Select from '../../components/selectDrop/select';
import axios from 'axios';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import IconCompare from '../../assets/images/icon-compare.svg';
import IconHeart from '../../assets/images/icon-heart.svg';
import IconCart from  '../../assets/images/icon-cart.svg';
import IconUser from  '../../assets/images/icon-user.svg';
import Button from '@mui/material/Button';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Nav from './nav/nav.js';


const Header = () => {
  
  const [isopenDropDown,setisopenDropDown] = useState(false);
  const [Categories,setCategories] = useState([
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
    useEffect (() => {
      getCountry('https://countriesnow.space/api/v0.1/countries/');

  },[]);
  const countryList = [];
  const getCountry= async(url)=>{
    try{
      await axios.get(url).then((res) => {
        if(res!==null)
          {
            //console.log(res.data.data);
            res.data.data.map((item,index)=>
            {
              countryList.push(item.country);

            });
          }

      });

    }
    catch(error)
    {
      console.log(error.message);

    }

  }

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
                <Select data={Categories} placeholder={'All Categories'} icon={false}/>
                <div className='search'>
                  <input type='text' placeholder='Search for text...'></input>
                  <ImageSearch className='searchicon' />
                </div>
              </div>

            </div>
            <div className='col-sm-5 d-flex align-item-center'>
             <div className='ml-auto d-flex align-item-center'>
             <div className='countryWrapper'>
              <Select data={countryList} placeholder={'Your Location'} icon={<AddLocationIcon />}/>

              </div>
              <ClickAwayListener onClickAway={()=> {setisopenDropDown(false)}}>

              <ul className='list list-inline mb-0 headerTabs'>
              <li className='list-inline-item'><span><img src={IconCompare}></img><span className="badge bg-success rounded-circle">3</span>Compare</span></li>
              <li className='list-inline-item'><span><img src={IconHeart}></img><span className="badge bg-success rounded-circle">6</span>Wishlist</span></li>
              <li className='list-inline-item'><span><img src={IconCart}></img><span className="badge bg-success rounded-circle">4</span>Cart</span></li>
              <li className='list-inline-item'><span onClick={()=>setisopenDropDown(!isopenDropDown)}><img src={IconUser}></img>Account</span>

              {
                isopenDropDown !==false &&
                <ul className="dropdownMenu">
                <li><Button className='align-items-center' ><Person2OutlinedIcon /> My Account</Button></li>
                <li><Button><ShareLocationOutlinedIcon />Order Tracking</Button></li>
                <li><Button><ReceiptOutlinedIcon />My Voucher</Button></li>
                <li><Button><FavoriteBorderOutlinedIcon />My Wishlist</Button></li>
                <li><Button><TuneOutlinedIcon />Setting</Button></li>
                <li><Button><ExitToAppOutlinedIcon />Sign out</Button></li>
              </ul>
              }
              
              
              </li>
            </ul>
            </ClickAwayListener>

             </div>
            </div>
            
            {/* header search end*/}

          </div> {/* row end */}
        </div>
      </header>
      <Nav />
    </>
  );
}


export default Header;