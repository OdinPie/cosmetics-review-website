import Marquee from "react-fast-marquee";
import LazyLoad from "react-lazy-load";
import { Link, useLoaderData } from "react-router-dom";
const Brands = ({brand}) => {
    const {brand_name, thumbnail,id} = brand;
    console.log(brand);
    return (
        <LazyLoad>
        <div className="appear">
            
            <Link to={`/brand/${id}`}>
           <div className="hover:card w-96 h-96 bg-base-100 shadow-xl image-full">
            <figure><img className="h-[312px]" src={thumbnail} alt={brand_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand_name}</h2>
            </div>
            </div></Link>
        </div></LazyLoad>
    );
};

export default Brands;