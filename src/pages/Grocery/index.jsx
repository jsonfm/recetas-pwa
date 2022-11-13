import { GroceryCard } from "@/components/GroceryCard";
import { recipesService } from "@/services/recipes.service";


export const Grocery = () => {
    const groceries = recipesService.getGroceries();

    return (
        <section className="pt-12 pb-20">
            <h4 className="font-semibold text-2xl px-4 mb-6">Grocery</h4>
            <div className="flex flex-col items-center gap-4">
                {groceries.map(grocery => <GroceryCard {...grocery}/>)}
            </div>
        </section>
    )
}