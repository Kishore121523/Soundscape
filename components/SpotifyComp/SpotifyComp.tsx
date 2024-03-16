import React, { useEffect, useState } from 'react';
import { getRecommendations } from '@/lib/spotify/spotify'
import SpotifyInfo from '../UI/SpotifyInfo';
import { useAppState } from '@/app/AppStateContext';

const SpotifyRecommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { loaded } = useAppState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRecommendations();
        setRecommendations(response.data.tracks);
      } catch (error) {
        setError('Failed to fetch recommendations');
      }
    };
    
    if (loaded){
      fetchData();
    }
  }, [loaded]);

  return (
    <SpotifyInfo error={error} recommendations={recommendations} classes={loaded ? 'loaded' : ''}/>
  );
};

export default SpotifyRecommendations;
