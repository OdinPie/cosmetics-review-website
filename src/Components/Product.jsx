import { RiDeleteBin2Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
const Product = ({product}) => {
    const navigate = useNavigate();
    
    const handleDelete = id =>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://cosmetics-server.vercel.app/product/${id}`,{
                    method: 'DELETE'
                })
                .then(res=> res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                          Swal.fire(
                            'Deleted!',
                            'Product has been deleted.',
                            'success'
                          )
                          window.location.reload(false);
                    }
                })
           
            }
          })
    }
    const {brand, name, photoURL, type, price, rating, _id} = product;
    const handleDetail = id =>{
        navigate(`/product/${id}`);
    }
    return (
        <div>
            <div className=" card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between">
                        <div>
                            <p>Brand: {brand}</p>
                            <p>Rating: {rating}/10</p>
                            <p>Type: {type}</p>
                            <p>Price: ${price}</p>
                        </div>
                        <div>
                            {/* icons */}
                            <button className="btn m-2" onClick={()=>{handleDelete(_id)}}><RiDeleteBin2Line></RiDeleteBin2Line></button>
                            <Link to={`/update/${_id}`}>
                            <button className="btn"><AiOutlineEdit></AiOutlineEdit></button>
                            </Link>
                            
                            
                        </div>
                    </div>
                    
                    <div className="card-actions justify-end">
                    <button onClick={()=>handleDetail(_id)} className="btn bg-red-100">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;