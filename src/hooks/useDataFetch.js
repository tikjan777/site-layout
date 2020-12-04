import {useEffect, useState} from 'react';
import axios from 'axios';


const useDataFetch = (url="", load, initialParams={}, startData=[]) => {

  const [firstLoad, setFirstLoad] = useState(load);
  const [data, setData] = useState(startData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [dynamicParams, setDynamicParams] = useState(initialParams);

  const fetchData = async () => {

    try {
      const response = await axios.get(url, {params : dynamicParams});
      const data = await response.data;
      setData(data);
    }
    catch (e) {
      setError(e.message);
    }
    finally {
      setLoading(false);
    }

  };

  useEffect(()=>{
    if(!firstLoad){
      setFirstLoad(true);
      return
    }

    fetchData();

  }, [url, dynamicParams]);

  return {data, error, loading, setDynamicParams};

};

export default useDataFetch;