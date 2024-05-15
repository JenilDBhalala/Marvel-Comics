export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IBelongsToCollection;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: ICredits;
}

interface ICredits {
  cast: ICast[];
  crew: ICrew[];
}

interface ICrew {
  id: number;
  job: string;
  name: string;
  adult: boolean;
  gender: number;
  credit_id: string;
  department: string;
  popularity: number;
  profile_path: null | string;
  original_name: string;
  known_for_department: string;
}

export interface ICast {
  id: number;
  name: string;
  adult: boolean;
  order: number;
  gender: number;
  cast_id: number;
  character: string;
  credit_id: string;
  popularity: number;
  profile_path: null | string;
  original_name: string;
  known_for_department: string;
}

interface ISpokenLanguage {
  name: string;
  iso_639_1: string;
  english_name: string;
}

interface IProductionCountry {
  name: string;
  iso_3166_1: string;
}

interface IProductionCompany {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

export interface IGenre {
  id: number;
  name: string;
}

interface IBelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}