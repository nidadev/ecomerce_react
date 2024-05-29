import React, { useState } from "react";
import '../selectDrop/select.css'

const Select = ()=>
    {
        const [isOpenSelect, setisOpenSelect] = useState(false)
                const [SelectedIndex, setSelectedIndex] = useState(0)

        const openSelect =()=>{
            setisOpenSelect(!isOpenSelect)
        }
        const closeSelect =(index)=>{
            setSelectedIndex(index);
        }
        return(
            
            <div className='selectDropWrapper cursor position-relative'>
            <span className="selectOpen" onClick={openSelect}>All categories</span>
           { 
           isOpenSelect === true &&
            <div className="selectDrop">
                <div className="SearchField">
                    <input type="text"></input>
                    <ul className="searchResults">
                    <li onClick={()=>closeSelect(0)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}>All categories</li>
                        <li onClick={()=>closeSelect(1)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}>Milks and Dairies</li>
                        <li onClick={()=>closeSelect(2)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}>Wines & Drinks</li>
                        <li onClick={()=>closeSelect(3)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}>Clothing & beauty</li>
                        <li onClick={()=>closeSelect(4)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}>Fresh Seafood</li>
                        <li onClick={()=>closeSelect(5)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}>Pet Foods & Toy</li>
                        <li onClick={()=>closeSelect(6)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}>Fast food</li>
                        <li onClick={()=>closeSelect(7)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}> Baking material</li>
                        <li onClick={()=>closeSelect(8)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}>Vegetables</li>
                        <li onClick={()=>closeSelect(9)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}>Fresh Fruit</li>
                        <li onClick={()=>closeSelect(10)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}>Bread and Juice</li>
                        <li onClick={()=>closeSelect(11)} className={`${setSelectedIndex===0 ? 'active' :  ''}`}>Pet Foods & Toy</li>
                    </ul>
                </div>
            </div>
    }
        </div>
           
        )
    }

    export default Select