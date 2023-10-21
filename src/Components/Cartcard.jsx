import React from 'react';
import Swal from 'sweetalert2';
import { RiDeleteBin2Line } from "react-icons/ri";

const Cartcard = ({item}) => {
    const {name, price,photoURL,_id} = item;
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
                fetch(`https://cosmetics-server.vercel.app/cart/${id}`,{
                    method: 'DELETE'
                })
                .then(res=> res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                          Swal.fire(
                            'Deleted!',
                            'Product has been removed from cart.',
                            'success'
                          )
                          window.location.reload(false);
                    }
                })
           
            }
          })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={photoURL} alt={name}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-end">
                    <button className="btn m-2 bg-rose-100" onClick={()=>{handleDelete(_id)}}><RiDeleteBin2Line></RiDeleteBin2Line></button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Cartcard;