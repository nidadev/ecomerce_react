import React, { useState } from "react";
import '../selectDrop/select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';


const Select = (props)=>
    {
        const [isOpenSelect, setisOpenSelect] = useState(false)
                const [SelectedIndex, setSelectedIndex] = useState(0)
                const [SelectedItem, setSelectedItem] = useState('All Categories')


        const openSelect =()=>{
            setisOpenSelect(!isOpenSelect)
        }
        const closeSelect =(index,name)=>{
            //alert(e.target.value);
            setSelectedIndex(index);
            setisOpenSelect(false);
            setSelectedItem(name);
        }
        return(
            <ClickAwayListener onClickAway={()=> {setisOpenSelect(false)}}>
                 <div className='selectDropWrapper cursor position-relative'>
            <span className="selectOpen" onClick={openSelect}> {SelectedItem}<KeyboardArrowDownIcon className="arrow"/></span>
           { 
           isOpenSelect === true &&
            <div className="selectDrop">
                <div className="SearchField">
                    <input type="text" placeholder="Search here..."></input>
                    <ul className="searchResults">
                        {
                        props.data.map((item,index) => {
                            return(
                                <li onClick={()=>closeSelect(index,item)} className={`${setSelectedIndex===index ?'active':''}`}>{item}</li>

                            )

                        })
                    }
                        </ul>
                </div>
            </div>
    }
        </div>
            </ClickAwayListener>
           
           
        )
    }

    export default Select