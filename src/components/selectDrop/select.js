import React, { useState } from "react";
import '../selectDrop/select.css'

const Select = ()=>
    {
        const [isOpenSelect, setisOpenSelect] = useState(false)
        const openSelect =()=>{
            setisOpenSelect(!isOpenSelect)
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
                        <li>Milks and Dairies</li>
                        <li>Wines & Drinks</li>
                        <li>Clothing & beauty</li>
                        <li>Fresh Seafood</li>
                        <li>Pet Foods & Toy</li>
                        <li>Fast food</li>
                        <li>Baking material</li>
                        <li>Vegetables</li>

                        <li>Fresh Fruit</li>
                        <li>Bread and Juice</li>
                        <li>Pet Foods & Toy</li>
                    </ul>
                </div>
            </div>
    }
        </div>
           
        )
    }

    export default Select