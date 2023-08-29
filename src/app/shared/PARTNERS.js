import facebook from '../assets/img/facebook-logo-2.png';
import gitLogo from '../assets/img/GitHub-Logo.png';
import together from '../assets/img/bootstrap.jpeg';
import sandbox from '../assets/img/allcolorCream.jpeg';

export const PARTNERS = [
    {
        id: 0,
        name: 'facebook',
        image: facebook,
        featured: false,
        description:
            "Bootstrap Outfitters supplies you with the gear you need at prices you can't beat."
    },
    {
        id: 1,
        name: 'git Hub',
        image: gitLogo,
        featured: false,
        description:
            'Join Git Out Expeditions to explore new horizons with a group of other adventurers!'
    },
    {
        id: 2,
        name: 'together',
        image: together,
        featured: false,
        description:
            'Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop.'
    },
    {
        id: 3,
        name: 'sandbox',
        image: sandbox,
        featured: true,
        description:
            'From polar fleeces to swimsuits, hiking boots to waders, a visit to Node will be sure to get you covered.'
    }
];
