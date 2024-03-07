// components/SpotifyRecommendations.tsx
import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../../lib/spotify/spotify'

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
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h2>Spotify Recommendations</h2>
          <ul>
            {recommendations.map((track) => (
              <li key={track.id}>{track.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SpotifyRecommendations;
