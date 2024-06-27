// pages/login.js

import Head from "next/head";
import LoginForm from "../components/LoginForm"; // Adjust the path as needed

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - CMS</title>
        <meta name="description" content="Login page for CMS" />
      </Head>
      <LoginForm />
    </>
  );
}
