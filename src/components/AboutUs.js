import "./AboutUsStyles.css";
import Collection from "../assets/collection.jpg"

function AboutUs() {
  return (
    <>
    <section id="about-herobanner">
      <div className="about-herobanner"></div>
      <div className="main-container">
        <div className="row-100">
          <div className="about-herobanner-content " data-aos="fade-up">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
    </section>
    <div className="about-details">
      <div className="main-container">
        <div className="row-100 about-row">
          <div className="col-50">
            <figure className="about-image">
              <img src={Collection} alt="about-img"></img>
              
            </figure>
          </div>
          <div className="col-50">
            <div className="about-content">
              <div class="about-heading">
                <h2>We Help You Planning Your Journey</h2>
              </div>
              <div className="about-desc">
                <p>
                  We offer a wide range of features and amenities that are designed to enhance the guest experience. Some common features of hotels include:Accommodations,Restaurants and dining,Meeting and event spaces,Swimming pools and spas,Room service,Wi-Fi and technology etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutUs;