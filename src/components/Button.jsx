const Button = ({ onClick, children, isLoading }) => {
    return (
            <button
                className={`inline-flex items-center justify-center rounded-lg bg-[#7c3aed] px-5 py-3 text-sm font-semibold text-white transition duration-200 ${isLoading ? 'cursor-not-allowed bg-[#c4b5fd]' : 'hover:bg-[#6d28d9]'} `}
                onClick={onClick}
                disabled={isLoading}
            >
                {children}
            </button>
    )
}

export default Button