const MovieMeta = ({ label, value }) => {
    return (
        <div className="flex gap-3 text-xs">
            <span className="w-18 shrink-0 text-secondary-typo">{label}</span>

            <span className="font-medium leading-5 text-primary-typo">
                {value}
            </span>
        </div>
    );
};

export default MovieMeta;
