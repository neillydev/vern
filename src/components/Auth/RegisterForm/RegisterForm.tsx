'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams, useRouter, redirect } from "next/navigation";
import { ChangeEvent, useState } from "react";

import styles from '../AuthForm.module.css';

enum ErrorType {
    INVALID_EMAIL,
    EMPTY_INPUT_EMAIL,
    EMPTY_INPUT_PASSWORD,
    INVALID_PASSWORD,
    REGISTRATION_FAILURE,
}

export const RegisterForm = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState<ErrorType>();

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/auth";

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);

            const response = await fetch(`/api/register`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: formValues.email,
                        password: formValues.password,
                        confirmPassword: formValues.confirmPassword,
                    })
                }
            );


            if (!response.ok) {
                throw new Error('API response was not ok.');
            }

            const data = await response.json();
            if (response.status === 200) {
                setFormValues({ email: "", password: "", confirmPassword: "" });
                router.push(callbackUrl);
            } else {
                throw new Error('Registration failed.');
            }
        } catch (error: any) {
            setError(ErrorType.REGISTRATION_FAILURE);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <form onSubmit={onSubmit} className={`${styles.inputWrapper} flex flex-col items-center`}>
            <span className={`${styles.authHeader} text-center mb-4`}>
                Sign up for VERN
            </span>
            <input type="text"
                name='email'
                onChange={handleChange}
                placeholder='example@email.com'
                className={`
                ${styles.authInput} mt-4 block w-full appearance-none rounded-lg border border-bluegray-800 
                bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm 
                transition duration-300 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50`} />
            <input type="password"
                name='password'
                onChange={handleChange}
                placeholder='Enter password'
                className={`${styles.authInput} mt-4 block w-full appearance-none rounded-lg border border-bluegray-800 
                bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm 
                transition duration-300 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50`} />
            <input type="password"
                name='confirmPassword'
                onChange={handleChange}
                placeholder='Confirm password'
                className={`${styles.authInput} mt-4 block w-full appearance-none rounded-lg border border-bluegray-800 
                bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm 
                transition duration-300 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50`} />
            <button type="submit" className={`${styles.authModule} ${styles.authBtn} w-full mt-8`}>
                Register
                <div className={`${styles.authModuleBorder}`} />
            </button>
        </form>
    );
};