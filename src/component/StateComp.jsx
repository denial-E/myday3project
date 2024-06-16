import React from 'react';

const StateComp = ({setValue, value}) => {
    const handleSumbit=()=>{
        setValue(pval=>pval+1)
    }
    return (
        <div>
            <h1>State Component</h1>
            <h1>State Value:{value}</h1>
            <button onClick={handleSumbit}>click</button>
        </div>
    );
};

export default StateComp;