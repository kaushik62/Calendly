import React, { useState } from "react";
import { MentorsData } from "./Data/MentorsData";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faComments, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const domains = ["All", "Software", "Hardware", "Design"];
const companies = ["All", "Google", "Microsoft", "Amazon", "Meta"];


const Mentors = () => {
  const cardData = (MentorsData);
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");

  const handleDomainChange = (domain) => {
    setSelectedDomain(domain);
  };

  const handleCompanyChange = (company) => {
    setSelectedCompany(company);
  };

  const filteredCards = cardData.filter((card) => {
    return (
      (selectedDomain === "All" || card.domain === selectedDomain) &&
      (selectedCompany === "All" || card.company === selectedCompany)
    );
  });

  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <div className="filterSection"
        style={{
          width: "20%",
          padding: "20px",
          position: "fixed",
          left: "5%",
          top: "9%",
          height: "90vh",
          overflowY: "auto",
          background: "white",
          borderRight: "1px solid #ddd",
          scrollbarColor: "blue"
        }}
      >
        <h5 style={{ marginTop: "20%" }}>Filter by Domain</h5>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {domains.map((domain) => (
            <li key={domain}>
              <button
                onClick={() => handleDomainChange(domain)}
                style={{
                  backgroundColor:
                    selectedDomain === domain ? "#007bff" : "#f8f9fa",
                  color: selectedDomain === domain ? "white" : "black",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  marginBottom: "10px",
                  width: "90%",
                  textAlign: "left",
                  borderRadius: "5px"
                }}
              >
                {domain}
              </button>
            </li>
          ))}
        </ul>

        <h5 style={{ marginTop: "20%" }}>Filter by Company</h5>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {companies.map((company) => (
            <li key={company}>
              <button
                onClick={() => handleCompanyChange(company)}
                style={{
                  backgroundColor:
                    selectedCompany === company ? "#007bff" : "#f8f9fa",
                  color: selectedCompany === company ? "white" : "black",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  marginBottom: "10px",
                  width: "90%",
                  textAlign: "left",
                  borderRadius: "5px"
                }}
              >
                {company}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* cards section start from here */}
      <div
        style={{
          width: "75%",
          padding: "20px",
          marginLeft: "27%",
          marginTop: "4%",
          overflowY: "auto",
          height: "92vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {filteredCards.map((card) => (
            <div
              key={card.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
              }}
            >
              <div style={{ width: "60%", display: "flex", alignItems: "flex-start" }}>
                <img
                  src={card.photo}
                  alt={card.name}
                  style={{ width: "100px", height: "100px", borderRadius: "50%", marginRight: "20px" }}
                />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                  <h4 style={{ margin: "0", marginBottom: "10px" }}>{card.name}</h4>
                  <p style={{ margin: "0" }}>Domain: {card.domain}</p>
                  <p style={{ margin: "0" }}>Company: {card.company}</p>
                  <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                    <div style={{ width: "100%" }}>
                      <p style={{ fontSize: "17px", color: "green" }}>{card.experience}</p>
                      <p style={{ fontSize: "17px" }}>Rating : {card.rating} <span style={{ color: "orange" }}>★</span>
                        <span style={{ marginLeft: "5px" }}>Session completed : {card.session}</span>
                      </p>
                      <p style={{ color: "#0B57D0" }}>Skills : {card.skills}</p>

                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "0.5px",
                  backgroundColor: "gray",
                  margin: "0 10px",
                }}
              />
              <div style={{ width: "40%" }}>
                {/* Content for the right side of the card */}
                <h6>What this Mentor offers:</h6>
                <p><FontAwesomeIcon style={{ marginRight: "7px", color: "skyblue" }} icon={faPhone} />Audio/Video Sessions</p>
                <p><FontAwesomeIcon style={{ marginRight: "7px", color: "skyblue" }} icon={faComments} />Mock Interviews &Talk Sessions</p>
                <p><FontAwesomeIcon style={{ marginRight: "7px", color: "skyblue" }} icon={faNoteSticky} />Goal Setting & Follow Ups</p>
                <button className="book_mentor_btn" style={{ marginTop: "2.5%", borderRadius: "5px" }}>Book one Time Mentorship @{card.OneTimeMentorship}
                </button>
                <button className="book_mentor_btn" style={{ marginTop: "2.5%", borderRadius: "5px" }}>Book full Time Mentorship @{card.FullTimeMentorship}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentors;



