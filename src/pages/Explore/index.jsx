
const tags = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Explore = () => {
    return (
        <section className="pt-12 pb-20 px-4">
            <h4 className="mb-4 font-semibold text-xl">Explore</h4>
            <h5>Quick Search</h5>
            <h5 className="mb-4">Popular Tags</h5>
            <div className="flex flex-wrap justify-center gap-4">
                {tags.map((_) => (
                    <div className="tag">tag name</div>
                ))}
            </div>
        </section>
    )
}