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
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import InfoIcon from '@mui/icons-material/Info';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';
import WarningIcon from '@mui/icons-material/Warning';
import GavelIcon from '@mui/icons-material/Gavel';
import PolicyIcon from '@mui/icons-material/Policy';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsContainer = styled.div`
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

const Terms = () => {
  return (
    <TermsContainer>
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
              Terms of Use - Kisan Satta
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ mb: 4, lineHeight: 1.8 }}>
              Firstly, an important message: Please read these Terms and Conditions of Use ("Terms", "Terms of Use", or "Agreement") carefully before using the Site or Service, as they affect your legal rights and obligations, including, but not limited to, waivers of rights, limitation of liability, and your indemnity to us. This agreement requires the use of arbitration on an individual basis to resolve disputes, rather than courts or jury trials, and limits the remedies available in the event of a dispute. By accessing this Site & Service you/user/visitor (Collectively referred to as Users) automatically confirm your acknowledgment & acceptance of these T&C & R&R of this agreement.
            </Typography>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Usage Rights
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1" paragraph>
                    <strong>For personal use only:</strong>
                  </Typography>
                  <ul>
                    <li>Your account and password are personal to you and may not be used by anyone else to access the Site or Service.</li>
                    <li>You will not do anything which would assist anyone who is not a registered user to gain access to any registration area of the Site or Service</li>
                    <li>You will not create registration accounts for the purpose of abusing the functionality of the site, or other users; nor will you seek to pass yourself off as another user.</li>
                  </ul>
                  <Typography variant="body1" paragraph>
                    <strong>Kisan Satta does not allow multiple users (networked or otherwise) to access the Site or Service through a single name and password and may cancel or suspend your access to the Site or Service if you do this, or breach any of these Terms without further obligation to you. Users will be permitted to login via a limited number of devices. If the limit is exceeded, the User will receive a notification requesting logout from other active devices.</strong>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Bulk and institutional subscription:</strong>
                  </Typography>
                  <ul>
                    <li>To avail bulk license or institutional license please write to us at: customersupport@kisansatta.in</li>
                  </ul>
                  <Typography variant="body1" paragraph>
                    <strong>GST invoices:</strong>
                  </Typography>
                  <ul>
                    <li>To claim GST, please reach out to us before making a payment for the subscription. Email us at kisansatta1@gmail.com and include your GST number. We may not be able to process GST-related queries post-payment.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <InfoIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Terms & Conditions [T&C] & Rules & Regulations [R&R]
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1" paragraph>
                    <strong>Kisan Satta is the sole and absolute owner of & maintains the below sites:</strong>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>and the below services(Including but not limited to):</strong>
                  </Typography>
                  <ul>
                    <li>Mobile Applications</li>
                    <li>Podcasts</li>
                    <li>Videos</li>
                    <li>Images</li>
                    <li>E-paper</li>
                    <li>Music</li>
                    <li>Games/Contests</li>
                    <li>RSS Feeds</li>
                  </ul>
                  <Typography variant="body1" paragraph>
                    <strong>These offerings are collectively referred to as the "Service" and are provided "As Is" and are under continuous development. Accessing any part of the Site or Service confirms the User's acceptance of these T&C & R&R.</strong>
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Copyright/Trademarks [Intellectual Property Rights]
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>Trademarks, logos & service marks on the Site are property of [Company Legal Name] or third parties.</li>
                    <li>Users may not use any Marks without written permission.</li>
                    <li>All content including software is protected by copyright.</li>
                    <li>Users may not copy, publish, display, modify or license content for public or commercial use.</li>
                    <li>A limited license is granted for personal use with proper credit to Kisan Satta.</li>
                    <li>Users may link to content, provided links are not misleading or offensive.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    No Warranties
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>All content is provided "as is" without warranties.</li>
                    <li>Kisan Satta does not guarantee accuracy or endorse third-party content.</li>
                    <li>Users should independently verify any content used.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Limitation Of Liability
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>Kisan Satta disclaims liability for any damages arising from use or inability to use the Site or Service.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <LockIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Privacy
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>User comments or submissions may be moderated. Inappropriate content may be removed.</li>
                    <li>Submissions must not violate intellectual property or personal privacy.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Confidentiality Of User Communications
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>Personal communications are confidential unless required by law.</li>
                    <li>Public posts (e.g., forums, comments) are not confidential.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <InfoIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Communications
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>Notices must be sent to: [Company Legal Name], [Official Address], Email: kisansatta1@gmail.com.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <PublicIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Linked Internet Sites
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>Unauthorized linking or framing is prohibited.</li>
                    <li>Kisan Satta is not responsible for third-party content linked from the Site.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <InfoIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    User Content and Conduct
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>Kisan Satta may moderate or remove illegal, abusive, or objectionable content.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Postings
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1" paragraph>
                    <strong>Kisan Satta is under no obligation to review any messages, information, or content ("Postings") posted on the Site & Service by users & assumes no responsibility or liability relating to any such Postings.</strong>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Notwithstanding the above, Kisan Satta may from time to time monitor the Postings on the Site & Service & may decline to accept and/or remove any Postings that contain:</strong>
                  </Typography>
                  <ul>
                    <li>Any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, profane, hateful, racially, ethnically, or otherwise objectionable material of any kind, including, but not limited to, any material which encourages conduct that would constitute a criminal offense, give rise to civil liability, or otherwise violate any applicable local, state, national or international law.</li>
                    <li>Advertisements or solicitations of any kind.</li>
                    <li>Messages posted by users impersonating others.</li>
                    <li>Personal information such as messages which state phone numbers, social security numbers, account numbers, addresses, or employer references.</li>
                    <li>Messages by non-spokesperson employees of Kisan Satta purporting to speak on behalf of Kisan Satta.</li>
                    <li>Messages that offer unauthorized downloads of any copyrighted or private information.</li>
                    <li>Multiple messages placed within individual folders by the same user restating the same point.</li>
                    <li>Chain letters/mails of any kind.</li>
                  </ul>
                  <Typography variant="body1" paragraph>
                    <strong>We reserve the right to revise these T&C and R&R at any time & Users are deemed to be apprised of & bound by any changes to these T&C and R&R. The latest updated T&C and R&R would be posted on the Site & Service.</strong>
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <WarningIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Violation Of T&C and R&R
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>The Kisan Satta reserves the right to seek all remedies available at law & in equity for violations of these T&C & R&R, including the right to block access from a particular Internet address to the Site & Service.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Access To Password Protected/Secure Areas
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>Access to password-protected areas is restricted. Unauthorized access may be prosecuted</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GavelIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Arbitration
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>Disputes shall be resolved through binding arbitration in [City, India], conducted in English per Indian Arbitration & Conciliation Act, 1996.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GavelIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Governing Law
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>Governed by Indian law. Only courts in [City, India] have jurisdiction.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Jurisdiction
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>In respect of all matters/disputes arising out of, in connection with or in relation to this agreement, only the civil courts at Chennai City, India shall have jurisdiction, to the exclusion of all other courts.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Publication
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>The Site & Service is deemed to be published from/at Chennai City, India (irrespective of where it is accessed from).</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Online Payments
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1" paragraph>
                    <strong>This online payment system is provided by Kisan Satta (MERCHANT). The terms and conditions shall be amended, changed and/or modified from time to time by the MERCHANT and any such changes shall be effective immediately.</strong>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>By default, all subscriptions purchased on our Site & Service are auto-recurring. For subscriptions purchased on the Site, you can disable auto-recurring on the "My Account" page. Alternatively, you may cancel the recurring mandates from your bank/payment provider. For Play Store/App Store subscriptions, cancellations/refunds must be managed through those platforms.</strong>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Online payment by users/customers is subject to the acceptance of the following terms and conditions. Using the online payment facility on our Site & Service indicates your acceptance. If you do not agree, please do not use this facility.</strong>
                  </Typography>
                  <ul>
                    <li>The products and services are described under various sections of the Site & Service. Please read carefully before proceeding with payment.</li>
                    <li>Payments must be made in advance for the selected products and services.</li>
                    <li>All prices are quoted in Indian Rupees, unless stated otherwise. The MERCHANT reserves the right to modify prices at any time.</li>
                    <li>Your payment will usually reach the MERCHANT account within two working days.</li>
                    <li>The MERCHANT is not responsible for payments failing due to incorrect account details or any user error.</li>
                    <li>If your card/net banking provider declines payment, the MERCHANT is under no obligation to inform you. Please verify with your bank that payment was successful.</li>
                    <li>In no event shall the MERCHANT be liable for any damages arising from the use, inability to use, or results of use of the Site & Service, or related websites.</li>
                    <li>Refunds, if applicable, are at the sole discretion of the MERCHANT and will be credited to the original payment method.</li>
                    <li>Nothing in this policy obligates the MERCHANT to refund fees unless previously credited to the MERCHANT account.</li>
                    <li>Users with paid digital subscriptions are eligible for a full refund only if the request is raised within the first 7 days from the subscription start or purchase date. No refunds are provided after 7 days.</li>
                    <li>Email: payments@kisansatta.in</li>
                  </ul>
                  <Typography variant="body1" paragraph>
                    <strong>All disputes related to online payments are subject to the exclusive jurisdiction of the Chennai Court only.</strong>
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <InfoIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Additional Terms of Use for Digital Subscription
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1" paragraph>
                    <strong>By accessing the Site & Service you are entering into an agreement with Kisan Satta and agree to the terms that follow (the "Terms").</strong>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Please review our Privacy Policy to learn more about how we use any information you provide about yourself.</strong>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>SUBSCRIPTION IS NOT APPLICABLE TO EUROPEAN UNION- EU USERS</strong>
                  </Typography>
                  <ul>
                    <li>Your email and password are personal and must not be shared. You must be 18+ or have guardian permission. Responsibility lies with the user/guardian.</li>
                    <li>You will not help unauthorized users gain access.</li>
                    <li>You won't create fake accounts or impersonate other users.</li>
                    <li>Kisan Satta may cancel your access if you violate terms.</li>
                    <li>You are responsible for keeping your account information accurate and confidential.</li>
                    <li>Some features may be exclusive to registered users or subscribers.</li>
                    <li>Registered Users may receive push notifications, newsletters, one-time free trials, and other benefits.</li>
                    <li>Kisan Satta may change the content/services available to Registered Users at any time.</li>
                    <li>You are solely responsible for how your credentials are used.</li>
                    <li>Notify Kisan Satta immediately if your credentials are compromised.</li>
                    <li>Provide accurate registration details and keep them updated.</li>
                    <li>Kisan Satta may monitor your activity to ensure compliance with these Terms.</li>
                    <li>Each subscription is for personal use only.</li>
                    <li>Do not share login credentials.</li>
                    <li>Subscriptions are non-transferable.</li>
                    <li>Kisan Satta prohibits multiple users sharing one account. Breach may lead to suspension.</li>
                    <li>Kisan Satta reserves the right to change the amount or type of content available to different users.</li>
                    <li>Subscription allows access to premium Kisan Satta content via supported devices.</li>
                    <li>Subscribing means you agree to these Terms & Conditions.</li>
                    <li>Subscriptions may begin with a free trial.</li>
                    <li>Eligibility for free trials is at Kisan Satta's discretion.</li>
                    <li>Free trial abuse may lead to revocation.</li>
                    <li>Device ID, payment methods, or past accounts may be used to check eligibility.</li>
                    <li>At the end of your initial period, Kisan Satta may contact you for renewal at prevailing rates.</li>
                    <li>To cancel, email: customersupport@kisansatta.in</li>
                    <li>Full refunds are applicable only if requested within 7 days of subscription start or purchase date.</li>
                    <li>No refunds after 7 days from purchase.</li>
                    <li>Subscription is governed by these Terms and any applicable promotional offers.</li>
                    <li>For legal queries, contact: customersupport@kisansatta.in</li>
                    <li>You are responsible for all applicable fees, including any bank/payment provider charges.</li>
                    <li>Subscription pricing is displayed clearly before purchase and may change.</li>
                    <li>You agree to pay applicable fees, including payment processing charges.</li>
                    <li>Eligibility for discounts is fixed at the time of subscription.</li>
                    <li>Payments from outside India must be in USD. INR payments from foreign users may lead to account suspension.</li>
                    <li>You are responsible for charges incurred using your credentials.</li>
                    <li>Provide accurate payment info. Authorization confirms ownership of payment method.</li>
                    <li>Failure to authorize payment may result in subscription suspension. Fraud may be reported to banks or law enforcement.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <LockIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Privacy Policy and Cookies Info
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>The Kisan Satta respects your privacy.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Changes to the Site
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>The Kisan Satta reserves the right, in its discretion and at any time, to suspend, change, modify, add or remove portions of the content available on the Site & Service at any time and to restrict the use and accessibility of the Site and Service.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <PolicyIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Liability and Indemnity
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>All content and services are provided "as is", with no express or implied warranties.</li>
                    <li>You agree to indemnify Kisan Satta for any breaches of these Terms.</li>
                    <li>We do not guarantee the quality, accuracy, or reliability of content or services.</li>
                    <li>Kisan Satta disclaims all warranties, including merchantability and fitness for a particular purpose.</li>
                    <li>Kisan Satta is not liable for indirect, incidental, special, or consequential damages, including loss of profits, business interruption, or loss of information.</li>
                    <li>There is no guarantee the services are virus-free or error-free.</li>
                    <li>Any legal liability from Kisan Satta will not exceed the amount you paid for the service in question.</li>
                    <li>You agree to defend and indemnify Kisan Satta and its affiliates from claims or expenses, including legal fees, related to any breach of these Terms or your use of the services.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Force Majeure
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>The Kisan Satta will not be held responsible for circumstances beyond its control.</li>
                    <li>The Kisan Satta, its affiliates and its information providers will not be liable or deemed to be in default for any delay or failure in performance or interruption of the delivery of The Kisan Satta Content that may result directly or indirectly from any cause or circumstance beyond its or their reasonable control, including but not limited to failure of electronic or mechanical equipment or communication lines, telephone or other interconnect problems, computer viruses, unauthorised access, theft, operator errors, severe weather, earthquakes or natural disasters, strikes or other labour problems, wars, or governmental restrictions.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Miscellaneous
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>The Kisan Satta may change these Terms at its discretion and will notify users via email or on the Site.</li>
                    <li>Continued use of the Site & Service after changes implies acceptance of the updated Terms.</li>
                    <li>If you do not agree with the changes, discontinue use of the Site & Service.</li>
                    <li>Access to certain THG content may have additional terms and conditions.</li>
                    <li>This agreement is personal and cannot be transferred or assigned by you.</li>
                    <li>The Kisan Satta may assign this agreement to a third party.</li>
                    <li>A delay or omission by either party in enforcing any part of these Terms does not waive their rights.</li>
                    <li>Notices to THG must be made in writing and sent to: 859/860, Kasturi Buildings, Anna Salai, Chennai 600002, Tamil Nadu, India.</li>
                    <li>If any part of these Terms is found invalid, the remaining sections still apply.</li>
                    <li>Only terms explicitly stated in this agreement will apply; no unwritten conditions are included.</li>
                    <li>Headings are for reference only and carry no legal weight.</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <GppMaybeIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Term and Termination
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <ul>
                    <li>Kisan Satta may terminate services or access at its sole discretion</li>
                  </ul>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>

            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionHeader>
                  <InfoIcon />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Changes to Terms
                  </Typography>
                </AccordionHeader>
              </AccordionSummary>
              <AccordionDetails>
                <ContentBox>
                  <Typography variant="body1" paragraph>
                    <strong>Kisan Satta may update these terms at any time. Continued use means acceptance.</strong>
                  </Typography>
                </ContentBox>
              </AccordionDetails>
            </StyledAccordion>
          </StyledPaper>
        </Container>
      </MainContent>
      <Footer />
    </TermsContainer>
  );
};

export default Terms;
