import axios from "axios";
import { useEffect, useState } from "react";

// const useFetchApi = (api) => {
//   const [data, setData] = useState([]);
//   console.log(data);

//   useEffect(() => {
//     const apiCall = async () => {
//       await axios.get(api)
//       .then((res) => setData(res.data))
//       .catch(error => console.error(error));
     
//     };
//     apiCall();
//   }, [api]);

//   return [data];
// };


const useFetchApi = (api) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // console.log(api);
    // let source = axios.CancelToken.source();
    const apiCall = async () => {
      const res = await axios.get(api 
      //   {
      //   cancelToken: source.token,
      // }
      );
      // console.log(res);
      setData(res.data);
    };
    apiCall();
    // return () => source.cancel();
  }, [api]);

  return [data];
};


export default useFetchApi;
