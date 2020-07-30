interface Movie {
  id: number;
  isFavorite: boolean;
  title: string;
  genre: string;
  releaseDate: number;
  runTime: number;
  cover: string;
  poster: string;
  backgroundImage: string;
  backgroundColor: string;
  videoSrc: string;
  previewSrc: string;
  rating: {
    score: number;
    count: number;
  };
  description: string;
  director: string;
  cast: string[];
}

export {Movie};
