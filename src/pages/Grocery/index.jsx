import { GroceryCard } from "@/components/GroceryCard";

const groceries = [1, 2, 3, 4, 5, 6, 7]

export const Grocery = () => {
    return (
        <section className="pb-20 pt-8">
            <h4 className="mb-4 px-4 font-semibold text-xl">Grocery</h4>
            <div className="flex flex-col items-center gap-4">
                {groceries.map((_) => <GroceryCard />)}
            </div>
        </section>
    )
}