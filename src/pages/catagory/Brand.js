import React from 'react';
import useFetchApi from '../../hooks/useFetchApi';

const Brand = () => {


    const [data] = useFetchApi("./product.json/${id}");
    console.log(data.length);



    return (
        <div>
            
        </div>
    );
};

export default Brand;