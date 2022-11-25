import React from 'react';
import Banner from './Banner';
import LatestProducts from './LatestProducts';
import Products from './Products';
// import Products from './Products';



const Home = () => {
    return (
        <>
            <div>
               <Banner></Banner>
              {/* <LatestProducts></LatestProducts> */}
              <Products></Products>
            </div>
        </>
    );
};

export default Home;