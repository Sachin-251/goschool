import { NextResponse } from "next/server";
import { join } from 'path';
import { writeFile } from "fs/promises";
import prisma from "@/utils/connect";

export const POST = async (req, res) => {
    const data = await req.formData();
    let form;
    let image = data.get("file");
    for(let [key, value] of data.entries()){
        if(key === "school"){
            form = value;
        }
    }
    const formData = JSON.parse(form);
    // console.log(formData)
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = join(process.cwd(), 'public/schoolImages/'+ formData.picture);
    try {
        await writeFile(path, buffer);
        const school = await prisma.schools.create({
            data: {
                name: formData.schoolName,
                address: formData.schoolAddress,
                city: formData.city,
                state: formData.state,
                email: formData.email,
                phone: formData.phone,
                image: formData.picture,
            }
        })

        return new NextResponse(JSON.stringify(school, {status: 201}));
    } catch (error) {
        return new NextResponse(JSON.stringify({Error: error}, {status: 500}));
    }
    
}


export const GET = async (req, res) => {
    
    try {
        const schools = await prisma.schools.findMany({
            orderBy: {
                name: "asc"
            }
        });
        // console.log(schools)
        return new NextResponse(JSON.stringify(schools, {status: 200}));
    } catch (error) {
        return new NextResponse(JSON.stringify({Error: error}, {status: 500}));
    }
}