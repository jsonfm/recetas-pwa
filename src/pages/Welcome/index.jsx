import { UilEnvelopeAlt } from '@iconscout/react-unicons';
import { UilApple } from '@iconscout/react-unicons';

export const Welcome = () => {
    return (
        <section>
            <video
                src="https://www.shutterstock.com/shutterstock/videos/34559794/preview/stock-footage-chef-serves-salad-on-the-plate-in-restaurant.webm"
                className="absolute top-0 left-0 object-cover h-screen w-full"
                autoplay="autoplay"
                loop="true"
                muted
            />
            <div className="text-darkd absolute bottom-[40%] z-10 max-w-[400px]">
                <h3 className="text-4xl font-bold">Welcome to Daily Recipe App</h3>
                <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, molestias?</p>
                <button className="btn btn-primary btn-rounded mb-4">
                    <UilEnvelopeAlt/>
                    <p>Signup with Email</p>
                </button>
                <button className="btn btn-light btn-rounded">
                    <UilApple/>
                    <p>Signup with Apple</p>
                </button>
            </div>
        </section>
    )
}