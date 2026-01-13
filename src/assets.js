
export const specialOffers = [
    {
        title: "Nyama Choma Wednesday",
        description: "20% off all meat dishes every Wednesday",
        code: "NYAMA20",
        expires: "31/12/2025"
    },
    {
        title: "Family Feast",
        description: "Buy 3 main dishes, get 1 dessert free",
        code: "FAMILYFEAST",
        expires: "30/11/2025"
    },
    {
        title: "Happy Hour",
        description: "50% off all drinks 4-6pm daily",
        code: "HAPPYHOUR",
        expires: "Ongoing"
    }
];

export const foodImages = {
    pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1381&q=80',
    snacks: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80',
    drinks: 'https://images.unsplash.com/photo-1551023408-9c4ed8d25a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    main: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    desserts: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1557&q=80'
};

export const menuItems = [
    {
        id: 1,
        name: "Nyama Choma Platter",
        price: 300,
        description: "Tender roasted meat served with kachumbari and ugali",
        category: "main",
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        spicy: true,
        popular: true
    },
    {
        id: 13,
        name: "Mutura",
        price: 20,
        description: "mixture of meat, blood, and spices, encased in animal intestines",
        category: "drinks",
        image: '/images/mutura.jpg'
    },

    {
        id: 2,
        name: "Ugali & Sukuma Wiki",
        price: 100,
        description: "Maize meal with braised collard greens and fried fish",
        category: "main",
        image: '/images/ugali.webp',
        vegan: true
    },
    {
        id: 3,
        name: "Smocha",
        price: 80,
        description: "A combination of smokie and chapati",
        category: "main",
        image: '/images/smocha.jpg',
        popular: true
    },
    {
        id: 4,
        name: "Choma",
        price: 70,
        description: "3 soft, flaky flatbreads with beans or vegetables",
        category: "main",
        image: '/images/choma.jpg',
        vegan: true
    },
    {
        id: 5,
        name: "Mandazi Delight",
        price: 60,
        description: "6 pieces of sweet fried dough",
        category: "snacks",
        image: '/images/mandazi.jpg',
        popular: true
    },
    {
        id: 6,
        name: "Samosa Trio",
        price: 30,
        description: "3 spiced pastries with beef, chicken or vegetable filling",
        category: "snacks",
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        spicy: true
    },
    {
        id: 7,
        name: "Tusker Lager",
        price: 300,
        description: "Kenya's premium lager served chilled",
        category: "drinks",
        image: '/images/tusker.webp',
        alcoholic: true
    },
    {
        id: 8,
        name: "Dawa Cocktail",
        price: 450,
        description: "Vodka, honey, lime and sugar - Kenya's signature drink",
        category: "drinks",
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        alcoholic: true,
        popular: true
    },
    {
        id: 9,
        name: "Fresh Juice",
        price: 200,
        description: "Seasonal fruits blended to perfection",
        category: "drinks",
        image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        vegan: true
    },
    {
        id: 10,
        name: "Ice Cream Sundae",
        price: 350,
        description: "Homemade vanilla or chocolate with fruit toppings",
        category: "desserts",
        image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
        id: 11,
        name: "Fruit Salad",
        price: 350,
        description: "Seasonal fruits with yogurt and honey drizzle",
        category: "desserts",
        image: '/images/fruit.webp',
        vegan: true
    },
    {
        id: 12,
        name: "Kenyan Coffee",
        price: 200,
        description: "Freshly brewed from Kenyan highlands",
        category: "drinks",
        image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }

];

export const galleryImages = [
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    '/images/choma.jpg',
    '/images/tusker.webp'
];