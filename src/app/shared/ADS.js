import strawberry from '../assets/img/cupCherry.jpeg';
import sundae from '../assets/img/cherry .jpeg';
import together from '../assets/img/icecreamshop.jpeg'
import Cherry from '../assets/img/cupCherry.jpeg';

export const ADS = [
    {
        id: 0,
        name: 'strawberry',
        image: strawberry,
        featured: true,
        description:
            'Book a 5-day mountain trek with a seasoned outdoor guide! Fly fishing equipment and lessons provided.'
    },
    {
        id: 1,
        name: 'sundae',
        image: sundae,
        featured: false,
        description:
            '5 days deep in the Redux National Monument, far from the beaten path, with only a reducer in your backpack. Guide provided.'
    },
    {
        id: 2,
        name: 'together',
        image: together,
        featured: false,
        description: `In this weekend workshop, we'll rebuild your bootstraps from scratch, so you're ready for next-level excursions.`
    },
    {
        id: 3,
        name: 'cherry',
        image: Cherry,
        featured: false,
        description:
            'Meet up with your guide at the top of Promise Mountain. Or, try to. Good luck!'
    }
];