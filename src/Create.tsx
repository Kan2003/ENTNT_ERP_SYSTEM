import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from './UserReducer'
import { GiCancel } from "react-icons/gi";


import "../src/styles/create.scss";
import Select from 'react-select'

const options = [
  { value: 'electronics', label: 'electronics' },
  { value: 'furniture', label: 'furniture' },
  { value: 'cloth', label: 'cloth' },
  { value: 'books', label: 'books' },
  { value: 'mens', label: 'mens' },
  { value: 'woman', label: 'woman' },
  { value: 'Children', label: 'Children' },
]



const Create = () => {
  const [name , setName] =useState('')
  const [category , setCategory] =useState('')
  const [price , setPrice] =useState('')
  const [quantity , setQuantity] =useState('')
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate()



  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(addUser({ id:users[users.length - 1].id + 1 , name : name, category: category , price : price , quantity : quantity }));
    navigate("/products")
  }
  return (
    <div className='new'>
      <div className="title">
      <h2>ADD PRODUCT</h2>
      
      <Link to="/products"><GiCancel className='cross'/></Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name'  placeholder='Name'
        onChange={e => setName(e.target.value)} /><br/>
        <Select className='select' options={options} onChange={e => setCategory(e?.value)} />
        <input type="number" name='Price'  placeholder='price'
        onChange={e => setPrice(e.target.value)} /><br/>
        <input type="number" name='quantity'  placeholder='quantity'
        onChange={e => setQuantity(e.target.value)} /><br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create
