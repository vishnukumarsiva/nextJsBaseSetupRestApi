/* Es-lint is failing to detect the Query client form  @tanstack/react-query. So suppressing the eslint */
// eslint-disable-next-line import/named
import {QueryClient} from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 2000,
      refetchOnWindowFocus: false,
    },
    mutations: {retry: 3, retryDelay: 2000},
  },
})

export const useQueryController = () => {
  const refreshQuery = (queryKey: string) => queryClient.refetchQueries({queryKey: [queryKey]})

  const clearQueryCache = () => queryClient.clear()

  return {
    queryClient,
    clearQueryCache,
    refreshQuery,
  }
}
