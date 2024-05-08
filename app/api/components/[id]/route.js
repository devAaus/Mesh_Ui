import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
    const { id } = params;

    try {

        await prisma.component.update({
            where: { id },
            data: { views: { increment: 1 } },
        });

        const post = await prisma.component.findUnique({ where: { id } });
        if (!post) {
            return new NextResponse(
                JSON.stringify({ message: "Post not found" }, { status: 404 })
            );
        }

        return new NextResponse(JSON.stringify({ post }, { status: 200 }));
    } catch (error) {
        console.error("Error fetching post:", error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};
