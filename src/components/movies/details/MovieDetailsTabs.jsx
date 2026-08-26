const tabs = [
    {
        id: 'info',
        label: 'Info',
    },
    {
        id: 'videos',
        label: 'Videos',
    },
    {
        id: 'photos',
        label: 'Photos',
    },
];

const MovieDetailsTabs = ({ activeTab, setActiveTab }) => {
    return (
        <nav className="border-b border-border bg-surface">
            <div className="mx-auto flex max-w-6xl justify-center gap-8 sm:gap-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative py-4 text-sm font-semibold transition-colors ${
                            activeTab === tab.id
                                ? 'text-primary-typo'
                                : 'text-secondary-typo hover:text-primary-typo'
                        }`}
                    >
                        {tab.label}

                        {activeTab === tab.id && (
                            <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary" />
                        )}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default MovieDetailsTabs;
