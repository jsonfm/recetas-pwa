export const Detail = () => {
    return (
        <section className="relative min-h-screen overscroll-y-auto">
            <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="h-72 w-full object-cover sticky top-0"
            />
            <div className="sticky w-full min-h-screen top-12 -mt-12 bg-[#fff] rounded-t-[1.5rem] px-8 pt-12 pb-20 overflow-y-auto overscroll-y-auto">
                <h4 className="text-center mb-6 text-xl font-semibold">Recipe Name</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur, sint ipsam, est iure praesentium repudiandae corporis deleniti asperiores, beatae numquam? Laboriosam molestias beatae maxime sint inventore dicta, quas earum, perspiciatis eius odit mollitia consequuntur corporis iure! Veritatis libero ducimus aspernatur, ipsam, velit numquam quos exercitationem dolores ex quod praesentium.
                </p>
                <div className="mt-[80%] flex justify-between">
                    <div className="btn btn-rounded">Previous</div>
                    <div className="btn btn-primary btn-rounded min-w-[150px]">Next</div>
                </div>
            </div>
        </section>
    )
}