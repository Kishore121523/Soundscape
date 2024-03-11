import React, { useEffect, useState } from 'react';
import { getRecommendations } from '@/lib/spotify/spotify'
import SpotifyInfo from '../UI/SpotifyInfo';

const SpotifyRecommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRecommendations();
        setRecommendations(response.data.tracks);
      } catch (error) {
        setError('Failed to fetch recommendations');
      }
    };

    fetchData();
  }, []);

  return (
    <SpotifyInfo error={error} recommendations={recommendations} />
  );
};

export default SpotifyRecommendations;
