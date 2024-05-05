
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server'

export const GET = async () => {

    try {
        const comps = await prisma.component.findMany()

        return new NextResponse(JSON.stringify({ comps }, { status: 200 }));
    } catch (err) {
        console.error("Error in GET request:", err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};