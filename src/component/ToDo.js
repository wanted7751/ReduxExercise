import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';



function ToDo({text, onBtnClick}){
    console.log(onBtnClick)
    return  (
        <li>
            {text}<button onClick={onBtnClick}>DELETE</button>
        </li>
    ) 
}

const mapDispatchToProps =(dispatch,ownProps)=>{
    console.log("ownProps", ownProps)
    return {
      onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    };

}


export default connect(null, mapDispatchToProps)(ToDo)