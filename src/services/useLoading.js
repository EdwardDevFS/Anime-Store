import { useState } from 'react';

// Definir el hook personalizado
function useLoading(initValue) {
    const [isLoading, setIsloading] = useState(initValue)
    function endLoading(){
        setIsloading(false)
        document.documentElement.style.overflow = 'auto';
    }
    function initLoading(){
        setIsloading(true)
        document.documentElement.style.overflow = 'hidden';
    }

  return { isLoading, endLoading, initLoading };
}

export default useLoading;