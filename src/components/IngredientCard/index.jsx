export const IngredientCard = () => {
    return (
        <div className="flex flex-col justify-center items-center w-32 h-32 ingredient-card-shadow rounded-xl">
            <img
                src="https://img.freepik.com/premium-photo/one-ripe-tomato-white-background-tomat-white_73289-74.jpg?w=300"
                alt="ingredient"
                className="h-20 w-20"
            />
            <p className="text-sm font-semibold">Ingredient</p>
        </div>
    )
}