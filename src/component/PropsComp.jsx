import React from 'react';

const PropsComp = ({a}) => {
   const handleSubmit=()=>{
    a=a+1
    console.log(a)
   }
    return (
        <div>
            <h1>Props Component</h1>
            <h1>a value:{a}</h1>
            <button onClick={handleSubmit}>click</button>
        </div>
    );
};

export default PropsComp;