import React from 'react';
import { ReviewCard } from '../components/Card';
import { Button } from "@material-tailwind/react";
const Home = () => {
    return (
        <>
         <hero className="home-hero">
            <Button color="white">Sign Up</Button>
         </hero>
        <div className='mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4'>
            <div className="container mx-auto flex flex-wrap justify-between text-blue-gray-900">
                <ReviewCard
                src="https://res.cloudinary.com/itimages/image/fetch/c_scale,w_1500,q_50,f_auto/https://images.randomhouse.com/cover/d/9780593135204"
                alt="Project Hail Mary"
                title="Project Hail Mary Review"
                description="The novel features an astronaut on a mission to save the Earth from destruction, who faces an unknown threat to his own sanity." 
                />
                <ReviewCard
                    src="https://res.cloudinary.com/itimages/image/fetch/c_scale,w_1500,q_50,f_auto/https://images.randomhouse.com/cover/d/9780553418026"
                    alt="The Martian"
                    title="The Martian Review"
                    description="The story follows an American astronaut, Mark Watney, as he becomes stranded alone on Mars in 2035 and must improvise in order to survive." 
                />
                <ReviewCard
                    src="https://res.cloudinary.com/itimages/image/fetch/c_scale,w_1500,q_50,f_auto/https://images.randomhouse.com/cover/d/9780553448146"
                    alt="Artemis"
                    title="Artemis Review"
                    description="Jazz Bashara is a criminal. Well, sort of. Life on Artemis, the first and only city on the moon, is tough if you're not a rich tourist or an eccentric billionaire. So smuggling in the occasional harmless bit of contraband barely counts, right? "
                />
            </div>
         </div>
        
       
        </>
    );
};

export default Home;