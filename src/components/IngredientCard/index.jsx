export const IngredientCard = ({ name, image }) => {
    return (
        <div className="flex flex-col justify-center items-center w-32 h-32 ingredient-card-shadow rounded-xl">
            <img
                src={image}
                alt="ingredient"
                className="h-20 w-20"
            />
            <p className="text-sm font-semibold">{name}</p>
        </div>
    )
}