import { RecipeCard } from "@/components/RecipeCard";
import { IngredientCard } from "@/components/IngredientCard";

const ingredients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Home = () => {
    return (
        <section className="pb-20 pt-12">
            <p className="text-dark0 text-xl font-semibold px-4">Recipes</p>
            <div className="w-full flex gap-4 overflow-x-auto overscroll-x-auto scrollbar-hide py-2 px-4">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>
            <div className="flex justify-between items-center mt-4 mb-2 px-4">
                <p className="text-dark0 text-base font-semibold">Search by ingredients</p>
                <p className="text-primary">View all</p>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto scrollbar-hide py-6 px-4">
                {ingredients.map(ingredient => (
                    <IngredientCard/>
                ))}
            </div>
        </section>
    )
}