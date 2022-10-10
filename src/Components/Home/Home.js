import React from "react";
import "./home.css";

function Home() {
    return (
        <div style={{ background: "#F5F5F5" }}>
            <div className='poster'>
                <div className='poster'>
                    <img
                        style={{ width: '100%' }}
                        src={require('../../IMG/NAV1.PNG')}
                        alt="img"
                    />
                </div>
            </div>
            <div >
                <img
                    style={{ width: '100vw' }}
                    src={require('../../IMG/home.PNG')}
                    alt="img"
                />
            </div>

            <div>
                <h2 className="title"> Who we are?</h2>
                <p className="align-center p1">Nuline® was founded in 2012 with the idea of providing India with sports nutrition supplements that are specifically focused on
                    <br />   Indian customer needs and listens to their sentiments day in day out..</p>
            </div>

            <div >
                <h2 className="title"> What we deliver?</h2>
                <div >
                    <div className="home_content container" style={{ backgroundColor: "#DCDCDC" }}>
                        <div className="img_part col-4">
                            <img
                                style={{ width: "100%" }}
                                src={require('../../IMG/research.PNG')}
                                alt="img"
                            />
                        </div>
                        <div className="text_part col-8">
                            <h3 className="h3_1">High-Quality Ingredients & Processes</h3>
                            <p>Driven by the desire to exceed your expectations, we have brought togetherpharmaceutical expertise and the best experts of the chocolate flavor to create a path-breaking formulation with unmatched taste.
                                <br />This gave birth to the "Best Tasting Chocolate Whey Protein Shake",which was confirmed by the consumers themselves in a blind taste study done by Nielsen in 2015.
                                <br />  The same research orientation was also the bedrock for the formulation of Biozyme Whey, which was craft
                                The same research orientation was also the bedrock for the formulation of Biozyme Whey,which was crafted over a 2-year period and clinically tested to provide 50% higher protein absorption.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home_content container" >
                    <div className="text_part col-8">
                        <h3 className="h3_1">Research Oriented</h3>
                        <p>Our passion for bringing international-grade fitness supplements has made us look around the world to source the very best whey and flavors.
                            <br />At Nuline® quality doesn’t just end at procuring the finest raw materials.
                            <br />The manufacturing of the final products takes place at FSSAI, HACCP certified state of the art plant,
                            which means that your supplement undergoes rigorous testing and multiple quality checks before it reaches you.
                            <br />In order to give more power to your reps and sets,
                            we at Nuline® work hard to ensure international safety standards.
                            <br />Nuline® products are tested in accordance with FSSAI standards to assure you complete safety and the highest degree of quality. </p>
                    </div>
                    {/* <div className="col-1"></div> */}
                    <div className="img_part col-4">
                        <img
                            style={{ width: "80%", marginLeft: "2rem" }}
                            src={require('../../IMG/process.PNG')}
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;