import React from 'react';
import {
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import PolicyIcon from '@mui/icons-material/Policy';
import StorageIcon from '@mui/icons-material/Storage';
import InfoIcon from '@mui/icons-material/Info';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const StyledPaper = styled(Paper)`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const StyledAccordion = styled(Accordion)`
  margin-bottom: 8px !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12) !important;
  
  &:before {
    display: none;
  }
  
  &.Mui-expanded {
    margin: 0 0 8px 0 !important;
  }
`;

const AccordionHeader = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ContentBox = styled(Box)`
  & p {
    margin-bottom: 1rem;
    line-height: 1.7;
  }
  
  & ul {
    padding-left: 1.2rem;
    margin-bottom: 0.5rem;
    line-height: 1.7;
  }
  
  & li {
    margin-bottom: 0.5rem;
  }
  
  & strong {
    font-weight: 600;
  }
`;

const Privacy = () => {
  return (
    <PrivacyContainer>
      <Header />
      <MainContent>
        <Container maxWidth="lg">
          <StyledPaper elevation={3}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ mb: 4, fontWeight: 600 }}
            >
              Privacy & Data Policies – Kisan Satta
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ mb: 4, lineHeight: 1.8 }}>
              Learn how we protect your data and privacy as part of our commitment to transparency and security at Kisan Satta.
            </Typography>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <LockPersonIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    The Kisan Satta Privacy Notice
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1">
                    Kisan Satta is committed to respecting your privacy. This policy outlines what data we collect, how we use it, and your rights regarding that information.
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <PolicyIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Our Company, and The Services We Provide
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1">
                    Kisan Satta provides agricultural news, environmental updates, and policy analysis to empower the farming and rural community through reliable digital media.
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <StorageIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    The Information We Collect
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1">
                    We collect data such as name, contact details, location, browsing behavior, and preferences to offer a more personalized experience.
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <StorageIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    How We Collect and Use Your Information
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1">
                    Data is collected through forms, cookies, analytics tools, and user interactions to improve content, services, and user engagement.
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <InfoIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    FAQs on Cookies We Use
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1">
                    Cookies help us remember your preferences, track usage patterns, and enhance your experience on our platform. You can control cookie settings via your browser.
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <VerifiedUserIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Managing Your Personal Data Stored with Us
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1">
                    Users have the right to access, update, or request deletion of their data stored by Kisan Satta at any time.
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <VerifiedUserIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Security of Data You Share With Us
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1">
                    We implement industry-standard security measures such as encryption, secure servers, and access controls to protect your data.
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <ChangeCircleIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Changes to This Policy
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1">
                    We may update this Privacy Policy from time to time. Any major changes will be communicated through the website.
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <ContactSupportIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Got Questions/Concerns?
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1">
                    For any privacy-related queries or data concerns, feel free to contact us at privacy@kisansatta.in.
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>
          </StyledPaper>
        </Container>
      </MainContent>
      <Footer />
    </PrivacyContainer>
  );
};

export default Privacy;
