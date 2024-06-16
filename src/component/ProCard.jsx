import React, { useState } from 'react';
import './style/ProCard.css';


const ProCard = ({item,setCartCount}) => {
    const [state, setStatus] = useState(true)
    const cartAdd = () => {
        setStatus(false)
        setCartCount((val) => val + 1)
    }
    const CartRemove = () => {
        setStatus(true)
        setCartCount((val) => val - 1)
    }
return (
        <div key={item.id}>

            <div className="col mb-5">
                <div className="card h-100">
                <div className="badge bg-dark text-white">{item.sales}</div>
                    <img className="card-img-top" src={item.img} alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">{item.name}</h5>
                           <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                           {item.price}
                        </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div>
                            {state ? <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={cartAdd}>{item.button2}{item.button4}</a></div> :
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={CartRemove}>{item.button3}{item.button4}</a></div>}
                        </div>
                    </div>
                    
                </div>
            </div>







        </div>



    );
};

export default ProCard;