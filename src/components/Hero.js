import "./HeroStyles.css";
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Top from "../assets/10.jpg"
import Bandipur from "../assets/Bandipur.webp"
import Center from "../assets/6.jpg"
import Left from "../assets/3.jpg"
import Right from "../assets/5.jpg"
import syombhu from "../assets/soyambu.jpg.jpg"
import dhulikhel from "../assets/Dhulikhel.jpg"
import Lumbini from "../assets/lumbini.jpg.jpg"
import Pokhara from "../assets/Pokhara.jpg"
import Janakpur from "../assets/Janakpur.jpg"
import temple from "../assets/temple.jpg"

function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const BookingForm = () =>{
    return(
      <div className="modal-overlay">
        <div className="modal">
        <h2>Book Now</h2>
        <form className="booknow-form">
          <input type="text" id="name" placeholder="Name"/>
          <input type="email" id="email" placeholder="Email" />
          <label htmlFor="date">Arrival Date</label>
          <input type="date" id="date" placeholder="Date" />
          <label htmlFor="date">Arrival Date</label>
          <input type="date" id="date" placeholder="Date" />

          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    )
  }

  const handleShowModal = () => {
    setShowModal(true);
  }
  return(
    <>
      {showModal && <BookingForm />}
      <section id="herobanner">
      <div className="herobanner"></div>
      <div className="main-container">
        <div className="row-100">
          <div className="herobanner-content " data-aos="fade-up">
            <h1>TRIPSTAR <span>Explore With Us</span></h1>
            <p>
            "Discover the wonders of beautiful Nepal with us. 
            From awe-inspiring landscapes to vibrant cultures and everything in between,
             let us guide you on the journey of a lifetime."
            </p>
          </div>
        </div>
      </div>
      </section>

      <section id="destination">
        <div className="main-container">
          <div className="row-100">
            <div className="destination-heading">
              <h2>popular destination</h2>
              <span></span>
              <span></span>
              <span></span>
              <p>
              There are different historical places, popular landmarks, popular wonders, meseums, reserved forests in Nepal.
               The cusine, the customs add different experience to the journey.
              </p>
            </div>
          </div>
          <div className="row-100">
            <div className="col-33">
              <div className="destination-content">
                <figure>
                  <img src={syombhu} alt="destination" />
                </figure>
                <div className="inner-text">
                  <h3>Swayambhu</h3>
                  <button className="self-btn" onClick={() => setShowModal(true)}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-33">
              <div className="destination-content">
                <figure>
                <img src={dhulikhel} alt="destination" />
                </figure>
                <div className="inner-text">
                  <h3>Namobuddha</h3>
                  <button className="self-btn" onClick={() => setShowModal(true)}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-33">
              <div className="destination-content">
                <figure>
                <img src={Janakpur} alt="destination" />
                </figure>
                <div className="inner-text">
                  <h3>Janakpur</h3>
                  <button className="self-btn" onClick={() => setShowModal(true)}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-33">
              <div className="destination-content">
                <figure>
                <img src={temple} alt="destination" />
                </figure>
                <div className="inner-text">
                  <h3>Pashupatinath</h3>
                  <button className="self-btn" onClick={() => setShowModal(true)}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-33">
              <div className="destination-content">
                <figure>
                <img src={Pokhara} alt="destination" />
                </figure>
                <div className="inner-text">
                  <h3>Pokhara</h3>
                  <button className="self-btn" onClick={() => setShowModal(true)}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-33">
              <div className="destination-content">
                <figure>
                <img src={Lumbini} alt="destination" />
                </figure>
                <div className="inner-text">
                  <h3>Lumbini</h3>
                  <button className="self-btn" onClick={() => setShowModal(true)}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="choose-us">
        <div className="main-container">
          <div className="row-100">
            <div className="choose-header">
              <h2>why choose us</h2>

              <span></span>
              <span></span>
              <span></span>
              <p>
              We serve the comfort. Your comfortness is our concern.
                We take care of your happening journey along with safety.
              </p>
            </div>
          </div>

          <div className="row-100">
            <div className="col-40">
              <div className="choose-image">
                <figure className="main-image">
                  <img src={Pokhara} alt="choose" />
                </figure>
                <figure className="thumb-1">
                <img src={dhulikhel} alt="choose" />
                </figure>
                <figure className="thumb-2">
                <img src={Janakpur} alt="choose" />
                </figure>
              </div>
            </div>
            <div className="col-60">
              <div className="choose-content">
                <div className="choose-col">
                  <div className="choose-offer">
                    <div className="choose-offer-icon">
                      <i className="fas fa-star fa-2x"></i>
                    </div>
                    <h3>Handpicked Hotels</h3>
                    <p>
                    We serve you with the best hospitality.
                    </p>
                  </div>
                </div>
                <div className="choose-col">
                  <div className="choose-offer">
                    <div className="choose-offer-icon">
                      <i className="fas fa-globe-americas fa-2x"></i>
                    </div>
                    <h3>Taxi Services</h3>
                    <p>
                    The travel is more fun if we get to start the journey according to the plan.
                      The service is avilable within the moment of booking.
                    </p>
                  </div>
                </div>
                <div className="choose-col">
                  <div className="choose-offer">
                    <div className="choose-offer-icon">
                      <i className="fas fa-thumbs-up fa-2x"></i>
                    </div>
                    <h3>Fire Camping</h3>
                    <p>
                    The experience of camping gets more enhanced in Nepal with us.
                    </p>
                  </div>
                </div>
                <div className="choose-col">
                  <div className="choose-offer">
                    <div className="choose-offer-icon">
                      <i className="fas fa-shield-alt fa-2x"></i>
                    </div>
                    <h3>Security</h3>
                    <p>
                    We value your privacy and safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
)
}

export default Hero;
