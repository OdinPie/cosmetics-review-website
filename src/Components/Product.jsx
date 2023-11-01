import { RiDeleteBin2Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LazyLoad from "react-lazy-load";
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

    const [hovered, sethovered] = useState(false);
    const onHover = () => {
        sethovered(true)
    }
    const offHover = () =>{
        sethovered(false);
    }
    return (
        <LazyLoad>
        <div className="appear">
            <div className=" card-compact w-96 bg-base-100 shadow-xl">
                <figure onMouseEnter={onHover} onMouseLeave={offHover} className="overflow-hidden relative"><img className="hover:scale-150 duration-[3000ms]" src={photoURL} alt="Shoes" />
                    {
                        hovered ? <div onClick={()=>handleDetail(_id)} className="absolute inset-0 translate-y-3/4 duration-1000 bg-[rgba(214,203,203,0.5)] text-center text-lg blur-none"><button>View Details</button></div> : <div  className="absolute   duration-1000 inset-0 top-[600px] bg-[rgba(214,203,203,0.5)] text-center text-lg blur-xl"><button>View Details</button></div>
                    }
                
                </figure>
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
                    
                    {/* <div className="card-actions justify-end">
                    <button onClick={()=>handleDetail(_id)} className="btn bg-red-100">Details</button>
                    </div> */}
                </div>
            </div>
        </div></LazyLoad>
    );
};

export default Product;