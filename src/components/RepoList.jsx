import RepoCard from "./RepoCard"

const RepoList = ({ repos }) => {
  return (
    <div className="mt-8 grid gap-6 auto-rows-fr sm:grid-cols-2 xl:grid-cols-3">
      {repos?.map((repo) => (
        <RepoCard key={repo.id} {...repo} />
      ))}
    </div>
  )
}

export default RepoList