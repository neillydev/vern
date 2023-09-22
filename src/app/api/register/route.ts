import { NextApiResponse, NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { baseURL } from '../config';

type RegisterRequest = {
    email: string;
    password: string;
    confirmPassword: string;
}

export const POST = async (req: Request, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { email, password, confirmPassword }: RegisterRequest = await req.json();

    if (!email || !password) {
        return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
    }

    try {

        const response = await fetch(`${baseURL}/api/auth/register`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    email,
                    password,
                    confirmPassword
                 })
            }
        );

        if (!response.ok) {
            throw new Error('API response was not ok.');
        }

        if (response.status  === 201) {
            return NextResponse.json({ status: 201 });
        } else {
            return NextResponse.json({ message: 'Registration failed.' }, { status: 400 });
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Server error.' }, { status: 500 });
    }
}
