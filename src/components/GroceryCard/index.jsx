export const GroceryCard = () => {
    return (
        <div className="flex rounded-md min-w-[330px] h-24 ingredient-card-shadow">
            <img
                src="https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="h-24 w-1/3 rounded-l-md object-cover"
            />
            <div className="w-2/3 flex flex-col justify-center px-4">
                <h4 className="mb-1 font-semibold">Grocery Name ...</h4>
                <p>7 / 20 ingredients</p>
            </div>
        </div>
    )
}