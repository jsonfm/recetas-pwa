export const GroceryCard = ({ name, image, current, total}) => {
    return (
        <div className="flex rounded-md min-w-[330px] h-24 ingredient-card-shadow">
            <img
                src={image}
                className="h-24 w-1/3 rounded-l-md object-cover"
            />
            <div className="w-2/3 flex flex-col justify-center px-4">
                <h4 className="mb-1 font-semibold">{name}</h4>
                <p>{current} / {total} ingredients</p>
            </div>
        </div>
    )
}