import React, { useState } from "react";
import '../selectDrop/select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';



const Select = ({data,placeholder,icon})=>
    {
        const [isOpenSelect, setisOpenSelect] = useState(false)
                const [SelectedIndex, setSelectedIndex] = useState(0)
                const [SelectedItem, setSelectedItem] = useState(placeholder)


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
                    {icon}
            <span className="selectOpen" onClick={openSelect}> {SelectedItem}<KeyboardArrowDownIcon className="arrow"/></span>
           { 
           isOpenSelect === true &&
            <div className="selectDrop">
                <div className="SearchField">
                    <input type="text" placeholder="Search here..."></input>
                    <ul className="searchResults">
                    <li key={0} onClick={()=>closeSelect(0,placeholder)} className={`${setSelectedIndex===0 ?'active':''}`}>{placeholder}</li>

                        {
                        data.map((item,index) => {
                            return(
                                <li key={index+1} onClick={()=>closeSelect(index+1,item)} className={`${setSelectedIndex===index+1 ?'active':''}`}>{item}</li>

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