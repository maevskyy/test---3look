import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id: idToUpdate } = params
    const {condition} = await req.json()
    try {
        await prisma.category.update(
            { where: { id: Number(idToUpdate) }, data: { active: condition } })
        return NextResponse.json({ ok: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ ok: false, message: "Category didnt updated", error }, { status: 400 })
    }

}


export const DELETE = async (_: any, { params }: { params: { id: string } }) => {
    const { id: idToDelete } = params
    try {
        await prisma.category.delete({ where: { id: Number(idToDelete) } })
        return NextResponse.json({ ok: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ ok: false, message: "Category not deleted", error }, { status: 400 })
    }
}