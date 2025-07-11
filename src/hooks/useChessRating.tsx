
import { useQuery } from '@tanstack/react-query';

interface ChessComProfile {
  player_id: number;
  username: string;
  status: string;
  name?: string;
  avatar?: string;
  location?: string;
  country?: string;
  joined: number;
  last_online: number;
  followers: number;
  is_streamer: boolean;
  twitch_url?: string;
  fide?: number;
}

interface ChessComStats {
  chess_rapid?: {
    last: {
      rating: number;
      date: number;
    };
    best: {
      rating: number;
      date: number;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
  chess_blitz?: {
    last: {
      rating: number;
      date: number;
    };
    best: {
      rating: number;
      date: number;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
  chess_bullet?: {
    last: {
      rating: number;
      date: number;
    };
    best: {
      rating: number;
      date: number;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
}

const fetchChessComRating = async (username: string): Promise<number | null> => {
  try {
    const response = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
    if (!response.ok) {
      throw new Error('Player not found');
    }
    
    const data: ChessComStats = await response.json();
    
    // Get all available ratings
    const ratings = [
      data.chess_rapid?.last?.rating,
      data.chess_blitz?.last?.rating,
      data.chess_bullet?.last?.rating,
    ].filter((rating): rating is number => rating !== undefined);
    
    // Return the highest rating, or null if no ratings found
    return ratings.length > 0 ? Math.max(...ratings) : null;
  } catch (error) {
    console.log(`Failed to fetch rating for ${username}:`, error);
    return null;
  }
};

export const useChessRating = (username: string | undefined, staticRating: number) => {
  return useQuery({
    queryKey: ['chessRating', username],
    queryFn: () => username ? fetchChessComRating(username) : Promise.resolve(null),
    enabled: !!username,
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 1,
    select: (data) => data || staticRating,
  });
};
