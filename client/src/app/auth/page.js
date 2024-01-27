"use client"
import Header from "@/components/Header/Header"
import style from "./auth.module.css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Auth() {
    const [inp, setInp] = useState({ email: "", password: "" });
    const router = useRouter()

    function fillInp(e) {
        setInp({ ...inp, [e.target.name]: e.target.value });
    }

    async function authUser() {
        console.log(inp);
        const data = await axios.post("http://localhost:3001/user/auth", inp, {
            withCredentials: true
        })
        console.log(data);
        router.push('/home');
    }

    return (
        <div>
            <Header />
            <div className={style.authorization}>
                <div className={style.titleAuth}>
                    <div className={style.imgAuth}></div>
                    <h1>Authorization</h1>
                </div>

                <TextField onChange={fillInp} fullWidth label="email" id="text" name="email" />
                <TextField onChange={fillInp} fullWidth label="password" id="text" name="password" />

                <Button onClick={authUser} variant="contained">Sign In</Button>

            </div>
        </div>
    )
}