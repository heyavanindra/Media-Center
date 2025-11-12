import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as api from '../../utils/api';
import ShotForm from '../components/ShotForm';
import { CircularProgress } from '@mui/material';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const AdminShotPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  
  const [shot, setShot] = useState(null);
  const [loading, setLoading] = useState(isEditing);
  const [error, setError] = useState('');
  
  useEffect(() => {
    // If editing, fetch the shot data
    if (isEditing) {
      const fetchShot = async () => {
        try {
          setLoading(true);
          const response = await api.fetchShots();
          const foundShot = response.data.find(s => s._id === id);
          if (foundShot) {
            setShot(foundShot);
          } else {
            setError('Shot not found');
          }
        } catch (error) {
          console.error('Error fetching shot:', error);
          setError('Failed to load shot. Please try again.');
        } finally {
          setLoading(false);
        }
      };
      
      fetchShot();
    }
  }, [id, isEditing]);
  
  if (loading) {
    return (
      <Container>
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      </Container>
    );
  }
  
  if (isEditing && !shot) {
    return (
      <Container>
        <ErrorMessage>
          {error || 'Shot not found. It may have been deleted or you may not have permission to view it.'}
        </ErrorMessage>
        <button onClick={() => navigate('/admin/shots')}>
          Back to Shots
        </button>
      </Container>
    );
  }
  
  return (
    <Container>
      <ShotForm 
        initialData={shot} 
        isEditing={isEditing}
      />
    </Container>
  );
};

export default AdminShotPage;

