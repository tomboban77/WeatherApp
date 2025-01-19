import { QueryClient } from 'react-query'
import { mapErrorToMessage } from '../utils/errorHandler'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      onError: (error: unknown) => {
        const appError = mapErrorToMessage(error)
        console.error('Query Error:', appError.message)
      },
    },
    mutations: {
      onError: (error: unknown) => {
        const appError = mapErrorToMessage(error)
        console.error('Mutation Error:', appError.message)
      },
    },
  },
})

export default queryClient
