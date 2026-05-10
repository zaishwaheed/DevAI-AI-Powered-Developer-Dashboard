const Header = () => {
  return (
    <header className="w-full bg-[#f8f5ff] py-8 shadow-sm shadow-slate-200">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center sm:px-10">
        <p className="mb-3 inline-flex rounded-full bg-[#ede9fe] px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#7c3aed]">
          DevAi
        </p>
        <h1 className="max-w-4xl text-3xl font-semibold leading-snug text-transparent sm:text-4xl md:text-5xl"
            style={{
              backgroundImage: 'linear-gradient(90deg, #7c3aed, #8b5cf6, #c084fc)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text'
            }}>
          Understand any developer in seconds
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-[#52525b] sm:text-sm">
          Bring clarity to developer profiles with AI-powered insights, built for fast decision-making and confident engineering teams.
        </p>
      </div>
    </header>
  )
}

export default Header
