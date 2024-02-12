import React from 'react'
import logo from "./assets/images/logo1.png";
import dressImage1 from "./assets/images/w1.jpg";
import dressImage2 from "./assets/images/w2.jpg";
import dressImage3 from "./assets/images/w3.jpg";
import dressImage4 from "./assets/images/w4.jpg";
import dressImage5 from "./assets/images/w5.jpg";
import dressImage6 from "./assets/images/w6.jpg";
import dressImage7 from "./assets/images/w7.jpg";
import dressImage8 from "./assets/images/w8.jpg";
import logo2 from "./assets/images/logo2.png";
import "./Home.css";

function Women() {
    return (
        <div>
            <head>
                <title>Women Page</title>
                <link rel="stylesheet" href="Home.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            </head>
            <nav className="navbar background">
                <div className="logo">
                    <img src={logo} style={{ height: "100px" }} alt="Logo" />
                </div>
                <ul className="nav-list">
                    <li><a href="/home">HOME</a></li>
                    <li className="dropdown">
                        <a href="/women">WOMEN</a>
                        <div className="dropdown-content">
                            <a href="#kurtasandsuits">Kurtas and Suits</a>
                            <a href="#kurtisandtunics">Kurtis and Tunics</a>
                            <a href="#sarees">Sarees</a>
                            <a href="#westernwear">Western Wear</a>
                            <a href="#palazzos">Palazzos</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="/kid">KID</a>
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
                    <div className="col-md-3">
                        <div className="dress-card">
                            <div className="dress-card-head">
                                <img className="dress-card-img-top" src={dressImage1} alt="" />
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
                                <h4 className="dress-card-title">Sharavi Women Tshirts</h4>
                                <p className="dress-card-para">best tshirts for girls</p>
                                <p className="dress-card-para">
                                    <span className="dress-card-price">Rs.839 &ensp;</span>
                                    <span className="dress-card-crossed">Rs.2099</span>
                                    <span className="dress-card-off">&ensp;(60% OFF)</span>
                                </p>
                                <div class="row">
                                    <div class="col-md-6 card-button">
                                        <a href="">
                                            <div class="card-button-inner bag-button">cart</div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 card-button">
                                        <a href="">
                                            <div class="card-button-inner wish-button">Whishlist</div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={dressImage2} alt="" />
                                <div class="surprise-bubble">
                                    <span class="dress-card-heart">
                                        <i class="fa fa-heart"></i>
                                    </span>
                                    <a href="#">
                                        <span>More</span>
                                    </a>
                                </div>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Sharavi Women Pant</h4>
                                <p class="dress-card-para">All kinds of pants available</p>
                                <p class="dress-card-para">
                                    <span class="dress-card-price">Rs.839 &ensp;</span>
                                    <span class="dress-card-crossed">Rs.2099</span>
                                    <span class="dress-card-off">&ensp;(60% OFF)</span>
                                </p>
                                <div class="row">
                                    <div class="col-md-6 card-button">
                                        <a href="">
                                            <div class="card-button-inner bag-button">cart</div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 card-button">
                                        <a href="">
                                            <div class="card-button-inner wish-button">Whishlist</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={dressImage3} alt="" />
                                <div class="surprise-bubble">
                                    <span class="dress-card-heart">
                                        <i class="fa fa-heart"></i>
                                    </span>
                                    <a href="#">
                                        <span>More</span>
                                    </a>
                                </div>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Sharavi One piece</h4>
                                <p class="dress-card-para">New released printed</p>
                                <p class="dress-card-para">
                                    <span class="dress-card-price">Rs.839 &ensp;</span>
                                    <span class="dress-card-crossed">Rs.2099</span>
                                    <span class="dress-card-off">&ensp;(60% OFF)</span>
                                </p>
                                <div class="row">
                                    <div class="col-md-6 card-button">
                                        <a href="">
                                            <div class="card-button-inner bag-button">cart</div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 card-button">
                                        <a href="">
                                            <div class="card-button-inner wish-button">Whishlist</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={dressImage4} alt="" />
                                <div class="surprise-bubble">
                                    <span class="dress-card-heart">
                                        <i class="fa fa-heart"></i>
                                    </span>
                                    <a href="#">
                                        <span>More</span>
                                    </a>
                                </div>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Sharavi Saree</h4>
                                <p class="dress-card-para">Silk saree</p>
                                <p class="dress-card-para">
                                    <span class="dress-card-price">Rs.839 &ensp;</span>
                                    <span class="dress-card-crossed">Rs.2099</span>
                                    <span class="dress-card-off">&ensp;(60% OFF)</span>
                                </p>
                                <div class="row">
                                    <div class="col-md-6 card-button">
                                        <a href="">
                                            <div class="card-button-inner bag-button">cart</div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 card-button">
                                        <a href="">
                                            <div class="card-button-inner wish-button">Whishlist</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="dress-card">
                            <div className="dress-card-head">
                                <img className="dress-card-img-top" src={dressImage5} alt="" />
                                <div className="surprise-bubble">
                                    <span className="dress-card-heart">
                                        <i className="fa fa-heart"></i>
                                    </span>
                                    <a href="#">
                                        <span>More</span>
                                    </a>
                                </div>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Sharavi Women kurti</h4>
                                <p class="dress-card-para">best kurti for girls</p>
                                <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span
                                    class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60%
                                        OFF)</span></p>
                                <div class="row">
                                    <div class="col-md-6 card-button"><a href="">
                                        <div class="card-button-inner bag-button">cart</div>
                                    </a></div>
                                    <div class="col-md-6 card-button"><a href="">
                                        <div class="card-button-inner wish-button">Whishlist</div>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={dressImage6} alt="" />
                                <div class="surprise-bubble">
                                    <span class="dress-card-heart">
                                        <i class="fa fa-heart"></i>
                                    </span>
                                    <a href="#">
                                        <span>More</span>
                                    </a>
                                </div>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Sharavi Salwar Suit</h4>
                                <p class="dress-card-para">All kinds of salwar available</p>
                                <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span
                                    class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60%
                                        OFF)</span></p>
                                <div class="row">
                                    <div class="col-md-6 card-button"><a href="">
                                        <div class="card-button-inner bag-button">cart</div>
                                    </a></div>
                                    <div class="col-md-6 card-button"><a href="">
                                        <div class="card-button-inner wish-button">Whishlist</div>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={dressImage7} alt="" />
                                <div class="surprise-bubble">
                                    <span class="dress-card-heart">
                                        <i class="fa fa-heart"></i>
                                    </span>
                                    <a href="#">
                                        <span>More</span>
                                    </a>
                                </div>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Sharavi Women Lehenga</h4>
                                <p class="dress-card-para">New designer lehengas</p>
                                <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span
                                    class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60%
                                        OFF)</span></p>
                                <div class="row">
                                    <div class="col-md-6 card-button"><a href="">
                                        <div class="card-button-inner bag-button">cart</div>
                                    </a></div>
                                    <div class="col-md-6 card-button"><a href="">
                                        <div class="card-button-inner wish-button">Whishlist</div>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={dressImage8} alt="" />
                                <div class="surprise-bubble">
                                    <span class="dress-card-heart">
                                        <i class="fa fa-heart"></i>
                                    </span>
                                    <a href="#">
                                        <span>More</span>
                                    </a>
                                </div>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Sharavi Women Jeans</h4>
                                <p class="dress-card-para">All kinds of Jeans available</p>
                                <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span
                                    class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60%
                                        OFF)</span></p>
                                <div class="row">
                                    <div class="col-md-6 card-button"><a href="">
                                        <div class="card-button-inner bag-button">cart</div>
                                    </a></div>
                                    <div class="col-md-6 card-button"><a href="">
                                        <div class="card-button-inner wish-button">Whishlist</div>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                    </div>


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

export default Women;
