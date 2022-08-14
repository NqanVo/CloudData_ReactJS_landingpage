import React from 'react';
import Card from './Card';

const Reponsive = 'container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'

const DataCards = [
    {
        Image: 'https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/single.png?raw=true',
        NamePack: 'Single User',
        Price: 149,
        Content: [
            '500 GB Storage',
            '1 User Allowed',
            'Send up to 2GB',
        ]
    },
    {
        Image: 'https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/double.png?raw=true',
        NamePack: 'Double User',
        Price: 219,
        Content: [
            '1 TB Storage',
            '2 User Allowed',
            'Send up to 4GB',
            '2 User Allowed',
            'Send up to 4GB',
        ]
    },
    {
        Image: 'https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/triple.png?raw=true',
        NamePack: 'Triple User',
        Price: 399,
        Content: [
            '3 TB Storage',
            '3 User Allowed',
            'Send up to 10GB',
            '3 TB Storage',
            '3 User Allowed',
            'Send up to 10GB',
        ]
    }
]

const ListCards = () => {
    return (
        <section className={`${Reponsive} grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-16 pt-20 pb-20 px-4`}>
            {
                DataCards.map((item, index) => (
                    <Card
                        key={index}
                        Image={item.Image}
                        NamePack={item.NamePack}
                        Price={item.Price}
                        Content={item.Content}
                    />
                ))
            }
        </section>
    );
};

export default ListCards;