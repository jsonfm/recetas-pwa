
import { IngredientCard } from "@/components/IngredientCard";
import { UilSearch } from '@iconscout/react-unicons';
import { UilSlidersVAlt } from '@iconscout/react-unicons';
import { recipesService } from "@/services/recipes.service";


export const Explore = () => {
    const tags = recipesService.getTags();
    const ingredients = recipesService.getIngredients();

    return (
        <section className="pt-12 pb-20 px-4">
            <h4 className="font-semibold text-2xl mb-6">Explore</h4>
            <div className="flex items-center bg-darkd text-darkb px-4 py-3 rounded-full">
                <UilSearch />
                <input type="text" className="w-full bg-darkd text-darkb outline-none border-none px-4" placeholder="What are you craving ?"/>
                <UilSlidersVAlt/>
            </div>
            <h5 className="mt-4">Quick Search</h5>
            <div className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto scrollbar-hide py-6 px-4">
                {ingredients.map(ingredient => (
                    <IngredientCard {...ingredient}/>
                ))}
            </div>
            <h5 className="mb-4">Popular Tags</h5>
            <div className="flex flex-wrap justify-center gap-2">
                {tags.map((name) => (
                    <div className="tag">{name}</div>
                ))}
            </div>
        </section>
    )
}