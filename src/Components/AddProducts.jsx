import Swal from 'sweetalert2'
const AddProducts = () => {
    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const rating = (form.rating.value)/10;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const detail = form.detail.value;
        const newProduct = {name, brand, type, price, rating, photoURL, detail};
        console.log(newProduct);

        //posting newProduct

        fetch('http://localhost:5000/products',{
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged===true){
                 Swal.fire(
                'Good job!',
                'You added a product!',
                'success'
              )
            }
           
        })
        
    }
    return (
        <div className="font-poppins" >
            <div className="card flex-shrink-0 w-full max-w-5xl mx-auto shadow-2xl bg-[#DEB6AB]" style={{backgroundImage: `url('https://img.freepik.com/free-photo/view-arrangement-with-make-up-flowers_23-2148301813.jpg?w=996&t=st=1697799909~exp=1697800509~hmac=85d004cf2eb200ed4b288291cfade795ff8f1dc70c9c8e9788dca62b7f8e5c7c)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <form onSubmit={handleAddProduct} className="card-body ">
        <h2 className="text-2xl font-semibold p-2 rounded-lg" style={{backgroundColor: 'rgba(180, 105, 150, 0.5)', color : '#fff'}}>Add a Product!</h2>
        {/* <p className="font-semibold">Want to contribute to the beauty community by giving your valuable review? Well wait no further! <br /> Just fillup this easy form and you are good to go!</p> */}
        <div className="grid grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input type="text" name="brand"  placeholder="Brand Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" name="type"  placeholder="Type of Product" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price"  placeholder="Product price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="range" name="rating" className="input input-bordered accent-[#85586F]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photoURL"  placeholder="Enter photo URL" className="input input-bordered" required />
        </div>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Detail</span>
          </label>
          <textarea name="detail" className="textarea textarea-secondary" placeholder="Add a short description of the Product" required></textarea>
        </div>
        <div className="form-control mt-6">
          <button  className="btn bg-[#85586F] text-white">Add product</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default AddProducts;