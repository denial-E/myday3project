import React, { useState } from 'react';
import PropsComp from './component/PropsComp';
import StateComp from './component/StateComp';
import ArrayOperation from './component/ArrayOperation';
import ConditionalRender from './component/ConditionalRender';
import Header from './component/Header';
import Footer from './component/Footer';
import ProCard from './component/ProCard';
import Navb from './Navb';
import ProCard2 from './component/ProCard2';


const App = () => {
  // const[value, setValue]=useState(0);

  // let b=[1,2,3,4,5]
  // const[arrvalue, setArrValue]=useState(b);

  const [cartCount, setCartCount] = useState(0);
  const [state, setStatus] = useState(true)
  
 

  // }
  let data = [{
    id: 1,
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Fancy Product',
    price: '$40.00 - $80.00',
    button4: 'View options',
  },
  {
    id: 2,
    sales: 'Sale',
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'special item',
    star: '()',
    price: '$20.00 $18.00',
    button2: 'Add to Cart',
    button3: 'Remove from Cart'
  },
  {
    id: 3,
    sales: 'Sale',
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sale Item',
    price: '$50.00 $25.00',
    button2: 'Add to Cart',
    button3: 'Remove from Cart',
  },
  {
    id: 4,
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Popular Item',
    price: '$40.00',
    button2: 'Add to Cart',
    button3: 'Remove from Cart',

  }, {
    id: 5,
    sales: 'Sale',
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sale Item',
    price: '$50.00 $25.00',
    button2: 'Add to Cart',
    button3: 'Remove from Cart',
  },
  {
    id: 6,
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Fancy Product',
    price: '$120.00 - $280.00',
    button4: 'View options',
  },
  {
    id: 7,
    sales: 'Sale',
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Special Item',
    price: '$20.00 $18.00',
    button2: 'Add to Cart',
    button3: 'Remove from Cart',
  },
  {
    id: 8,
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Popular Item',
    star: 'd-flex justify-content-center small text-warning mb-2',
    starbi: 'bi-star-fill',
    price: '$40.00 ',
    button2: 'Add to Cart',
    button3: 'Remove from Cart',
  }
  ]
  
  return (
    <div>
      {/* <h1>App Component</h1> */}
      {/* <PropsComp /> */}
      {/* <h1>State Value:{value}</h1> */}
      {/* <StateComp setValue={setValue} value={value}/> */}
      {/* <ArrayOperation setArrValue={setArrValue} arrvalue={arrvalue}/> */}

      {/* <h1>cart count:{cartCount}</h1>   */}
      {/* {status? <ConditionalRender setCartCount={setCartCount} cartCount={cartCount} setProducts={setProducts} products={products} /> : ''} */}
      <Navb cartCount={cartCount}/>
      <Header />
      <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((item,index) => {
              return (
                <div key={index}>
                  
                  <ProCard item={item} setCartCount={setCartCount} cartCount={cartCount}  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
      </div>


      {/* <ProCard2 /> */}
      <Footer />
     
     


    </div>
  );
};

export default App;