import React, { useState } from 'react';
import {connect} from 'react-redux'
import { actionCreators } from "../store";
import ToDo from '../component/ToDo';

const Home =({toDos, addToDo})=>{
    const [text, setText] = useState("")
    const onChange = (e) =>{
        const value = e.target.value
        setText(value)
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    
    return (
      <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} type="text" value={text} />
          <button>Add</button>
        </form>
        <ul>
            {toDos.map((toDo,index)=>(
                <ToDo key={index} {...toDo}/>
            ))}
        </ul>
      </>
    ); 
}

const mapStateToProps =(state)=>{
    return {
        toDos:state
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        addToDo:(text)=>dispatch(actionCreators.addToDo(text))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);