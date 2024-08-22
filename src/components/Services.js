import "./AboutUsStyles.css";

function Services() {
  return (
    <>
      <section id="service-herobanner">
      <div className="service-herobanner"></div>
      <div className="main-container">
        <div className="row-100">
          <div className="about-herobanner-content " data-aos="fade-up">
            <h1>Our Services</h1>
          </div>
        </div>
      </div>
      </section>

      <section id="service">
        <div class="main-container">
          <div class="row-100 " data-aos="fade-up">
            <div class="col-33">
              <div class="service-content">
                <div class="service-icon"><i class="fas fa-bed fa-2x"></i></div>
                <h3>Stay Facility</h3>
                <p>
                Hotels offer different types of accommodations, ranging from standard rooms to luxury suites.These rooms are equipped with comfortable beds, furniture, and amenities.
                </p>
              </div>
            </div>
            <div class="col-33">
              <div class="service-content">
                <div class="service-icon">
                  <i class="fas fa-plane fa-2x"></i>
                </div>
                <h3>Transport Facility</h3>
                <p>
                We offer airport transfer services to pick up guests from the airport and take them to the hotel.We provide shuttle services to transport guests to and from nearby attractions etc.
                </p>
              </div>
            </div>
            <div class="col-33">
              <div class="service-content">
                <div class="service-icon">
                  <i class="fas fa-ticket-alt fa-2x"></i>
                </div>
                <h3>Food Facility</h3>
                <p>
                We offer food services that can range from on-site restaurants to room service, providing guests with convenient and enjoyable dining experiences.
                </p>
              </div>
            </div>
            <div class="col-33">
              <div class="service-content">
                <div class="service-icon">
                  <i class="fas fa-ship fa-2x"></i>
                </div>
                <h3>Room-service Facility</h3>
                <p>
                We provide Room service facility that allows guests to order food, beverages, or other services to their room. This service is usually available 24/7 and can be accessed by calling the front desk or room service desk.
                </p>
              </div>
            </div>
            <div class="col-33">
              <div class="service-content">
                <div class="service-icon">
                  <i class="fas fa-subway fa-2x"></i>
                </div>
                <h3>Local-transport Facility</h3>
                <p>
                We offer local transport services to provide guests with a comfortable and convenient way to travel around the city or town they are visiting.
                </p>
              </div>
            </div>
            <div class="col-33">
              <div class="service-content">
                <div class="service-icon">
                  <i class="fas fa-home fa-2x"></i>
                </div>
                <h3>Hotel booking</h3>
                <p>
                Hotel booking can be done directly through Our hotel website or through third-party booking websites and by selecting the desired dates, room type, and any additional services they want.


                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
