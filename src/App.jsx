import { useState } from "react"
import Searchbar from "./components/Searchbar"
import StatsCard from "./components/StatsCard"
import { useGithub } from "./hooks/useGithub"
import RepoList from "./components/RepoList"
import UserProfile from "./components/UserProfile"
import AiSummary from "./components/AiSummary"
import Header from "./components/Header"
import { generateSummary } from "./services/claude"

const App = () => {
  const [username, setUsername] = useState("")
  const [submittedUsername, setSubmittedUsername] = useState("")
  const { user, repos, events, isLoading, error } = useGithub(submittedUsername)
  const [summary, setSummary] = useState("")
  const [isSummaryLoading, setIsSummaryLoading] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = () => {
    setSubmittedUsername(username)
    setSummary("")
    setShowSummary(false)
    setIsSummaryLoading(false)
  }

  const handleGenerateSummary = () => {
    setShowSummary(true)
    setIsSummaryLoading(true)

    generateSummary(user, repos, events)
      .then(text => setSummary(text))
      .catch((err) => {
        console.error(err)
        setSummary("Unable to generate summary.")
      })
      .finally(() => setIsSummaryLoading(false))
  }

  const searchBar = (
    <Searchbar
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    />
  )

  if (!submittedUsername) {
    return (
      <div className="min-h-screen bg-[#ffffff] text-[#09090b]">
        <Header />
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          {searchBar}
          <p className="mt-8 text-sm text-[#71717a]">Search for a user</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#ffffff] text-[#09090b]">
        <Header />
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          {searchBar}
          <p className="mt-8 text-sm text-[#71717a]">Loading...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#ffffff] text-[#09090b]">
        <Header />
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          {searchBar}
          <p className="mt-8 text-sm text-[#71717a]">Error occurred while fetching user data</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#09090b]">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        {searchBar}

         <div className="mt-8">
          <UserProfile {...user} />
        </div>
        
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard label="REPOSITORIES" value={user?.public_repos} subtitle="Average active repositories" accentColor="#7c3aed" />
          <StatsCard label="FOLLOWERS" value={user?.followers} subtitle="Average active repositories" accentColor="#7c3aed" />
          <StatsCard label="FOLLOWING" value={user?.following} subtitle="Average active repositories" accentColor="#7c3aed" />
          <StatsCard label="PUBLIC GISTS" value={user?.public_gists} subtitle="Total public gists" accentColor="#7c3aed" />
        </div>

        {repos?.length > 0 && (
          <div className="mt-6 flex justify-start">
            <button
              onClick={handleGenerateSummary}
              disabled={isSummaryLoading}
              className={`inline-flex items-center justify-center rounded-lg bg-[#7c3aed] px-5 py-3 text-sm font-semibold text-white transition duration-200 ${isSummaryLoading ? 'cursor-not-allowed bg-[#c4b5fd]' : 'hover:bg-[#6d28d9]'}`}
            >
              {isSummaryLoading ? "Generating..." : "Generate Summary"}
            </button>
          </div>
        )}

        <AiSummary summary={summary} isLoading={isSummaryLoading} showSummary={showSummary} />

       

        <RepoList repos={repos} />
      </div>
    </div>
  )
}

export default App