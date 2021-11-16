export interface tvShowsDetails{
    name:string;
    backdrop_path: string;
    id?: number;
    overview?: string;
    poster_path?: string;
    first_air_date?: string;
    runtime?: number;
    title?: string;
    genres?: Array<any>;
    vote_average?:number;
    status: string;
    seasons: Array<any>;
    number_of_seasons?:number;
    tagline: string;
}