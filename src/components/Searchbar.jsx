import Button from "./Button"

const Searchbar = ({ value, onChange, onSubmit, isLoading }) => {
    return (
        
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="github.com/username"
                    className="w-full rounded-lg border border-[#e4e4e7] bg-white px-5 py-3 text-[#09090b] shadow-sm shadow-slate-100 outline-none"
                    value={value}
                    onChange={onChange}
                />
                <Button onClick={onSubmit} isLoading={isLoading}>
                    Analyze
                </Button>
        
        </div>
    )
}

export default Searchbar