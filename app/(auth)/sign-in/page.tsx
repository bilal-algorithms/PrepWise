import React from 'react'
import AuthForm from "@/components/authForm";

const SignIn = (p0: { email: string; idToken: string; }) => {
    return <AuthForm type="sign-in" />
}
export default SignIn
