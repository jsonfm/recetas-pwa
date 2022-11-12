import { RecipeCard } from "@/components/RecipeCard";
import { IngredientCard } from "@/components/IngredientCard";

const ingredients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Home = () => {
    return (
        <section className="pb-20">
            <p className="text-dark0 text-2xl font-semibold">Recipes</p>
            <div className="w-full flex gap-4 overflow-x-auto overscroll-x-auto py-2">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>

            <p className="text-dark0 text-xl font-semibold mt-6 mb-2">Search by ingredients</p>
            <div className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto py-6 px-1">
                {ingredients.map(ingredient => (
                    <IngredientCard/>
                ))}
            </div>
        </section>
    )
}