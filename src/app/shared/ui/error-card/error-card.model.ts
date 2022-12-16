import { HttpErrorResponse } from '@angular/common/http';

export interface ErrorObject {
  text: string;
  type: string;
  title?: string;
  retry?: boolean;
}

export function createErrorFromHttp(error: HttpErrorResponse): ErrorObject {
  return {
    text: error.error.message,
    type: 'error',
    title: `${error.statusText} - ${error.status}`,
    retry: error.status === 429,
  };
}

export function createError(
  text: string,
  type: string,
  title?: string,
  retry?: boolean
): ErrorObject {
  return {
    text,
    type,
    title,
    retry,
  };
}
