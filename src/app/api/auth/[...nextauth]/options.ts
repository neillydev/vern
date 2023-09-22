import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { encode, decode } from 'next-auth/jwt';

import { baseURL } from '../../config';

export const options: NextAuthOptions = {
    pages: {
        signIn: "/auth"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "example@email.com",
                },
                password: {
                    label: "Password:",
                    type: "password",
                },
            },
            async authorize(credentials) {
                //get from API
                console.log('--- AUTHORIZE METHOD REACHED ---');
                const payload = {
                    email: credentials?.email,
                    password: credentials?.password,
                  };

                try {
                    const response = await fetch(`${baseURL}/api/auth/login`,
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                        }
                    );

                    const user = await response.json();

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    if(response.status === 200) {
                        console.log('--- USER LOGIN SUCCESSFUL ---');
                        console.log(user);
                        return user;
                    }
                } catch (error) {
                    return error;
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    jwt: { encode, decode },
    debug: process.env.NODE_ENV === "development",
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
              return {
                ...token,
                id: user.userId,
              }
            }
            return token;
          },
          async session({ session, token, user }: any) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                }
            }
          },
    }
};