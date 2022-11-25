import React from 'react';
import useFetchApi from '../../hooks/useFetchApi';
import LatestProducts from './LatestProducts';

const Products = () => {

    const [data] = useFetchApi("product.json");
    console.log(data.length);

  

    return (
        <div>
             {/* <h2>Our Latest Catagory</h2> */}
              {data?.data?.map((products) => <LatestProducts 
              products={products}>

              </LatestProducts>)}
        </div>
    );
};

export default Products;