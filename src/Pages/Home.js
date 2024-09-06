import React, { useState } from 'react';
import { mentors } from "../Data/Homedata";
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faNoteSticky, faUserGroup, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import GoogleCalendar from '../Calender';

function Home() {
    return (
        <>
            <WelcomeSection />
            {/* Our platform is here from solve all learning problem */}
            <div className="solve_all_problem_container">
                <h2>Don't worry Mentog is right here to solve all your learning problems</h2>
                <div className="solve_all_problem_table_container">
                    <div className="table_col"><h4>Your Networking Problem</h4>
                        <p>Connect with like minded peers</p>
                        <p>Abundance of resources</p>
                        <p>Lack of Expert Advice</p>
                        <p>Limited Exposure</p>
                        <p>Frustrated because of irrelevant content on Social Media platforms</p>
                    </div>
                    <div className="table_col"><h4>How we can help?</h4>
                        <p>Connect with like-minded peers based on skills with Find Your Peer feature</p>
                        <p>Access to career Roadmaps</p>
                        <p>Get career advice from experts</p>
                        <p>Get your personalized career guidance from mentors</p>
                        <p>Find what peers are doing and collaborate</p>
                    </div>
                </div>
            </div>
            {/* Meet Our Inspirational Mentors */}
            <div className="inspirational_mentors">
                <h2 className="heading_insp">Meet Our Inspirational Mentors</h2>
                <p className="para1">Discover the Mentors who are ready to guide, inspire, and empower you. Get to know our accomplished experts and find the perfect Mentors to help you reach your goals.</p>

                <div className="cards_display">
                    {mentors.map((v, i) => {

                        return (
                            <Cards mentors={v} key={i} />
                        )
                    })}
                </div>
            </div>
            {/* // Get your personalized career guidance */}
            <div className="personalized_guidance_area" style={{ padding: "2% 15%" }}>
                <h4 style={{ textAlign: "center", fontWeight: "600", fontSize: "180%", marginBottom: "10px" }}>Get your personalized career guidances <span style={{ color: "#467BFF" }}>- Our mentorship offerings</span></h4>
                <p style={{ textAlign: "center", color: "gray" }}>Build meaningful connections and get expert advice and Insights from mentors. Book exclusive sessions with mentors to resolve your queries on a 1-1 Basis. Get access to skill-based webinars and group mentorship boot camps with industry experts</p>
                <div className="personalized_post_container">
                    <div className="personalized_post">
                        <div id="personalized_post_1" className="personalized_post_img"></div>
                        <h5>Regular Follow-Ups 📅 🤓
                        </h5>
                        <p>Engage in real-time text conversations with your ProPeer mentor to discuss challenges, seek advice, and receive timely guidance tailored to your professional journey 💬</p>
                    </div>
                    <div className="personalized_post">
                        <h5>Personalized Goal Setting 🎯 🚀</h5>
                        <p>Collaborate with your ProPeer to define and set personalized career goals. Receive guidance on creating a roadmap for professional growth, skill acquisition, and achieving milestones 🎯</p>
                        <div id="personalized_post_2" className="personalized_post_img"></div>
                    </div>
                    <div className="personalized_post">
                        <div id="personalized_post_3" className="personalized_post_img"></div>
                        <h5>Unofficial Talk Sessions 🗨️ ☕</h5>
                        <p>Enjoy informal discussions with your mentor, gaining insights into their experiences, industry knowledge, and valuable tips and fostering a more holistic learning experience. 🗨️</p>
                    </div>
                    <div className="personalized_post">
                        <h5>Audio/Video Session with ProPeer 🎤 🎥</h5>
                        <p>Elevate your mentorship experience with personalized audio or video sessions, fostering in-depth discussions on career strategies, skill development, and goal achievement. 🎤🎥</p>
                        <div id="personalized_post_4" className="personalized_post_img"></div>
                    </div>
                </div>
            </div>
            {/* FAQ */}
            <div className="FAQ_Area">
                <div><h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
                    <p style={{ textAlign: "center" }}>Get answers to common queries about our platform and mentorship opportunities.</p>
                    <img src={require("../images/footer-illustration.webp")} alt="footerimg" style={{
                        width: "80%", marginLeft: "60px"
                    }} />
                </div>
                <div><FAQ /></div>
            </div>
        </>
    )
}
export default Home;

function Cards({ mentors }) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <img src={mentors.image} alt="Profile Photo" className="profile-photo" />

                    {/* <img src={require("../images/footer-illustration.webp")} alt="footerimg" className="profile-photo"/> */}

                    <div className="profile-details">
                        <h2 className="name">{mentors.mentorsName}</h2>
                        <p className="designation">Senior Developer</p>
                        <div className="company-position">
                            <p className="company" style={{ fontWeight: "500" }}>{mentors.company}</p>
                            <p className="position">{mentors.role}</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="info-item rating">
                        <strong>Rating:</strong> <span style={{ color: "orange", fontSize: "25px" }}>★</span><span style={{ fontSize: "120%", fontWeight: "600" }}>{mentors.rating}</span>
                    </div>
                    <div className="info-item experience">
                        <strong>Experience:</strong> {mentors.experience}
                    </div>
                    <div className="info-item session">
                        <strong>Sessions:</strong> {mentors.session}
                    </div>
                </div>
            </div>
        </>
    )
}

// welcome front page
const WelcomeSection = () => {
    const navigate = useNavigate();
    return (
        <div className="container welcome_area">
            <div className="welcome-section">
                <h3 style={{ fontSize: "50px", fontWeight: "700", marginLeft: "-9%" }}>Your one stop solution for <br />
                    <span style={{ color: "#467BFF" }}>skill-based learning...</span></h3>

                <div className='welcome_para_icons'>
                    <div style={{ display: "flex" }}>
                        <div><span className='homePage_icons'><FontAwesomeIcon icon={faMedal} /></span></div>
                        <div>Connect with peers for jobs, projects and much more</div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div><span className='homePage_icons'><FontAwesomeIcon icon={faNoteSticky} /></span></div>
                        <div>Network with peers for projects, interview preparation</div>
                    </div>

                    <div style={{ display: "flex" }}>
                        <div><span className='homePage_icons'><FontAwesomeIcon icon={faUserGroup} /></span></div>
                        <div>Build connections that help you grow!</div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div><span className='homePage_icons'><FontAwesomeIcon icon={faCommentDots} /></span></div>
                        <div>Expert advice a one click away for jobs, mock interviewsExpert advice a one click away for jobs, mock interviews</div>
                    </div>
                </div>
                <button onClick={() => navigate('/mentors')} style={{ padding: "1.5% 10%", marginTop: "15%" }} className="main-button">Learn More</button>
            </div>
            <div className="gallery-section">
                <div style={{ backgroundColor: "#FFF5E5" }} className="card full-height">
                    <h5 style={{ fontWeight: "600" }}>Mentors</h5>
                    <p style={{ fontSize: "80%" }}>Connect to mentors and resolve Queries</p>
                    <div id='gallary_img_1' className='gallary_inside_photo'></div>
                </div>
                <div style={{ backgroundColor: "#E9FCF1" }} className="card half-height">
                    <h5 style={{ fontWeight: "600" }}>Community</h5>
                    <p style={{ fontSize: "80%" }}>connect with peers</p>
                    <di id='gallary_img_2' v className='gallary_inside_photo'></di>
                </div>
                <div style={{ backgroundColor: "#FFCCF7" }} className="card half-height">
                    <h5 style={{ fontWeight: "600" }}>Ask Anything</h5>
                    <p style={{ fontSize: "80%" }}>& we find you a mentor</p>
                    <div id='gallary_img_3' className='gallary_inside_photo'></div>
                </div>
                <div style={{ backgroundColor: "#E5EDFF" }} className="card half-height">
                    <h5 style={{ fontWeight: "600" }}>Problems</h5>
                    <p style={{ fontSize: "80%" }}>daily Problem Challenge</p>
                    <div id='gallary_img_5' className='gallary_inside_photo'></div>
                </div>
                <div style={{ backgroundColor: "#FFE5E6" }} className="card full-height">
                    <h5 style={{ fontWeight: "600" }}>Roadmaps</h5>
                    <p style={{ fontSize: "80%" }}>Solve skill based roadmaps</p>
                    <div id='gallary_img_4' className='gallary_inside_photo'></div>
                </div>
                <div style={{ backgroundColor: "skyblue" }} className="card half-height">
                    <h5 style={{ fontWeight: "600" }}>Feed</h5>
                    <p style={{ fontSize: "80%" }}>Skills based Posts</p>
                    <div id='gallary_img_6' className='gallary_inside_photo'></div>
                </div>
            </div>
        </div>
    );
};

// FAQ

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
        {
            question: "What is the primary goal of Platform?",
            answer: "Our platform's primary goal is to create a skill-based social network that also enables individuals to connect with experienced Mentors who can provide guidance, support, and knowledge to help them achieve their personal and professional goals."
        },
        {
            question: "How do I become a Mentor on this Platform?",
            answer: "You can apply to become a Mentor by filling out and submitting the application form on our website. Once we receive and review your application, we will contact you with the next steps."
        },
        {
            question: "How do I find the right Mentor for my needs?",
            answer: "You can search for Mentors based on their location, industry, and expertise. You can also filter your search results by price, rating, and availability. Additionally, you can also request us to find you a Mentor based on your doubt!"
        },
        {
            question: "What can I expect from a mentorship relationship?",
            answer: "You can expect to receive guidance, support, and knowledge from your Mentor. You can also expect to receive feedback on your progress and advice on how to improve."
        },
        {
            question: "Are there any fees associated with using your mentorship services?",
            answer: "To ensure that you get the best advice and also ensure that the Mentors are rewarded for thier efforts, we do charge a fee that goes directly to the Mentors. However, we offer a 7-day free refund for our users who are not satisfied with the servies received."
        }
    ];
    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <button
                        className="faq-question"
                        onClick={() => toggleAnswer(index)}
                    >
                        {faq.question}
                        <span className="arrow" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>&#9660;</span>
                    </button>
                    {activeIndex === index && (
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

