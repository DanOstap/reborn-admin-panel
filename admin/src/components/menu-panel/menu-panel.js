import React, { useState } from 'react';
import './menu-panel.css'
import ItemPanel from '../items-panel/item-panel';
import NewItem from '../new-item-panel/new-item-panel';
import AddUser from '../users-panel/users-panel';
const MenuPanel = () =>{
    const [Add,setAdd]= useState(false);
    const [Item,setItem] = useState(false);
    const [Users, setUsers] = useState(false);
    const handleClick = (value) =>{
        switch (value) {
            case "Add":
                Add === true?setAdd(false) : setAdd(true);
                setItem(false);
                setUsers(false);
                break;
            case "Items":
                Item === true?setItem(false):setItem(true);
                setAdd(false);
                setUsers(false);
                break;
            case "Users":
                Users === true?setUsers(false):setUsers(true);
                setAdd(false);
                setItem(false);
                break;
            default:
                break;
        }
        
    }
    return(
        <div id='Panel'>
            <button className='Panel_buttons' onClick={()=> handleClick('Add')}> Add new item</button>
            <button className='Panel_buttons' onClick={()=> handleClick('Items')}> Cheack all items</button>
            <button className='Panel_buttons' onClick={() => handleClick("Users")}>Users</button>
            {Users ? <AddUser/>: null}
            {Item ? <ItemPanel/> : null}
            {Add? <NewItem/> : null}
        </div>
    )
}
export default MenuPanel;