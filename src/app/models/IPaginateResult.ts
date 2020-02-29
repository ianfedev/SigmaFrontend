export interface IPaginateResult<T> {
  data: T[];
  pagination: IPagination;
}

export interface IPagination {
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
  perPage: number;
  page?: number | null;
  totalPages?: number;
}
