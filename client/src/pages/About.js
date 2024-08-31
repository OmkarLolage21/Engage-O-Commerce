import React from 'react'
import Layout from '../components/Layout/Layout'
import logo from '../assets/logo1.png';
const About = () => {
  return (
    <Layout title={'More about Foaran'}>
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <img className="img-fluid rounded" loading="lazy" src={logo} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">About us🪴 </h2>
                  <p className="lead fs-4 text-secondary mb-3"><b>Engage Commerce</b></p>
                  <div className="row gy-4 gy-md-0 gx-xxl-5X">
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        {/* <div className="me-4 text-primary"> */}
                          <hr />
                        </div>
                        <div>

                          <h2 className="mb-3">Our Popular Products 👇</h2>
                          {/* <p className="lead text-secondary mb-3 fs-4" >Our stainless steel chopping boards, available in large, medium, small, and nano sizes, feature an ergonomic design, ensuring comfort and hygiene. These versatile boards go beyond chopping, seamlessly transitioning to baking cakes, pizzas, granola bars, and more.</p>
                          <p className="lead text-secondary mb-3 fs-4">Pair your culinary adventures with our cast-iron multipurpose pan, designed for healthy eating and even heat distribution. <b>FOARAN</b> is your go-to for elevating kitchen experiences, where innovation meets tradition.</p> */}
                          
                        {/* </div> */}
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About