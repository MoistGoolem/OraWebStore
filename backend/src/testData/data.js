import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Oliver',
            email: 'admin@example.com',
            password: bcrypt.hashSync("1234", 8),
            isAdmin: true
        },
        {
            name: 'TestUser',
            email: 'user@example.com',
            password: bcrypt.hashSync("1234", 8),
            isAdmin: false

        },
    ],
    products: [
        {
            _id:'1',
            name: 'Test Product',
            category: 'Test Category',
            image: '/images/products/p1.jpg',
            price: 120,
            countInStock: 10,
            species: 'Test Species',
            rating: 4.5,
            numReviews: 10,
            description: "This is a test product"
        },
        {
            _id:'2',
            name: 'Test Product2',
            category: 'Test Category',
            image: '/images/products/p2.jpg',
            price: 100,
            countInStock: 7,
            species: 'Test Species',
            rating: 2.0,
            numReviews: 12,
            description: "This is another test product"
        },
        {
            _id:'3',
            name: 'Test Product3',
            category: 'Test Category',
            image: '/images/products/p3.jpg',
            price: 200,
            countInStock: 0,
            species: 'Test Species',
            rating: 4.0,
            numReviews: 23,
            description: "This is another test product"
        },
    ],
};

export default data;