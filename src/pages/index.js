import Head from "next/head";
import { Inter } from "next/font/google";
import "../styles/Home.module.css";
/*import LoginLayout from "./Login/LoginLayout";
import Login from "@/pages/pages/account/login";
import Register from "@/pages/pages/account/register";*/
import Dashboard from "./admin/default/Home/Home";
import LoginDash from "./admin/default/Login/LoginDash";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Head>
        <title>TodoList</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
           
      <LoginDash/>
      
    </>
  );
}
