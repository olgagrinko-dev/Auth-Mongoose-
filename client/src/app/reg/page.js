"use client"
import Header from "@/components/Header/Header";
import style from "./reg.module.css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export default function Reg() {
    return (
        <div>
            <Header />
            <div className={style.registration}>
                <h1>Registration</h1>

                <TextField fullWidth label="name" id="text" />
                <TextField fullWidth label="surname" id="text" />
                <TextField fullWidth label="age" id="text" />
                <TextField fullWidth label="email" id="text" />
                <TextField fullWidth label="password" id="text" />

                <Button variant="contained">Sign Up</Button>
            </div>
        </div>
    )
}