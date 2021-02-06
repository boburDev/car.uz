import './about.css'
import aboutUsImg from "../../assets/focused-male-engineer-glasses-operating-machine.png"
function About() {
  return (
    <section className="">
        <div className="container">
            <div className="about">
                <div className="about-content">
                    <h3 className="about-heading">
                        About company
                    </h3>
                    <p className="about-paragraph">
                        Packaging has always had a significant influence on customer’s decisions. The function of packaging plays an important role
                        at the POS, as well as in the whole supply chain. We are helping you with these decisions by making the perfect packaging!

                        As a packaging company, we are aware we have an important mission to satisfy not only our customers, but also their
                        customers. That has always been our number one priority. 

                        Let us help with all steps leading to both your and your customer’s
                        complete satisfaction; from idea to realization.
                    </p>
                </div>
                <div className="about-img">
                    <img src={aboutUsImg} alt="about-img"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
