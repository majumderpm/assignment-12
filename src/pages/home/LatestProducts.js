import React from "react";

const LatestProducts = ({ products }) => {
  const { name, catagroy_name, img, total, id } = products;
  console.log(catagroy_name);

  return (
    <>


    <h2>Our Latest Catagory</h2>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{catagroy_name}</h2>
          <h4>{name}</h4>
          <p>{total}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
