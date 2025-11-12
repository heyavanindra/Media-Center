import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AdminLayout from '../components/AdminLayout';
import { fetchYtVideos, deleteYtVideo } from '../../utils/api';
import {
  Typography,
  Button,
  Box,
  Container,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DeleteIcon from '@mui/icons-material/Delete';

const PageContainer = styled(Container)`
  padding: 30px 24px;
  max-width: 1280px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
`;

const Title = styled(Typography)`
  font-family: 'Noto Serif', serif;
  font-weight: 700;
  color: var(--text-dark);
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

const LoadingContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 16px;
  color: var(--text-medium);
`;

const VideoCard = styled(Card)`
  && {
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--card-shadow-light, 0 4px 12px rgba(0,0,0,0.08));
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: var(--card-shadow-hover, 0 10px 25px rgba(0,0,0,0.15));
    }
  }
`;

const VideoThumbnail = styled(CardMedia)`
  && {
    height: 200px;
    background-size: cover;
    background-position: center;
  }
`;

const VideoInfo = styled(CardContent)`
  && {
    flex-grow: 1;
  }
`;

const VideoTitle = styled(Typography)`
  && {
    font-family: 'Noto Serif', serif;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-dark);
  }
`;

const VideoDate = styled(Typography)`
  && {
    font-size: 0.85rem;
    color: var(--text-medium);
  }
`;

const VideoActions = styled(CardActions)`
  && {
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
  }
`;

const ViewButton = styled(Button)`
  &.MuiButton-root {
    text-transform: none;
    font-weight: 600;
    border-radius: 6px;
  }
`;

const DeleteButton = styled(Button)`
  &.MuiButton-root {
    text-transform: none;
    font-weight: 600;
    border-radius: 6px;
  }
`;

const EmptyState = styled(Box)`
  text-align: center;
  padding: 60px 20px;
  background-color: var(--background-off);
  border-radius: 12px;
  color: var(--text-medium);
  border: 1px dashed var(--border-color);

  svg {
    font-size: 56px;
    margin-bottom: 12px;
    color: var(--primary-color);
  }
`;

const YtVideosList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetchYtVideos();
        const data = Array.isArray(res.data) ? res.data : [];
        setVideos(data);
      } catch (err) {
        console.error('Error fetching YouTube videos:', err);
        setError('Failed to load YouTube videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <LoadingContainer>
          <CircularProgress size={50} thickness={4} sx={{ color: 'var(--primary-color)' }} />
          <Typography variant="h6">Loading YouTube videos...</Typography>
        </LoadingContainer>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <PageContainer maxWidth="lg">
        <Header>
          <Title variant="h4">YouTube Videos</Title>
          <AddButton
            component={Link}
            to="/admin/ytvideos/new"
            variant="contained"
            startIcon={<AddIcon />}
          >
            Add YouTube Video
          </AddButton>
        </Header>

        {error && (
          <Box mb={3} color="error.main">
            <Typography>{error}</Typography>
          </Box>
        )}

        {videos.length === 0 ? (
          <EmptyState>
            <SmartDisplayIcon />
            <Typography variant="h6" gutterBottom>
              No YouTube videos yet
            </Typography>
            <Typography variant="body1">
              Click on "Add YouTube Video" to add your first video.
            </Typography>
          </EmptyState>
        ) : (
          <Grid container spacing={3}>
            {videos.map((video) => (
              <Grid item xs={12} sm={6} md={4} key={video._id}>
                <VideoCard>
                  <VideoThumbnail image={video.thumbnail} />
                  <VideoInfo>
                    <VideoTitle variant="h6">{video.title}</VideoTitle>
                    <VideoDate variant="body2">
                      Added on {new Date(video.createdAt).toLocaleDateString()}
                    </VideoDate>
                  </VideoInfo>
                  <VideoActions>
                    <ViewButton
                      size="small"
                      variant="contained"
                      color="primary"
                      endIcon={<OpenInNewIcon />}
                      onClick={() => {
                        if (video.youtubeUrl) {
                          window.open(video.youtubeUrl, '_blank', 'noopener,noreferrer');
                        }
                      }}
                    >
                      Watch
                    </ViewButton>
                    <DeleteButton
                      size="small"
                      variant="outlined"
                      color="error"
                      endIcon={<DeleteIcon />}
                      disabled={deleting}
                      onClick={async () => {
                        const confirmDelete = window.confirm('Are you sure you want to delete this YouTube video?');
                        if (!confirmDelete) {
                          return;
                        }
                        try {
                          setDeleting(true);
                          await deleteYtVideo(video._id);
                          setVideos((prev) => prev.filter((item) => item._id !== video._id));
                        } catch (err) {
                          console.error('Error deleting YouTube video:', err);
                          alert('Failed to delete YouTube video. Please try again.');
                        } finally {
                          setDeleting(false);
                        }
                      }}
                    >
                      Delete
                    </DeleteButton>
                  </VideoActions>
                </VideoCard>
              </Grid>
            ))}
          </Grid>
        )}
      </PageContainer>
    </AdminLayout>
  );
};

export default YtVideosList;
