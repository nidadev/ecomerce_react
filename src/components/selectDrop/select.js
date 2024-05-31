import React, { useState } from "react";
import '../selectDrop/select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Select = ()=>
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
            
            <div className='selectDropWrapper cursor position-relative'>
            <span className="selectOpen" onClick={openSelect}> {SelectedItem}<KeyboardArrowDownIcon className="arrow"/></span>
           { 
           isOpenSelect === true &&
            <div className="selectDrop">
                <div className="SearchField">
                    <input type="text"></input>
                    <ul className="searchResults">
                    <li onClick={()=>closeSelect(0,'All Categories')} className={`${setSelectedIndex===0 ?'active':''}`}>All Categories</li>
                    <li onClick={()=>closeSelect(1,'Milks and Dairies')} className={`${setSelectedIndex===1 ?'active':''}`}>Milks and Dairies</li>
                    <li onClick={()=>closeSelect(2)} className={`${setSelectedIndex===2 ?'active':''}`}>Wines & Drinks</li>
                    <li onClick={()=>closeSelect(3)} className={`${setSelectedIndex===3 ?'active':''}`}>Clothing & beauty</li>
                    <li onClick={()=>closeSelect(4)} className={`${setSelectedIndex===4 ?'active':''}`}>Fresh Seafood</li>
                    <li onClick={()=>closeSelect(5)} className={`${setSelectedIndex===5 ?'active':''}`}>Pet Foods & Toy</li>
                    <li onClick={()=>closeSelect(6)} className={`${setSelectedIndex===6 ?'active':''}`}>Fast food</li>
                    <li onClick={()=>closeSelect(7)} className={`${setSelectedIndex===7 ?'active':''}`}> Baking material</li>
                    <li onClick={()=>closeSelect(8)} className={`${setSelectedIndex===8 ?'active':''}`}>Vegetables</li>
                    <li onClick={()=>closeSelect(9)} className={`${setSelectedIndex===9 ?'active':''}`}>Fresh Fruit</li>
                    <li onClick={()=>closeSelect(10)} className={`${setSelectedIndex===10 ?'active':''}`}>Bread and Juice</li>
                    <li onClick={()=>closeSelect(11)} className={`${setSelectedIndex===11 ?'active':''}`}>Pet Foods & Toy</li>
                    </ul>
                </div>
            </div>
    }
        </div>
           
        )
    }

    export default Select