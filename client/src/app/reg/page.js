"use client"
import Header from "@/components/Header/Header";
import style from "./reg.module.css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function Reg() {
    const [inp, setInput] = useState({ name: "", surname: "", age: "", email: "", password: "" });
    const router = useRouter();

    function fillInp(e) {
        setInput({ ...inp, [e.target.name]: e.target.value });
    }

    async function regUser() {
        const data = await axios.post("http://localhost:3001/user", inp, {
            withCredentials: true
        })
        console.log(data);
        router.push('/home');
    }

    return (
        <div>
            <Header />
            <div className={style.registration}>
                <div className={style.titleReg}>
                <div className={style.imgReg}></div>
                <h1>Registration</h1>
                </div>
                <TextField onChange={fillInp} fullWidth label="name" id="text" name="name" />
                <TextField onChange={fillInp} fullWidth label="surname" id="text" name="surname" />
                <TextField onChange={fillInp} fullWidth label="age" id="text" name="age" />
                <TextField onChange={fillInp} fullWidth label="email" id="text" name="email" />
                <TextField onChange={fillInp} fullWidth label="password" id="text" name="password" />

                <Button onClick={regUser} variant="contained">Sign Up</Button>
            </div>
        </div>
    )
}