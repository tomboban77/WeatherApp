import { AxiosError } from 'axios'

export interface AppError {
  message: string
  code?: number
}
interface AxiosErrorResponse {
  message?: string
  [key: string]: unknown
}

export const mapErrorToMessage = (error: unknown): AppError => {
  if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError<AxiosErrorResponse>
    const message =
      axiosError.response?.data?.message ||
      axiosError.message ||
      'An unexpected error occurred.'

    return {
      message,
      code: axiosError.response?.status,
    }
  }

  if (error instanceof Error) {
    return { message: error.message }
  }

  return { message: 'An unexpected error occurred.' }
}
