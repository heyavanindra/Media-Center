import React from 'react';
import styled from 'styled-components';
import YtVideoForm from '../components/YtVideoForm';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const AdminYtVideoPage = () => {
  return (
    <Container>
      <YtVideoForm isEditing={false} />
    </Container>
  );
};

export default AdminYtVideoPage;
