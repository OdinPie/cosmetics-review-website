import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";
const Brands = ({brand}) => {
    const {brand_name, thumbnail} = brand;
    console.log(brand);
    return (
        <div><Link>
           <div className="hover:card w-96 h-96 bg-base-100 shadow-xl image-full">
            <figure><img src={thumbnail} alt={brand_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand_name}</h2>
            </div>
            </div></Link>
        </div>
    );
};

export default Brands;