export interface DataResult {
  Object: ApiObject;
  results: ApiResults[];
}

export interface ApiObject{
  total: number;
  limit: number;
  offset: number;
}

export interface ApiResults{
  title: string;
  img: string;
  title_type: string;
  netflix_id: number;
  synopsis: string;
  rating: string;
  year: string;
  runtime: string;
  title_date: string;
}
