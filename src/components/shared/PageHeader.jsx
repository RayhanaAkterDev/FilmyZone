const PageHeader = ({ eyebrow = "Explore", title, highlightedTitle, description }) => {
    return (
        <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    {eyebrow}
                </span>
            </div>

            <h1 className="font-lobster text-5xl leading-[1.05] text-primary-typo sm:text-6xl">
                {title}

                {highlightedTitle && <span className="text-primary"> {highlightedTitle}</span>}
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-secondary-typo">
                {description}
            </p>
        </div>
    );
};

export default PageHeader;
