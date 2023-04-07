import Card2 from "./sub-components/Card2"
import Card from "./sub-components/Card"
import Card3 from "./sub-components/Card3"

const About= () => {
    return <section className="about" id="about">
        <div className="container">
            <div className="about-content">

                <div className="about-heading">
                    <h3>About</h3>
                    <h2>Pushing the limits of what's<br /> possible.</h2>
                </div>
                <div className="about-cards">
                    <Card3/>
                    <Card/>
                    <Card2/>
                </div>

            </div>



        </div>

    </section>
}

export default About;