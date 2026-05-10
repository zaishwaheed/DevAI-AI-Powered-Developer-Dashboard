import { useState } from "react"

const RepoCard = ({ id, name, description, stargazers_count, forks_count, language }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="h-full flex cursor-pointer flex-col rounded-lg border border-[#e4e4e7] bg-[#ffffff] p-4 shadow-sm shadow-slate-200 transition duration-200 hover:shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-[#09090b]">
                {name || 'Repo name'}
              </h3>
              <p className="mt-1 max-h-[2.5rem] overflow-hidden text-sm leading-5 text-[#71717a] [display:-webkit-box] [webkit-line-clamp:2] [webkit-box-orient:vertical]">
                {description || 'repo description'}
              </p>
            </div>
            <p className="whitespace-nowrap rounded-full bg-[#ede9fe] px-3 py-1 text-[11px] font-medium text-[#7c3aed]">
              {language || 'Not Specified'}
            </p>
          </div>

          <div className="h-px bg-[#e4e4e7]" />
        </div>

        <div className="mt-auto flex items-center gap-4 whitespace-nowrap text-[#09090b] font-semibold text-sm">
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#7c3aed]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Stargazers {stargazers_count ?? 0}
          </span>
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#7c3aed]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 010 14h2a1 1 0 110 2h-2a9 9 0 000-18H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Forks {forks_count ?? 0}
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
          <button
            className="absolute inset-0 bg-transparent"
            onClick={() => setIsOpen(false)}
            aria-label="Close modal"
          />
          <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl transition duration-300 ease-out transform scale-100 opacity-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-[#09090b]">{name || 'Repo name'}</h2>
                <p className="mt-2 text-sm text-[#71717a]">{language ? `Language: ${language}` : 'Language: Not Specified'}</p>
              </div>
              <button
                className="inline-flex h-10 w-10 items-center justify-center text-[#09090b] transition hover:text-[#4b5563]"
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 space-y-5 text-sm text-[#71717a]">
              <div>
                <p className="mb-2 text-sm font-semibold text-[#09090b]">Description</p>
                <p className="text-[#71717a]">{description || 'No description available.'}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-[#09090b] font-semibold">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#ede9fe] px-3 py-2 text-sm text-[#7c3aed]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {stargazers_count ?? 0} Stars
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#ede9fe] px-3 py-2 text-sm text-[#7c3aed]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 010 14h2a1 1 0 110 2h-2a9 9 0 000-18H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {forks_count ?? 0} Forks
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default RepoCard;