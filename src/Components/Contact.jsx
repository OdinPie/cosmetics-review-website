import React from 'react';

const Contact = () => {
    return (
        <div className='flex flex-col justify-center items-center my-16'>
            <h1 className='text-center text-3xl font-extralight'>Leave a Rating !</h1>
            <div className="rating gap-1">
            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"/>
            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
            </div>
        </div>
    );
};

export default Contact;