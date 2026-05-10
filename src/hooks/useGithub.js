import { useQuery } from '@tanstack/react-query'
import { fetchUser, fetchRepos, fetchEvents } from '../services/github'

export const useGithub = (username) => {

  const userQuery = useQuery({
    queryKey: ["user", username],
    queryFn: () => fetchUser(username),
    enabled: !!username
  })

  const reposQuery = useQuery({
    queryKey: ["repos", username],
    queryFn: () => fetchRepos(username),
    enabled: !!username
  })

  const eventsQuery = useQuery({
    queryKey: ["events", username],
    queryFn: () => fetchEvents(username),
    enabled: !!username
  })

  return {
    user: userQuery.data,
    repos: reposQuery.data,
    events: eventsQuery.data,
    isLoading: userQuery.isLoading || reposQuery.isLoading || eventsQuery.isLoading,
    error: userQuery.error || reposQuery.error || eventsQuery.error
  }
}