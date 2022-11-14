import { Link } from "react-router-dom";
import { UilEnvelopeAlt } from '@iconscout/react-unicons';
import { UilApple } from '@iconscout/react-unicons';
import "./styles.css";


export const Welcome = () => {
    return (
        <section className="overflow-hidden">
            <video
                src="https://www.shutterstock.com/shutterstock/videos/34559794/preview/stock-footage-chef-serves-salad-on-the-plate-in-restaurant.webm"
                className="absolute top-0 left-0 object-cover h-screen w-full"
                autoPlay="autoplay"
                loop={true}
                muted
            />
            <div className="bg-video">
                <div className="text-darkd relative z-20 mt-[45vh] max-w-[400px] px-4 ">
                <h3 className="text-4xl font-bold mb-4">Welcome to Daily Recipe App</h3>
                <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, molestias?</p>
                <Link to="/recipes" className="btn btn-primary btn-rounded mb-6">
                    <UilEnvelopeAlt/>
                    <p>Signup with Email</p>
                </Link>
                <Link to="/recipes" className="btn btn-light btn-rounded">
                    <UilApple/>
                    <p>Signup with Apple</p>
                </Link>

                <p className="text-center mt-6 underline">Already have an account?</p>
                </div>
            </div>
        </section>
    )
}