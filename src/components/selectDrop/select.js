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
                        <li onClick={()=>setisOpenSelect(false)}>Milks and Dairies</li>
                        <li onClick={()=>setisOpenSelect(false)}>Wines & Drinks</li>
                        <li onClick={()=>setisOpenSelect(false)}>Clothing & beauty</li>
                        <li onClick={()=>setisOpenSelect(false)}>Fresh Seafood</li>
                        <li onClick={()=>setisOpenSelect(false)}>Pet Foods & Toy</li>
                        <li onClick={()=>setisOpenSelect(false)}>Fast food</li>
                        <li onClick={()=>setisOpenSelect(false)}> Baking material</li>
                        <li onClick={()=>setisOpenSelect(false)}>Vegetables</li>

                        <li onClick={()=>setisOpenSelect(false)}>Fresh Fruit</li>
                        <li onClick={()=>setisOpenSelect(false)}>Bread and Juice</li>
                        <li onClick={()=>setisOpenSelect(false)}>Pet Foods & Toy</li>
                    </ul>
                </div>
            </div>
    }
        </div>
           
        )
    }

    export default Select