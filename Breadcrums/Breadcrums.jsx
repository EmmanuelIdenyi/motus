import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
  const {product} = props;
  return (
              <div className="container my-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb p-3 bg-body-tertiary rounded-3">
              <li className="breadcrumb-item">
                <a className="link-body-emphasis" href="#">Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="link-body-emphasis fw-semibold text-decoration-none" href="#">{product.category.toUpperCase()}</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
              {product.name}
              </li>
            </ol>
          </nav>
        </div>
  )
}

export default Breadcrums
