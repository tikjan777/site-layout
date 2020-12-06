import {useState, useEffect} from 'react';

const useCustomDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(()=>{

    const handler = setTimeout(()=>{
      setDebouncedValue(value)
    }, delay);

    return ()=>{
      clearTimeout(handler)
    };

  }, [delay, value])

  return debouncedValue;
};

export default useCustomDebounce;