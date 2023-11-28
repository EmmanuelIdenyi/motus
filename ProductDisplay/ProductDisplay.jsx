import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import Dropdown from 'react-bootstrap/Dropdown';


const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    // <div className="productdisplay">
      <div className="container col-xxl-8 mb-10">
    <div className="row flex-lg-row align-items-center g-5 py-3 mx-0">

      <div className="col-12 col-sm-12 col-lg-7">
          <div>
          <div className="productdisplay mx-lg-auto img-fluid">
          <div className="productdisplay-img pr-8">
            <img className="productdisplay-main-img" src={product.image} alt="img" />
          </div>
          <div className="productdisplay-img-list">
            <img src={product.image} alt="img" />
            <img src={product.image} alt="img" />
            <img src={product.image} alt="img" />
            <img src={product.image} alt="img" />
          </div>
          
          </div>
        </div>
      </div>
      
      <div className="col-lg-5">
          <div className="productdisplay-right">
            <div className="bg-white rounded-md py-4 px-2">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_dull_icon} alt="" />
              <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
              <div className="productdisplay-right-price-old">${product.old_price}</div>
              <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
              A lightweight, usually knitted, pullover shirt, close-fitting and with
              a round neckline and short sleeves, worn as an undershirt or outer
              garment.
            </div>
            <p className="productdisplay-right-category"><span>Category :</span> {product.category.toUpperCase()}S</p>
            <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
            <div className="productdisplay-right-size bg-black">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              Choose Size
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>S</Dropdown.Item>
                <Dropdown.Item>M</Dropdown.Item>
                <Dropdown.Item>L</Dropdown.Item>
                <Dropdown.Item>XL</Dropdown.Item>
                <Dropdown.Item>XXL</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
         
            </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          </div>
      </div>
    </div>
  </div>
      
 
  );
};

export default ProductDisplay;
