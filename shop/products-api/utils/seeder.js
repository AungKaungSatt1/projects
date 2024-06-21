const { faker } = require("@faker-js/faker");

const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient('mongodb://localhost');
const db = client.db("shop");

const number_of_products = 8;

async function seedProducts() {
    await db.collection('products').deleteMany({});

    let data = [];

    for (let i = 0; i <= number_of_products; i++) {
        let name = faker.commerce.productName;
        let price = faker.commerce.price;

        data.push({
            name: `${name('')}`,
            price: `$${price({ min: 0, max: 100})}`,
        });
    }
    try {
        return await db.collection("products").insertMany(data);
    } finally {
        console.log('Products seeding done');
    }
}

seedProducts();