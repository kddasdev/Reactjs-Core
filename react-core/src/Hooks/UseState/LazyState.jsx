import React, { useState } from 'react'


function initialState(){
    console.log('Expensive Process');
    return 0;
}

function LazyState() {
   const  [count, setCount] = useState(()=>initialState());
//directly call initialState() function into useState rerender evverytime when state changes
//proper solution is make it lazy by using arrow function
   const handleChange = (op) => {
    if(op==='+'){
        setCount(count+1);
        console.log('add-'+count);
    }else{
        setCount(count-1);
        console.log('sub-'+count);
    }
   }
  return (
    <>
        <h2>{count}</h2>
        <button onClick={()=> handleChange('+')}>Increment</button>
        <button onClick={()=> handleChange('-')}>Decrement</button>
        {/* {handleChange('+')} this will re-render indefinitely so make it return function */}
    </>
  )
}

export default LazyState