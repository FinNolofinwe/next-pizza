import { Prisma } from '@prisma/client';
import { categories, ingredients, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt'

const randomDecimalNumber = (min: number, max: number) => Math.floor((Math.random() * (max - min) * 10 + min * 10) / 10);


const generateProductItem = (productId: number, pizzaType?: 1 | 2, size?: 20 | 30 | 40) => {
    return {
        productId,
        price: randomDecimalNumber(190, 600),
        size,
        pizzaType,
        // price: randomNumber(190, 600),
        // carbs: randomNumber(10, 30),
        // fats: randomNumber(5, 15),
        // kcal: randomNumber(180, 300),
        // proteins: randomNumber(20, 45),
        // weight: randomNumber(400, 650),
    } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {

    await prisma.user.createMany({
        data: [{
            fullName: 'User Test',
            email: 'R0dYH@example.com',
            password: hashSync('111111111', 10),
            verified: new Date,
            role: "USER"
        }, {
            fullName: 'Admin Test',
            email: 'R0dopH@example.com',
            password: hashSync('111111111', 10),
            verified: new Date,
            role: "ADMIN"
        }]
    })

    await prisma.category.createMany({
        data: categories
    })

    await prisma.ingredient.createMany({
        data: ingredients
    })

    await prisma.product.createMany({ data: products })


    const pizza1 = await prisma.product.create({
        data: {
            name: "Пепперони фреш",
            imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.jpg",
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5)
            }
        }
    });


    const pizza2 = await prisma.product.create({
        data: {
            name: "Сырная",
            imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.jpg",
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5, 10)
            }
        }
    });

    const pizza3 = await prisma.product.create({
        data: {
            name: "Чилл Грилл",
            imageUrl: "https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg",
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10, 15)
            }
        }
    })

    await prisma.productItem.createMany({
        data: [
            // Pizzas
            generateProductItem(pizza1.id, 1, 20),
            generateProductItem(pizza1.id, 2, 30),
            generateProductItem(pizza1.id, 2, 40),

            generateProductItem(pizza2.id, 1, 20),
            generateProductItem(pizza2.id, 1, 20),
            generateProductItem(pizza2.id, 1, 30),
            generateProductItem(pizza2.id, 2, 30),
            generateProductItem(pizza2.id, 1, 40),
            generateProductItem(pizza2.id, 2, 40),

            generateProductItem(pizza3.id, 1, 20),
            generateProductItem(pizza3.id, 2, 30),
            generateProductItem(pizza3.id, 2, 40),

            // Rest products

            generateProductItem(1),
            generateProductItem(2),
            generateProductItem(3),
            generateProductItem(4),
            generateProductItem(5),
            generateProductItem(6),
            generateProductItem(7),
            generateProductItem(8),
            generateProductItem(9)
        ]
    })


    await prisma.cart.createMany({
        data: [
            { userId: 1, totalAmount: 0 },
            { userId: 2, totalAmount: 0 }
        ]
    })

    await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
                connect: [{ id: 1 }, { id: 2 }, { id: 3 }]
            }
        },


    })
}

async function resetUserSequence() {
    await prisma.$executeRawUnsafe(`
    SELECT setval(pg_get_serial_sequence('"User"', 'id'), COALESCE((SELECT MAX(id) FROM "User"), 0) + 1, false);
  `);
}
async function down() {
    await prisma.productItem.deleteMany();
    await prisma.product.deleteMany();
    await prisma.ingredient.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
    await prisma.cartItem.deleteMany();
    await prisma.cart.deleteMany();

    await prisma.$executeRawUnsafe(`
    SELECT setval(pg_get_serial_sequence('"User"', 'id'), 1, false);
  `);
    await prisma.$executeRawUnsafe(`
    SELECT setval(pg_get_serial_sequence('"Category"', 'id'), 1, false);
  `);
    await prisma.$executeRawUnsafe(`
    SELECT setval(pg_get_serial_sequence('"Product"', 'id'), 1, false);
  `);
    await prisma.$executeRawUnsafe(`
    SELECT setval(pg_get_serial_sequence('"Ingredient"', 'id'), 1, false);
  `);
    await prisma.$executeRawUnsafe(`
    SELECT setval(pg_get_serial_sequence('"ProductItem"', 'id'), 1, false);
  `);
    await prisma.$executeRawUnsafe(`
    SELECT setval(pg_get_serial_sequence('"Cart"', 'id'), 1, false);
  `);
    await prisma.$executeRawUnsafe(`
    SELECT setval(pg_get_serial_sequence('"CartItem"', 'id'), 1, false);
  `);
}

async function main() {
    try {
        await down()
        await up()
    } catch (e) {
        console.log(e)
    }

}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })