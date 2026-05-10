const UserProfile = ({ avatar_url, name, login, bio }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-[#e4e4e7] bg-[#f8f8f8] p-6 shadow-sm shadow-slate-200 sm:flex-row sm:items-center">
      <img src={avatar_url} alt={name} className="h-20 w-20 rounded-full object-cover" />
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-[#09090b]">{name}</h2>
        <p className="text-sm text-[#71717a]">@{login}</p>
        <p className="max-w-2xl text-sm leading-6 text-[#71717a]">{bio || 'No bio available'}</p>
      </div>
    </div>
  )
}

export default UserProfile