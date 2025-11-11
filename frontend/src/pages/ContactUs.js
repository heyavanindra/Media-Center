import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const ContactCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  max-width: 1280px;
  width: 100%;
  padding: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 8px;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
  margin-bottom: 24px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const FarmerIcon = styled.img`
  width: 96px;
  height: 96px;
  object-fit: contain;
  border-radius: 50%;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #000000;
  margin: 0 0 12px 0;
  font-family: 'Didot', 'GFS Didot', 'Georgia', 'Times New Roman', serif;
  
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const Description = styled.p`
  text-align: center;
  color: #374151;
  margin: 0;
  max-width: 672px;
  line-height: 1.6;
  font-size: 16px;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #000000;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  line-height: 1.5;
  
  span {
    font-size: 20px;
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const AdvertiseButton = styled.button`
  margin-top: 16px;
  padding: 10px 16px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #1f1f1f;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px;
  }
`;

const ContactUs = () => {
  return (
    <ContactContainer>
      <Header />
      <MainContent>
        <ContactCard>
          <BackLink to="/">← Back</BackLink>
          
          <HeaderSection>
            <FarmerIcon 
              src="/farmer-icon.png" 
              alt="Farmer" 
              onError={(e) => {
                // If image doesn't exist, hide it or use a placeholder
                e.target.style.display = 'none';
              }}
            />
            <Title>🌾 Kisan Satta</Title>
            <Description>
              Stay connected with India's trusted voice for farmers and the environment. 
              We welcome your queries, feedback, and advertisement proposals.
            </Description>
          </HeaderSection>
          
          <ContactGrid>
            <ContactInfo>
              <ContactItem>
                <span>📧</span>
                <span>kisansatta1@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <span>📞</span>
                <span>+91 99999 99999</span>
              </ContactItem>
              <ContactItem>
                <span>📍</span>
                <span>Lucknow, Uttar Pradesh, India</span>
              </ContactItem>
              <AdvertiseButton>📢 Advertise with Us</AdvertiseButton>
            </ContactInfo>
          </ContactGrid>
        </ContactCard>
      </MainContent>
      <Footer />
    </ContactContainer>
  );
};

export default ContactUs;
