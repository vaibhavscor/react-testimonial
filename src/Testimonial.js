import React from 'react'
import "./testimonial.css"
export default function Testimonial() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="carousel slide" data-ride="carousel" id="quote-carousel">

                        <div class="carousel-inner text-center">

                            <div class="item active">
                                <blockquote>
                                    <div class="row">
                                        <div class="col-sm-8 col-sm-offset-2">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !</p>
                                            <small>Someone famous</small>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>

                            <div class="item">
                                <blockquote>
                                    <div class="row">
                                        <div class="col-sm-8 col-sm-offset-2">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                            <small>Someone famous</small>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>

                            <div class="item">
                                <blockquote>
                                    <div class="row">
                                        <div class="col-sm-8 col-sm-offset-2">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .</p>
                                            <small>Someone famous</small>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>

                        <ol class="carousel-indicators">
                            <li data-target="#quote-carousel" data-slide-to="0" class="active"><img class="img-responsive " src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg" alt="" />
                            </li>
                            <li data-target="#quote-carousel" data-slide-to="1"><img class="img-responsive" src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" alt="" />
                            </li>
                            <li data-target="#quote-carousel" data-slide-to="2"><img class="img-responsive" src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="" />
                            </li>
                        </ol>


                        <a data-slide="prev" href="#quote-carousel" class="left carousel-control"><i class="fa fa-chevron-left"></i></a>
                        <a data-slide="next" href="#quote-carousel" class="right carousel-control"><i class="fa fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
