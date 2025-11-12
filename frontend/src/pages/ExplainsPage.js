import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  background-color: #f9f9f9;
`;

const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px 60px;
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #d32f2f;
  padding-bottom: 12px;
  margin-bottom: 30px;
`;

const PageTitle = styled.h1`
  font-family: 'Didot', 'GFS Didot', serif;
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: #b71c1c;
`;

const Badge = styled.span`
  background-color: #ffd700;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 12px;
  color: #000;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr;
  gap: 25px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    & > :first-child {
      grid-column: span 2;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.12);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 18px;
`;

const CardTitle = styled.h2`
  font-family: 'Didot', 'GFS Didot', serif;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px;
  color: #222;
`;

const CardAuthor = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #555;
  text-transform: uppercase;
  margin: 0;
`;

const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const OutlineCard = styled(Card)`
  box-shadow: none;
  border: 1px solid #e0e0e0;
`;

const explainsData = {
  main: {
    id: 'e1',
    title: 'Has the environmental crisis in India exacerbated? | Explained',
    author: 'TIKENDER SINGH PANWAR',
    image: 'https://picsum.photos/seed/envCrisisExplains/640/420',
  },
  middle: [
    {
      id: 'e2',
      title: 'What would a French nuclear umbrella mean for Europe? | Explained',
      author: 'FRANCISZEK SNARSKI',
    },
    {
      id: 'e3',
      title: 'How do military standoffs affect aviation? | Explained',
      author: 'MURALI N. KRISHNASWAMY',
    },
  ],
  right: [
    {
      id: 'e4',
      title: 'Why is the RBI changing gold loan rules? | Explained',
      author: 'LALATENDU MISHRA',
      image: 'https://picsum.photos/seed/rbiExplains/480/320',
    },
    {
      id: 'e5',
      title: 'Will there be a lasting ceasefire in Gaza? | Explained',
      author: 'STANLY JOHNY',
      image: 'https://picsum.photos/seed/gazaExplains/480/320',
    },
  ],
};

const ExplainsPage = () => {
  return (
    <PageWrapper>
      <Header />
      <Content>
        <TitleBlock>
          <PageTitle>The Media Center Explains</PageTitle>
          <Badge>MC Premium</Badge>
        </TitleBlock>
        <Grid>
          <Card to={`/article/${explainsData.main.id}`}>
            <CardImage src={explainsData.main.image} alt={explainsData.main.title} />
            <CardBody>
              <CardTitle>{explainsData.main.title}</CardTitle>
              <CardAuthor>{explainsData.main.author}</CardAuthor>
            </CardBody>
          </Card>

          <VerticalStack>
            {explainsData.middle.map((item) => (
              <OutlineCard key={item.id} to={`/article/${item.id}`}>
                <CardBody>
                  <CardTitle>{item.title}</CardTitle>
                  <CardAuthor>{item.author}</CardAuthor>
                </CardBody>
              </OutlineCard>
            ))}
          </VerticalStack>

          <VerticalStack>
            {explainsData.right.map((item) => (
              <Card key={item.id} to={`/article/${item.id}`}>
                <CardImage src={item.image} alt={item.title} />
                <CardBody>
                  <CardTitle>{item.title}</CardTitle>
                  <CardAuthor>{item.author}</CardAuthor>
                </CardBody>
              </Card>
            ))}
          </VerticalStack>
        </Grid>
      </Content>
      <Footer />
    </PageWrapper>
  );
};

export default ExplainsPage;
