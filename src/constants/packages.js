import breaststroke from '../assets/breaststroke.png';
import freestyle from '../assets/freestyle.png';
import backstroke from '../assets/backstroke.png';
import butterfly from '../assets/butterfly.png';
import pregnant from '../assets/pregnant.png';
import special from '../assets/special.png';

export const PACKAGES = [
    {
        title: 'BreastStroke',
        slug: 'breaststroke',
        price: 800,
        features: ['Learn breaststroke in 4 to 7 days', 'Basic techniques', '2 hrs'],
        image: breaststroke
    },
    {
        title: 'Backstroke',
        slug: 'backstroke',
        price: 1000,
        features: ['Learn Backstroke in 4 to 7 days', 'Advanced techniques', '2 hrs'],
        image: backstroke
    },
    {
        title: 'Freestyle',
        slug: 'freestyle',
        price: 1200,
        features: ['Learn Freestyle in 4 to 7 days', 'Competition training', '2 hrs'],
        image: freestyle
    },
    {
        title: 'Butterfly',
        slug: 'butterfly',
        price: 1500,
        features: ['Learn Butterfly in 4 to 7 days', 'Competition training', '2 hrs'],
        image: butterfly
    },
    {
        title: 'Pregnant Woman',
        slug: 'pregnant-woman',
        price: 1000,
        features: ['4 lessons per week', 'Special techniques', '2 hrs'],
        image: pregnant
    },
    {
        title: 'Special Needs',
        slug: 'special-needs',
        price: 1200,
        features: ['4 lessons per week', 'Specialized care', '2 hrs'],
        image: special
    }
];
