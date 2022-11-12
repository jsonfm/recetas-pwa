import { RecipeCard } from "@/components/RecipeCard";

export const Home = () => {
    return (
        <section>
            <p className="text-dark0 text-2xl font-semibold">Recipes</p>
            <div className="w-full flex gap-4 overflow-x-auto overscroll-x-auto py-2">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>

            <p className="text-dark0 text-xl font-semibold mt-6">Search by ingredients</p>
            <div>

            </div>
        </section>
    )
}