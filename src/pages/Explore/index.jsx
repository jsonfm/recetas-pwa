import { UilSearch } from '@iconscout/react-unicons';
import { UilSlidersVAlt } from '@iconscout/react-unicons';

const tags = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export const Explore = () => {
    return (
        <section className="pt-12 pb-20 px-4">
            <h4 className="mb-4 font-semibold text-xl">Explore</h4>
            <div className="flex items-center bg-darkd text-darkb px-4 py-3 rounded-full">
                <UilSearch />
                <input type="text" className="w-full bg-darkd text-darkb outline-none border-none px-4" placeholder="Ingredient..."/>
                <UilSlidersVAlt/>
            </div>
            <h5 className="mt-4">Quick Search</h5>
            
            <h5 className="mb-4">Popular Tags</h5>
            <div className="flex flex-wrap justify-center gap-4">
                {tags.map((_) => (
                    <div className="tag">tag name</div>
                ))}
            </div>
        </section>
    )
}