import React from 'react';
import logo from "./assets/images/logo1.png";
import logo2 from "./assets/images/logo2.png";
import "./Home.css";
import { useCart } from './Components/CartContext';

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useCart();
  console.log(wishlistItems);

  return (
    <div>
      <head>
        <title>Wishlist Page</title>
        <link rel="stylesheet" href="Home.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <nav className="navbar background">
        <div className="logo">
          <img src={logo} style={{ height: "100px" }} alt="Logo" />
        </div>
        <ul className="nav-list">
          <li><a href="/customer">HOME</a></li>
          <li className="dropdown">
            <a href="/customerWomen">WOMEN</a>
            <div className="dropdown-content">
              <a href="#kurtasandsuits">Kurtas and Suits</a>
              <a href="#kurtisandtunics">Kurtis and Tunics</a>
              <a href="#sarees">Sarees</a>
              <a href="#westernwear">Western Wear</a>
              <a href="#palazzos">Palazzos</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/customerKid">KID</a>
            <div className="dropdown-content">
              <a href="#boysclothing">Boys clothing</a>
              <a href="#girlsclothing">Girls clothing</a>
            </div>
          </li>
        </ul>
        <div className="rightnav">
          <ul className="nav-list2">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/wishlist">Wishlist</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
      </nav>

      <section className="firstsection" style={{ height: "450px" }}>
        <div className="item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '30px' }}>
          <img src={logo2} style={{ border: '10px solid white', borderRadius: '50px' }} alt="" />
        </div>
      </section>
      <div className="container">
        <div className="row">

          {wishlistItems.map(item => (
            <div key={item._id} className="col-md-3">
              <div className="dress-card">
                <div className="dress-card-head">
                  <img
                    className="dress-card-img-top"
                    src={`http://localhost:3001/${item.image}`}
                    alt={item.DressName}
                    onError={(e) => { e.target.src = placeholderImage; }}
                  />
                  <div className="surprise-bubble">
                    <span className="dress-card-heart">
                      <i className="fa fa-heart"></i>
                    </span>
                    <a href="#">
                      <span>More</span>
                    </a>
                  </div>
                </div>
                <div className="dress-card-body">
                  <h4 className="dress-card-title">{item.DressName}</h4>
                  <p className="dress-card-para">{item.discription}</p>
                  <p className="dress-card-para">
                    <span className="dress-card-price">Rs.{item.Prize}&ensp;</span>
                    <span className="dress-card-crossed">Rs.{item.crossed}</span>
                    <span className="dress-card-off">&ensp;({item.off}% OFF)</span>
                  </p>
                  <div className="row">
                    <div className="col-md-12 text-center"> 
                      <button className="card-button bag-button" onClick={() => removeFromWishlist(item._id)}>
                        <div className="card-button-inner">Remove</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="background">
        <p className="text-footer">
          Copyright ©-All rights are reserved
        </p>
      </footer>
    </div>
  );
}

export default Wishlist;
