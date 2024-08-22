import "./AboutUsStyles.css";
import Travel from "../assets/Kumari.jpg"
import Tour from "../assets/lakhey.jpg"
import Guide from "../assets/food1.jpg"

function Blogs() {
  return (
    <>
    <section id="blog-herobanner">
      <div className="blog-herobanner"></div>
      <div className="main-container">
        <div className="row-100">
          <div className="blog-herobanner-content " data-aos="fade-up">
            <h1>Blogs</h1>
          </div>
        </div>
      </div>
    </section>

    <section id="our-blog">
        <div className="main-container">
          <div className="row-100">
            <div className="col-33">
              <div className="blog-content">
                <div className="blog-date">
                  <h5>25 Nov,2021</h5>
                </div>
                <figure className="blog-image">
                  <img src={Travel} alt="blog" />
                </figure>
                <h3>Kumari</h3>
                <p>
                The Kumari of Nepal is a unique and ancient tradition in which a young girl is selected to become the living goddess of Nepal.
                </p>
              </div>
            </div>
            <div className="col-33">
              <div className="blog-content">
                <div className="blog-date">
                  <h5>29 sep,2019</h5>
                </div>
                <figure className="blog-image">
                  <img src={Tour} alt="blog" />
                </figure>
                <h3>Lakhey</h3>
                <p>
                The Lakhey dance is a traditional dance performed during the Indra Jatra festival in Nepal.The dance is named after Lakhey, a demon-like creature.
                </p>
              </div>
            </div>
            <div className="col-33">
              <div className="blog-content">
                <div className="blog-date">
                  <h5>10 Oct,2022</h5>
                </div>
                <figure className="blog-image">
                  <img src={Guide} alt="blog" />
                </figure>
                <h3>Nepali Khana</h3>
                <p>
                One of the most popular dishes in Nepali cuisine is dal bhat, which consists of lentil soup (dal), steamed rice (bhat), and various vegetable or meat curries.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>


    
  );
}

export default Blogs;
