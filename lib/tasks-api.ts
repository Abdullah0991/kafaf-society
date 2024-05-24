import prisma from "@/lib/prisma";

export const getLatestCase = async (category: number) => {
    return prisma.tasks.findFirst({
        orderBy: { createdAt: 'desc' },
        where: { cash: { lt: prisma.tasks.fields.target }, type: category }
    });
}

export const getCaseById = async (id: number) => {
    return prisma.tasks.findUnique({
        where: { id }
    });
}

export const getCases = (category: number, completed = false) => {
    return prisma.tasks.findMany({
        orderBy: { createdAt: 'desc' },
        where: {
            type: category,
            cash: completed ? { gte: prisma.tasks.fields.target } : { lt: prisma.tasks.fields.target }
        }
    });
}
