import React,{useState} from 'react'
import{useDispatch} from 'react-redux'
import { setUserData } from '../redux/actions';
const InputForm = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const dispatch=useDispatch();
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        dispatch(setUserData({name,email,phone}));
        setName('');
        setEmail('');
        setPhone('');

    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <input type="number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
      <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default InputForm
