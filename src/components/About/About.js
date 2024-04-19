import React from 'react'
import "./About.css"
import aboutimg from "../../Assets/Images/Aboutimg.png"

const About = () => {
  return (
    <div>
    <section class="about-us">
    <div class="container">
      <h2 className='heading-style'>About Us</h2>
      <p>Welcome to Lonestar Stain and Seal, your premier destination for expert fence staining services. With a passion for enhancing the beauty and longevity of your property, we specialize in transforming ordinary fences into extraordinary features that elevate curb appeal and protect your investment. Backed by years of experience and a commitment to top-tier craftsmanship, we utilize only the finest stains and sealants to ensure lasting results that withstand the test of time and weather.</p>
      {/* <img  src={ aboutimg } alt="Company Team"/> */}
    </div>
    </section>
    </div>
  )
}

export default About
