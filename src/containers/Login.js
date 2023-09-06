import React from 'react';
import {useDispatch, useSelector} from react-redux;



export const Login = ()=>{

    const dispatch = useDispatch()
    const data = useSelector(state =>state.reducerName.property)
    return (
        <div>Login</div>
    )
}