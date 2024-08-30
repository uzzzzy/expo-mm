export type ApiResponse<T> = {
  status: string;
  message: string;
  result: T;
}

export type Pagination<T> = {
  meta: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  },
  data: Array<T>;
}