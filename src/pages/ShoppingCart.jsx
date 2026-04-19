import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeCart, removeFromCart } from '../redux/cartSlice';
import { GoTrash } from "react-icons/go";
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const [price ,setPrice ] = useState(0);
  const [tqty, setTqty] = useState();
  const dispatch =useDispatch();
  const getdata = useSelector((state)=> state.cartReducer.carts)
  const increment =(x)=>{
    dispatch(addToCart(x))
  }
  const decrement =(x)=>{
    dispatch(removeFromCart(x))
  }
  const removeall =(x)=>{
    dispatch(removeCart(x))
  }

  const totprice =()=>{
    let tprice = 0;
    getdata.map((x)=>{
      return(
        tprice += x.quantity * x.price
      )
    });
    setPrice(tprice);
  }

  const totalqty=()=>{
    let totqty = 0;
  getdata.map((x)=>{
    return(
      totqty += x.qty 
    )
  });
  setTqty(totqty);
  }

  useEffect(()=>{
    totprice();
    totalqty();
  },[getdata])

  return (
  <Layout>
  <section className="py-24 relative bg-[#F3F4F6]">
  <div className="w-2/3 max-w-7xl px-4 md:px-5 lg-6 mx-auto">
    <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
    </h2>
    <div className="hidden lg:grid grid-cols-2 py-6">
      <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
      <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
        <span className="w-full max-w-[200px] text-center"></span>
        <span className="w-full max-w-[260px] text-center">Quantity</span>
        <span className="w-full max-w-[200px] text-center">Total</span>
      </p>
    </div>
    
    {
      getdata.map((x)=>{
        return(
          <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
      <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
        <div className="img-box"><img src={x.image} alt="perfume bottle image" className="xl:w-[140px] rounded-xl object-cover" /></div>
        <div className="pro-data w-full max-w-sm ">
          <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
          {x.title}
          </h5>
          <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">{x.category}
          </p>
          <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">${x.price}</h6>
        </div>
      </div>
      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
        <button className="font-manrope font-bold text-2xl leading-9 text-[#FF0000] w-full max-w-[176px] text-center cursor-pointer">
        <GoTrash onClick={()=>removeall(x)}  className='font-manrope font-bold text-2xl leading-9 text-[#FF0000] w-full max-w-[176px] text-center cursor-pointer'/>
        </button>

        <div className="flex items-center justify-center">

  <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">

    {/* Minus */}
    <button
      onClick={() => decrement(x)}
      className="px-4 py-3 text-2xl text-gray-700 hover:bg-gray-100 transition cursor-pointer"
    >
      -
    </button>

    {/* Quantity */}
    <div className="px-5 py-3 border-x border-gray-300 text-xl font-medium text-gray-900 cursor-default">
      {x.quantity}
    </div>

    {/* Plus */}
    <button
      onClick={() => increment(x)}
      className="px-4 py-3 text-2xl text-gray-700 hover:bg-gray-100 transition cursor-pointer"
    >
      +
    </button>

  </div>

</div>
        
        <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
          {(x.price * x.quantity).toFixed(2)}</h6>
      </div>
    </div>
        )
      })
    }
    
    <div className="bg-[#F3F4F6] rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto ">
      <div className="flex items-center justify-between w-full mb-6">
        <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
        <h6 className="font-semibold text-xl leading-8 text-gray-900">${(price).toFixed(2)}</h6>
      </div>
      <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
        <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
        <h6 className="font-semibold text-xl leading-8 text-gray-900">$50</h6>
      </div>
      <div className="flex items-center justify-between w-full py-6">
        <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
        <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">${(price + 50).toFixed(2)}</h6>
      </div>
    </div>
    <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
      <Link to='/shop' type='button' className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-100 justify-center transition-all duration-500 hover:bg-indigo-200">
        <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Continue Shopping</span>
      </Link>
      <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700 cursor-pointer">Continue
        to Payment
      </button>
    </div>
  </div>
</section>

  </Layout>                                            
  )
}

export default ShoppingCart
