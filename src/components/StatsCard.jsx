const StatsCard = ({ label, value, subtitle, accentColor }) => {
    return (
        <div className="stats-card rounded-lg p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-[#09090b]">{label}</p>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accentColor || '#7c3aed' }} />
            </div>
            <p className="text-4xl font-semibold text-[#09090b]">{value ?? 0}</p>
            <p className="text-sm text-[#71717a]">{subtitle}</p>
        </div>
    )
}

export default StatsCard