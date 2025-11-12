import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AdminLayout from '../components/AdminLayout';
import { fetchShots } from '../../utils/api';

// Material UI components
import { 
  Typography, 
  Button, 
  Box, 
  Paper, 
  Grid, 
  Container,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Pagination,
  Alert,
  CircularProgress
} from '@mui/material';

// Icons
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';

const ShotsContainer = styled(Container)`
  padding: 30px 24px;
  max-width: 1280px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
`;

const Title = styled(Typography)`
  margin: 0;
  font-family: 'Noto Serif', serif;
  font-weight: 700;
  color: var(--text-dark);
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 3.5px;
    background-color: var(--primary-color);
    border-radius: 2px;
  }
`;

const AddButton = styled(Button)`
  &.MuiButton-root {
    padding: 10px 22px;
    font-weight: 600;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(43, 109, 168, 0.2);
    transition: all 0.3s ease;
    background-color: var(--primary-color);
    text-transform: none;
    font-size: 0.95rem;
    color: white;
    font-family: 'Open Sans', sans-serif;
    
    svg {
      margin-right: 8px;
    }

    &:hover {
      background-color: var(--primary-dark);
      box-shadow: 0 6px 12px rgba(43, 109, 168, 0.3);
      transform: translateY(-2px);
    }
  }
`;

const ShotsGrid = styled(Grid)`
  margin-bottom: 40px;
`;

const ShotCard = styled(Card)`
  && {
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--card-shadow-light, 0 4px 12px rgba(0,0,0,0.08));
    transition: all 0.3s ease;
    background-color: var(--background-paper, white);
    border: 1px solid var(--border-color-light, #e0e0e0);

    &:hover {
      transform: translateY(-6px);
      box-shadow: var(--card-shadow-hover, 0 10px 25px rgba(0,0,0,0.15));
      
      .shot-thumbnail {
        transform: scale(1.07);
      }
    }
  }
`;

const ShotThumbnail = styled(CardMedia)`
  && {
    height: 200px;
    background-image: url(${props => props.image || '/placeholder-image.jpg'});
    background-size: cover;
    background-position: center;
    position: relative;
    transition: transform 0.6s ease;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      transition: background-color 0.3s ease;
    }
    
    ${ShotCard}:hover &::after {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }
`;

const NoThumbnailPlaceholder = styled(Box)`
  height: 200px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  
  svg {
    font-size: 54px;
    margin-bottom: 8px;
    opacity: 0.7;
  }
`;

const ShotInfo = styled(CardContent)`
  && {
    padding: 16px;
    flex-grow: 1;
  }
`;

const ShotTitle = styled(Typography)`
  margin: 0 0 10px;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-dark);
  font-family: 'Noto Serif', serif;
  line-height: 1.45;
  
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: calc(1.45em * 2);
`;

const ShotDate = styled(Box)`
  font-size: 0.875rem;
  color: var(--text-secondary, #6c757d);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  
  svg {
    font-size: 1.1rem;
    margin-right: 8px;
    opacity: 0.65;
  }
`;

const ActionButtons = styled(CardActions)`
  && {
    padding: 12px 16px;
    background-color: var(--background-off, #f9f9f9);
    border-top: 1px solid var(--border-color, #eee);
    display: flex;
    gap: 12px;
  }
`;

const EditButton = styled(Button)`
  &.MuiButton-root {
    background-color: rgba(43, 109, 168, 0.1);
    color: var(--primary-color);
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-transform: none;
    border-radius: 6px;
    padding: 6px 12px;
    box-shadow: none;
    border: 1px solid rgba(43, 109, 168, 0.3);
    
    &:hover {
      background-color: rgba(43, 109, 168, 0.2);
      border-color: rgba(43, 109, 168, 0.5);
    }
  }
`;

const DeleteButton = styled(Button)`
  &.MuiButton-root {
    background-color: rgba(211, 47, 47, 0.1);
    color: var(--error-main, #d32f2f);
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-transform: none;
    border-radius: 6px;
    padding: 6px 12px;
    box-shadow: none;
    border: 1px solid rgba(211, 47, 47, 0.3);

    &:hover {
      background-color: rgba(211, 47, 47, 0.2);
      border-color: rgba(211, 47, 47, 0.5);
    }
  }
`;

const LoadingContainer = styled(Box)`
  padding: 40px;
  text-align: center;
  color: var(--text-medium);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 16px;
`;

const NoShotsMessage = styled(Paper)`
  padding: 40px 30px;
  text-align: center;
  background-color: var(--background-paper, white);
  border-radius: 12px;
  box-shadow: var(--card-shadow-light, 0 4px 12px rgba(0,0,0,0.08));
  margin-top: 32px;
  border: 1px dashed var(--border-color-light, #e0e0e0);

  .empty-state-icon {
    font-size: 56px;
    color: var(--primary-color);
    opacity: 0.7;
    margin-bottom: 20px;
  }

  .empty-state-title {
    font-family: 'Noto Serif', serif;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 8px;
    font-size: 1.5rem;
  }

  .empty-state-message {
    font-family: 'Open Sans', sans-serif;
    color: var(--text-secondary, #6c757d);
    margin-bottom: 24px;
    font-size: 1rem;
  }

  .empty-state-button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-transform: none;
    border-radius: 8px;
    padding: 10px 22px;
    font-size: 0.95rem;
  }
`;

const ShotsList = () => {
  const [shots, setShots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchShotsData = async () => {
    try {
      setLoading(true);
      const res = await fetchShots();
      setShots(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching shots:', err);
      setError('Failed to load shots. Please try again later.');
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchShotsData();
  }, []);
  
  const handleDeleteShot = async (id) => {
    if (window.confirm('Are you sure you want to delete this shot?')) {
      try {
        // Note: You'll need to add a deleteShot API function if you want delete functionality
        // For now, we'll just show an alert
        alert('Delete functionality not yet implemented. Please add a deleteShot API function.');
        // await api.deleteShot(id);
        // fetchShotsData();
      } catch (error) {
        console.error('Error deleting shot:', error);
        alert('Failed to delete shot. Please try again.');
      }
    }
  };
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };
  
  if (loading) {
    return (
      <AdminLayout>
        <LoadingContainer>
          <CircularProgress size={50} thickness={4} sx={{ color: 'var(--primary-color)' }} />
          <Typography variant="h6" sx={{ mt: 2, fontFamily: '"Open Sans", sans-serif' }}>
            Loading shots...
          </Typography>
        </LoadingContainer>
      </AdminLayout>
    );
  }
  
  return (
    <AdminLayout>
      <ShotsContainer maxWidth="lg">
        <Header>
          <Title variant="h4">Shots</Title>
          <AddButton 
            component={Link} 
            to="/admin/shots/new"
            variant="contained"
            startIcon={<AddIcon />}
          >
            Add New Shot
          </AddButton>
        </Header>
        
        {error && (
          <Alert 
            severity="error" 
            sx={{ mb: 3, borderRadius: '8px' }}
            onClose={() => setError(null)}
          >
            {error}
          </Alert>
        )}
        
        {shots.length > 0 ? (
          <ShotsGrid container spacing={3}>
            {shots.map(shot => (
              <Grid item xs={12} sm={6} md={4} key={shot._id}>
                <ShotCard>
                  {shot.thumbnail ? (
                    <ShotThumbnail 
                      image={shot.thumbnail}
                      className="shot-thumbnail"
                    />
                  ) : (
                    <NoThumbnailPlaceholder>
                      <ImageIcon />
                      <Typography variant="body2">No thumbnail</Typography>
                    </NoThumbnailPlaceholder>
                  )}
                  
                  <ShotInfo>
                    <ShotTitle variant="h6">{shot.title}</ShotTitle>
                    <ShotDate>
                      <DateRangeIcon />
                      Added: {formatDate(shot.createdAt)}
                    </ShotDate>
                  </ShotInfo>
                  
                  <ActionButtons>
                    <EditButton 
                      component={Link} 
                      to={`/admin/shots/edit/${shot._id}`}
                      variant="contained"
                      startIcon={<EditIcon />}
                      fullWidth
                    >
                      Edit
                    </EditButton>
                    <DeleteButton 
                      onClick={() => handleDeleteShot(shot._id)}
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      fullWidth
                    >
                      Delete
                    </DeleteButton>
                  </ActionButtons>
                </ShotCard>
              </Grid>
            ))}
          </ShotsGrid>
        ) : (
          <NoShotsMessage elevation={1}>
            <ImageIcon className="empty-state-icon" />
            <Typography variant="h5" className="empty-state-title">
              No Shots Found
            </Typography>
            <Typography variant="body1" className="empty-state-message">
              Add your first shot to showcase your media collection.
            </Typography>
            <Button
              component={Link}
              to="/admin/shots/new"
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              className="empty-state-button"
            >
              Add Shot
            </Button>
          </NoShotsMessage>
        )}
      </ShotsContainer>
    </AdminLayout>
  );
};

export default ShotsList;

