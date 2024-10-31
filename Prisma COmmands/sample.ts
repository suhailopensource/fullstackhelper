import prisma from "../lib/db";

const data = await prisma.user.findUnique({
  where: {
    id: userId,
  },
  select: {
    firstName: true,
    lastName: true,
    email: true,
  },
});

const data = await prisma.product.findMany({
  select: {
    price: true,
    smallDescription: true,
    category: true,
    name: true,
    id: true,
    images: true,
  },
  take: 4,
  orderBy: {
    createdAt: "desc",
  },
});

const data = await prisma.product.findUnique({
  where: {
    id: id,
  },
  select: {
    category: true,
    description: true,
    smallDescription: true,
    name: true,
    images: true,
    price: true,
    createdAt: true,
    id: true,
    User: {
      select: {
        profileImage: true,
        firstName: true,
      },
    },
  },
});

actions;

const data = await prisma.user.update({
  where: {
    id: user.id,
  },
  data: {
    firstName: validateFields.data.firstName,
    lastName: validateFields.data.lastName,
  },
});

await prisma.product.create({
  data: {
    name: validateFields.data.name,
    category: validateFields.data.category as CategoryTypes,
    smallDescription: validateFields.data.smallDescription,
    price: validateFields.data.price,
    images: validateFields.data.images,
    productFile: validateFields.data.productFile,
    userId: user.id,
    description: JSON.parse(validateFields.data.description),
  },
});
