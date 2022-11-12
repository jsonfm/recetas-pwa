export const Profile = () => {
    return (
        <section className="pt-12 pb-20">
            <h4 className="font-semibold text-2xl px-4 mb-6">Profile</h4>
            <div className="flex items-center gap-4 px-4">
                <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="h-28 w-28 object-cover rounded-full"
                />
                <div className="flex flex-col justify-center">
                    <p className="text-xl font-semibold mb-1">Robert Watson</p>
                    <p className="text-darka mb-4">robertwatson@exmaple.com</p>
                    <button className="btn btn-rounded text-darka border px-0 py-2 w-[180px]">
                        Change profile
                    </button>
                </div>
            </div>
        </section>
    )
}