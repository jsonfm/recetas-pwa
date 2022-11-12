import { GroceryCard } from "@/components/GroceryCard";
import { recipesService } from "@/services/recipes.service";


export const Grocery = () => {
    const groceries = recipesService.getGroceries();

    return (
        <section className="pb-20 pt-8">
            <h4 className="mb-4 px-4 font-semibold text-xl">Grocery</h4>
            <div className="flex flex-col items-center gap-4">
                {groceries.map(grocery => <GroceryCard {...grocery}/>)}
            </div>
        </section>
    )
}