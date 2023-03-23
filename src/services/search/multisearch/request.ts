export interface MultiSearchAPIRequest {
  api_key: string,
  language: string,
  query: string,
  page: number,
  include_adult: boolean
}
