import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as api from '../../utils/api';

const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const FormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #0087a8;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: ${props => props.$secondary ? '#f5f5f5' : '#4caf50'};
  color: ${props => props.$secondary ? '#333' : 'white'};
  border: ${props => props.$secondary ? '1px solid #ddd' : 'none'};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.$secondary ? '#e5e5e5' : '#3d8b40'};
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #f44336;
  margin-top: 5px;
  font-size: 14px;
`;

const InfoMessage = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #e3f2fd;
  border-radius: 4px;
  color: #0d47a1;
  font-size: 14px;
`;

const YtVideoForm = ({ initialData, isEditing = false }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    youtubeUrl: initialData?.youtubeUrl || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [previewThumbnail, setPreviewThumbnail] = useState(initialData?.thumbnail || null);

  const navigate = useNavigate();

  const extractYouTubeVideoId = (url) => {
    const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch) {
      return shortsMatch[1];
    }

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'youtubeUrl' && value.trim()) {
      const videoId = extractYouTubeVideoId(value);
      if (videoId) {
        setPreviewThumbnail(getYouTubeThumbnail(videoId));
      } else {
        setPreviewThumbnail(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }

    if (!formData.youtubeUrl.trim()) {
      setError('YouTube URL is required');
      return;
    }

    const videoId = extractYouTubeVideoId(formData.youtubeUrl);
    if (!videoId) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');

      const ytVideoData = {
        title: formData.title,
        youtubeUrl: formData.youtubeUrl
      };

      if (isEditing) {
        await api.createYtVideo(ytVideoData);
      } else {
        await api.createYtVideo(ytVideoData);
      }

      navigate('/admin/ytvideos');
    } catch (error) {
      console.error('YT video form error:', error);
      setError(error.response?.data?.message || 'Error saving YouTube video');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>{isEditing ? 'Edit YouTube Video' : 'Add New YouTube Video'}</FormTitle>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Video Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter video title"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="youtubeUrl">YouTube URL</Label>
          <Input
            type="url"
            id="youtubeUrl"
            name="youtubeUrl"
            value={formData.youtubeUrl}
            onChange={handleChange}
            placeholder="https://www.youtube.com/watch?v=..."
            required
          />
          <InfoMessage>
            Provide a YouTube video URL. The thumbnail preview is generated automatically.
          </InfoMessage>

          {previewThumbnail && (
            <div style={{ marginTop: '15px' }}>
              <Label>Thumbnail Preview</Label>
              <div
                style={{
                  marginTop: '10px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  maxWidth: '400px',
                  border: '1px solid #ddd'
                }}
              >
                <img
                  src={previewThumbnail}
                  alt="YouTube thumbnail preview"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          )}
        </FormGroup>

        <ButtonContainer>
          <Button
            type="button"
            $secondary
            onClick={() => navigate('/admin/ytvideos')}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : (isEditing ? 'Update Video' : 'Add Video')}
          </Button>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default YtVideoForm;
