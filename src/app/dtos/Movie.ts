export interface Movie{
    page?: number;
    results?: (MovieResults)[];
    total_results?: number;
    total_pages?: number;
    dates?: Dates;
}


export interface MovieResults{
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids?: (number)[] | null;
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

export interface Dates {
    maximum: string;
    minimum: string;
  } 



