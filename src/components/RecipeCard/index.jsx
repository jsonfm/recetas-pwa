import { UilClock } from '@iconscout/react-unicons';
import { UilHeadSide } from '@iconscout/react-unicons';
import { UilHeart } from '@iconscout/react-unicons';
import { UilBookmarkFull } from '@iconscout/react-unicons';


export const RecipeCard = () => {
    return (
        <div className="min-w-fit w-72 h-80 rounded-2xl recipe-card-shadow">
            <img 
                src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="recipe-img"
                class="h-40 w-72 object-cover rounded-t-2xl"
            />
            <div class="px-2 pt-2">
                <h5 class="mt-1 mb-2 text-dark0 font-bold">Recipe Name</h5>
                <div class="flex flex-col gap-2 w-full text-primary">
                    <div class="flex gap-2">
                        <UilClock/>
                        <p class="text-darka">25 mins</p>
                    </div>
                    <div class="flex gap-2">
                        <UilHeadSide />
                        <p class="text-darka">4 servings</p>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex gap-2">
                            <UilBookmarkFull/>
                            <p class="text-darka">Dessert</p>
                        </div>
                        <UilHeart/>
                    </div>
                </div>
            </div>
        </div>
    )
}