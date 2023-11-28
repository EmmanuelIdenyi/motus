import React, { useContext } from "react";
import "./CartItems.css";
import getStripe from '../../../lib/getStripe';
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const CartItems = () => {
  const {products} = useContext(ShopContext);
  const {cartItems,removeFromCart,getTotalCartAmount, getTotalCartItems} = useContext(ShopContext);
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1OHHYe4JHEeySGY2fR19lMza",
          quantity: getTotalCartItems(),
        },
      ],
      mode: 'payment',
      successUrl: `https://localhost:4000/`,
      cancelUrl: `https://localhost:4000/`,
    });
    console.warn(error.message);
  }
  return (<>
    {(getTotalCartItems() > 0) &&  <div className="row flex-lg-row align-items-start g-5 py-3 mx-0"> <div className="cartitems px-10 py-20 col-8  col-lg-9 mr-3">
      <h1 className="text-5xl font-bold pb-3" >Your Cart</h1>
      <hr/>
      <div className="cartitems-format-main w-[100%]">
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr />
      {products.map((e, index)=>{

        if(cartItems[e.id]>0)
        {
          return  <div key={index}>
                    <div className="cartitems-format w-[100%]">
                      <div className="flex gap-10">
                      <img className="cartitems-product-icon" src={e.image} alt="" />
                      <p cartitems-product-title>{e.name}</p>
                      </div>
                      <p>${e.new_price}</p>
                      <button className="cartitems-quatity"> {cartItems[e.id]}</button>
                      <p>${e.new_price*cartItems[e.id]}</p>
                      <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
                    </div>
                     <hr />
                  </div>;
        }
        return null;
      })}
      
    </div>
    <div className="col-lg-2 col-3 bg-stone-400 pl-5 py-3">
      
    <div className="cartitems-down">
        <div className="cartitems-total">
          <h1 className="text-xl font-bold">Summary({getTotalCartItems()} item)</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <button className="cartitems-quatity">${getTotalCartAmount()}</button>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <button className="cartitems-quatity text-2xl">${getTotalCartAmount()}</button>
            </div>
          </div>
          <button className="checkout" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
    </div>}
    {!(getTotalCartItems() > 0) && <div className="row flex-lg-row align-items-start g-5 py-3 mx-0"> <div className="cartitems px-10 py-20 col-8  col-lg-9 mr-3">
      <h1 className="text-5xl font-bold pb-3" >Your Cart Is Empty</h1></div></div>}
    </>
  );
};

export default CartItems;
