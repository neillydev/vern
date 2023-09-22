'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

import styles from '../AuthForm.module.css';

enum ErrorType {
    INVALID_EMAIL,
    EMPTY_INPUT,
    ACCOUNT_NOT_FOUND,
}

type LoginFormProps = {
    email: string;
};

export const LoginForm = ({ email }: LoginFormProps) => {

    /**
     * When logging in with email:
     *  if email and pass is valid:
     *      if email is verified:
     *          callback to dashboard or home (depending)
     *      else:
     *          show a "Verify your email" message on the page
     */

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: email,
        password: "",
    });
    const [error, setError] = useState("");

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            console.log(formValues);
            const res = await signIn("credentials", {
                redirect: false,
                email: formValues.email,
                password: formValues.password,
            });

            setLoading(false);

            console.log(res);
            if (!res?.error) {
                router.push(callbackUrl);
                setFormValues({ email: "", password: "" });
            } else {
                setError("invalid email or password");
            }
        } catch (error: any) {
            setLoading(false);
            setError(error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <form onSubmit={onSubmit} className={`${styles.inputWrapper} flex flex-col items-center`}>
            <span className={`${styles.authHeader} text-center mb-4`}>
                Login
            </span>
            <input type="text"
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='example@email.com'
                className={`${styles.authInput} block w-full appearance-none rounded-lg border border-bluegray-800 bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50`} />
            <input type="password"
                name='password'
                onChange={handleChange}
                placeholder='Enter Your Password'
                className={`${styles.authInput} mt-4 block w-full appearance-none rounded-lg border border-bluegray-800 bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50`} />
            <button type="submit" className={`${styles.authModule} ${styles.authBtn} w-full mt-8`}>
                Continue
                <div className={`${styles.authModuleBorder}`} />
            </button>
        </form>
    );
};