import React from 'react'

interface SpotifyInfo{
  error: any;
  recommendations: any;
  classes:any;
}

const SpotifyInfo: React.FC<SpotifyInfo> = ({error,recommendations, classes}) => {
  
  return (
      <div className={`p-4 flex flex-col items-center bg-[#3f3e3e] text-white rounded-md weather-info ${classes}`}>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h2 className='text-white'>Spotify Recommendations</h2>
          <ul>
            {recommendations.map((track:any) => (
              <li key={track.id}>{track.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SpotifyInfo
