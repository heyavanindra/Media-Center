import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutContainer = styled.div`
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

const AboutCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  max-width: 900px;
  width: 100%;
  padding: 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const PageHeader = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 20px 0;
  font-family: 'Didot', 'GFS Didot', 'Georgia', 'Times New Roman', serif;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const HeaderDivider = styled.div`
  height: 2px;
  width: 120px;
  background-color: #2b6da8;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 25px 0;
  font-family: 'Didot', 'GFS Didot', 'Georgia', 'Times New Roman', serif;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const ContentParagraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #333333;
  margin-bottom: 20px;
  font-family: 'Didot', 'GFS Didot', 'Georgia', 'Times New Roman', serif;
  
  strong {
    font-weight: 700;
    color: #000000;
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 18px;
  }
`;

const QuoteParagraph = styled(ContentParagraph)`
  font-style: italic;
  font-size: 17px;
  margin-bottom: 25px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Header />
      <MainContent>
        <AboutCard>
          <PageHeader>ABOUT US / TERMS OF USE / CONTACT US</PageHeader>
          <HeaderDivider />
          
          <SectionTitle>About Us</SectionTitle>
          
          <QuoteParagraph>
            "The greatest asset of <strong>Kisan Satta</strong>, founded in 2025, is trust."
          </QuoteParagraph>
          
          <ContentParagraph>
            <strong>Kisan Satta</strong>, started in 2025 as a digital-first platform, is dedicated to environment, farmers, and agriculture. From day one, it has grown steadily, earning the trust and respect of the rural community and policymakers alike.
          </ContentParagraph>
          
          <ContentParagraph>
            With an independent editorial stance and a commitment to reliable, balanced news, <strong>Kisan Satta</strong> has become a trusted voice for India's agricultural sector and environmental sustainability.
          </ContentParagraph>
          
          <ContentParagraph>
            Our network of correspondents and contributors spans across India's villages and towns, ensuring ground-level reporting that truly reflects the voice of the farmer and the challenges they face.
          </ContentParagraph>
          
          <ContentParagraph>
            <strong>Kisan Satta</strong> has a strong digital presence through its website, mobile app, and email editions, helping us reach and engage an ever-growing audience invested in agriculture and the environment.
          </ContentParagraph>
          
          <ContentParagraph>
            Our platform also curates insights on policies, market trends, sustainable farming practices, and government schemes, making it a one-stop resource for India's rural and farming communities.
          </ContentParagraph>
        </AboutCard>
      </MainContent>
      <Footer />
    </AboutContainer>
  );
};

export default AboutPage;
