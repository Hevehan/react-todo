import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function TaskList(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>
                    <label className="container">
                    <input type="checkbox"/>
                    </label>
                    <input type="text" id={item.key} value={item.text} onChange={(e)=>{
                        props.setUpdate(e.target.value,item.key)}}/>
                    <span>
                        <FontAwesomeIcon  className="faicons" onClick={() => {
                            props.deleteItem(item.key)
                        }} icon="trash" /> 
                    </span>
                </p>
            </div>})

    return  <div>
                {listItems}
            </div>;
}

export default TaskList;