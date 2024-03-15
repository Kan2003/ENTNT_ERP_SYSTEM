import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';
import "../src/styles/create.scss";
import { GiCancel } from "react-icons/gi";
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

const Update = () => {

    const {id} = useParams();
    const users = useSelector((state)=> state.users);
    const existingUser = users.filter((f: { id: string | undefined; }) => f.id == id);
    const {name , category , price , quantity} = existingUser[0];
    const [uname , setName] =useState(name)
  const [ucategory , setCategory] =useState(category)
  const [uprice , setPrice] =useState(price)
  const [uquantity , setQuantity] =useState(quantity)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleUpdate = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      dispatch(updateUser({id: id , name : uname , category : ucategory , price : uprice , quantity : uquantity}));
      navigate("/products")
      
  }
  return (
    <div className='new'>
       <div className="title">
      <h2>UPDATE PRODUCT</h2>
      
      <Link to="/products"><GiCancel className='cross'/></Link>
      </div>
      <form onSubmit={handleUpdate}>
      <input type="text" name='name'  placeholder='Name' value={uname}
        onChange={e => setName(e.target.value)} /><br/>
        <Select className='select' options={options}  onChange={e => setCategory(e?.value)} />
        <input type="number" name='Price'  placeholder='price' value={uprice}
        onChange={e => setPrice(e.target.value)} /><br/>
        <input type="number" name='quantity'  placeholder='quantity' value={uquantity}
        onChange={e => setQuantity(e.target.value)} /><br/>
        <button>Update</button>
      </form>
    </div>
  )
}

export default Update
