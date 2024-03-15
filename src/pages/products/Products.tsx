import { useDispatch, useSelector } from "react-redux";
import "./products.scss"
import { Link } from "react-router-dom";
import { deleteUser } from "../../UserReducer";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";




const Products = () => {

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | Iterable<ReactNode> | null | undefined) => {
    dispatch(deleteUser({id : id}))
  }

  return (
    <div className='container'>
      <div className="title">
        <h2>PRODUCTS</h2>
        <Link to="/create" className='create'><FaPlus/> Create</Link>
      </div>
      
      <table className='table'>
        <thead >
            <tr>
              <th className="id">ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>price</th>
                <th>Quantity</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user: {
              quantity: ReactNode;
              stock: ReactNode;
              price: ReactNode;
              category: ReactNode; id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
} , _index: any) => ( 
                <tr>
                    <td className="id">{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.category}</td>
                    <td>{user.price}</td>
                    <td>
                        {user.quantity}
                    </td>
                    <td className="action">
                    <Link to={`/edit/${user.id}`} className="edit"><LiaEditSolid/>
</Link>
                        <MdOutlineDelete onClick={() => handleDelete(user.id)} className="delete" style={{cursor : "pointer"}}/>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products

