import React from 'react';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import LatestProducts from './LatestProducts';
import Products from './Products';
// import Products from './Products';



const Home = () => {
    
    return (
        <>
            <div className='text-primary'>
               <Banner></Banner>
              {/* <LatestProducts></LatestProducts> */}
              <Products></Products>
              <ChooseUs></ChooseUs>
            </div>
        </>
    );
};

export default Home;