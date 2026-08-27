const PageHeader = ({
    eyebrow = 'Explore',
    title,
    highlightedTitle,
    description,
    variant = 'page',
}) => {
    const isSection = variant === 'section';

    return (
        <div
            className={`
        max-w-3xl
        ${isSection ? 'mb-8 sm:mb-10' : 'mb-10 sm:mb-14'}
      `}
        >
            {/* Eyebrow */}
            <div
                className={`
          flex items-center gap-3
          ${isSection ? 'mb-4' : 'mb-4 sm:mb-5'}
        `}
            >
                <span
                    className={`
            h-px bg-primary
            ${isSection ? 'w-7 sm:w-8' : 'w-8'}
          `}
                />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.22em]">
                    {eyebrow}
                </span>
            </div>

            {/* Title */}
            <h1
                className={`
          font-lobster leading-[1.05] text-primary-typo
          ${
              isSection
                  ? 'text-4xl sm:text-5xl'
                  : 'text-4xl sm:text-5xl lg:text-6xl'
          }
        `}
            >
                {title}

                {highlightedTitle && (
                    <span className="text-primary"> {highlightedTitle}</span>
                )}
            </h1>

            {/* Description */}
            {description && (
                <p
                    className={`
            max-w-2xl text-secondary-typo
            ${
                isSection
                    ? 'mt-4 text-sm leading-6 sm:mt-5 sm:text-[15px] sm:leading-7'
                    : 'mt-5 text-sm leading-6 sm:mt-6 sm:text-[15px] sm:leading-7'
            }
          `}
                >
                    {description}
                </p>
            )}
        </div>
    );
};

export default PageHeader;
