import React from 'react'
import AddToCard from './addToCard'
const ProductCard = () => {
  return (<div>
    <div>ProductCard</div>
{/* <button onClick={() => {console.log("Ajouter au panier")}}>Ajouter au panier</button> */}
    <div className='border-2 border-white p-2 text-black bg-gray-100'>
        <AddToCard/>
    </div>
  </div>)
}

export default ProductCard