import prisma from '@/app/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const {
    firstName,
    lastName,
    email,
    dob,
    age,
    gender,
    weight,
    height,
    weightUnit,
    heightUnit,
    bodyFatPercentage,
    injuries,
    fitnessGoals,
    preferences,
  } = body;

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      dob,
      age,
      gender,
      weight,
      height,
      weightUnit,
      heightUnit,
      bodyFatPercentage,
      injuries,
      fitnessGoals,
      preferences,
    },
  });
  console.log(body);
  return NextResponse.json(user);
}
