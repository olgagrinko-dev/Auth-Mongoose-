"use client"
import Header from "@/components/Header/Header"
import style from "./auth.module.css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export default function Auth() {
    return (
        <div>
            <Header />
            <div className={style.authorization}>
                <h1>Authorization</h1>

                <TextField fullWidth label="email" id="text" />
                <TextField fullWidth label="password" id="text" />

                <Button variant="contained">Sign In</Button>

            </div>
        </div>
    )
}