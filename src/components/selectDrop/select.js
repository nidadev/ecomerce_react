import React, { useState } from "react";
import '../selectDrop/select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { List } from "@mui/icons-material";



const Select = ({data,placeholder,icon})=>
    {
        const [isOpenSelect, setisOpenSelect] = useState(false)
                const [SelectedIndex, setSelectedIndex] = useState(0)
                const [SelectedItem, setSelectedItem] = useState(placeholder)

                const [Listdata,setListdata] = useState(data)
                const [Listdata2,setListdata2] = useState(data)



        const openSelect =()=>{
            setisOpenSelect(!isOpenSelect)
        }
        const closeSelect =(index,name)=>{
            //alert(e.target.value);
            setSelectedIndex(index);
            setisOpenSelect(false);
            setSelectedItem(name);
        }
        const filterList=(e)=>
        {
            const keyword = e.target.value.toLowerCase();
            //console.log(keyword);
            const list = Listdata2.filter((item)=>
                {
                    return item.toLowerCase().includes(keyword);
                });
                const list2 = list.filter((item,index) => 
                    list.indexOf(item) === index);
                setListdata(list2);
                //console.log(List);

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
                    <input type="text" placeholder="Search here..." onChange={filterList}></input>
                    <ul className="searchResults">
                    <li key={0} onClick={()=>closeSelect(0,placeholder)} className={`${setSelectedIndex===0 ?'active':''}`}>{placeholder}</li>

                        {
                        Listdata.map((item,index) => {
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