import facebook from '../assets/img/facebook-logo-2.png';
import Github from '../assets/img/GitHub-Logo.png';
import instagram from '../assets/img/instagram_PNG10.png';
import sandbox from '../assets/img/sandbox.png';

export const PARTNERS = [
    {
        id: 0,
        name: 'Facebook account',
        image: facebook,
        featured: false,
        description:
            "Bootstrap Outfitters supplies you with the gear you need at prices you can't beat."
    },
    {
        id: 1,
        name: 'Git',
        image: Github,
        featured: false,
        description:
            'Join Git Out Expeditions to explore new horizons with a group of other adventurers!'
    },
    {
        id: 2,
        name: 'Instagram',
        image: instagram,
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