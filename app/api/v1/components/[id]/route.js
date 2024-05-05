import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
    const { id } = params;

    try {
        const comp = await prisma.component.update({
            where: { id },
            data: { views: { increment: 1 } },
        });

        return new NextResponse(JSON.stringify(comp, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};