import React from "react";
import './about.css';
import { AboutPageImage } from "../../utils";

const About = () => {
    return (
        <>
            <div className="abut-contnt">
                <div className="about-box">
                    <div className="content-abt-boxf">
                        <div className="abut-p1">
                            <img src={AboutPageImage} />
                        </div>

                        <div className="abut-p2">
                            <div className="abut-p2-contnt">
                                <div className="p2-box">
                                    <h5 className="p2-h5">"कला जीवन का उत्सव है, जो आत्मा की गहराइयों से निकलती है।"</h5>
                                    <h5 className="p2-h5"> Art is a celebration of life that emerges from the depths of the soul.</h5>

                                    <p className="p2-p">
                                        Art is a subject that reflects human emotions and thoughts. It is not just a form of creative expression but also represents social and cultural development.
                                        Visual arts, like painting and sculpture, often provoke thought and reflection. Artists express their ideas, feelings, and experiences through their work. These artworks sometimes address social issues, prompting people to think about those topics. In this way, art encourages contemplation and discussion within society.
                                        The purpose of art goes beyond creating beauty; it inspires us, challenges our thinking, and sometimes motivates us to advocate for social change. Therefore, understanding and appreciating art is essential for all of us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;