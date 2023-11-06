import { NextResponse, NextRequest } from "next/server";
import prisma from '@/prisma/client'

// drag and drop
export const PATCH = async (req: NextRequest) => {
    const newData = await req.json()
    try {
        if (newData.length === 0) {
            return NextResponse.json({ ok: false, message: 'You cant update all category with empty data (ну хотя бы что-то дай пж)' }, { status: 404 })
        }
        await prisma.category.deleteMany({});
        await prisma.category.createMany({
            data: newData,
        });
        const allCategories = await prisma.category.findMany()
        return NextResponse.json({ ok: true, data: allCategories }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ ok: false, message: 'Database error', error }, { status: 500 })

    }
}

export const GET = async () => {
    try {
        
        const allCategories = await prisma.category.findMany()
        if (allCategories.length === 0) {
            return NextResponse.json({ ok: true, message: 'No categories found', data: [] }, { status: 404 });
        }
        return NextResponse.json({ ok: true, data: allCategories }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ ok: false, message: 'Database error', error }, { status: 500 })
    }
}

//create category
export const POST = async (req: NextRequest) => {
    const { title: categoryTitle } = await req.json()
    try {
        if (categoryTitle.length === 0) {
            return NextResponse.json({ ok: false, message: 'You cant create category with empty title (ну хотя бы одну букву напиши пж)' }, { status: 404 })
        }
        const createdCategory = await prisma.category.create({ data: { title: categoryTitle } })
        return NextResponse.json({ ok: true, data: createdCategory }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ ok: false, message: "Category not created", error }, { status: 400 })
    }
}
