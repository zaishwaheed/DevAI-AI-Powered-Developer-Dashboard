const AiSummary = ({ summary, isLoading, showSummary }) => {
  if (!showSummary) return null

  return (
    <div className="mt-6 rounded-lg bg-gradient-to-r from-[#c7b9ff] via-[#ddd4ff] to-[#efe6ff] p-[1px] shadow-sm shadow-slate-200">
      <div className="rounded-lg bg-[#faf8ff] p-6">
        {isLoading ? (
          <p className="text-sm font-medium text-[#7c3aed]">Generating summary...</p>
        ) : (
          <p className="text-[#09090b] leading-7">
            <span className="mr-2 inline-block text-lg text-[#7c3aed]">✨</span>
            {summary || 'No summary available.'}
          </p>
        )}
      </div>
    </div>
  )
}

export default AiSummary