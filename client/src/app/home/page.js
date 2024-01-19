import Header from "@/components/Header/Header";
import style from "./home.module.css";

export default function Reg() {

    return (
        <div className={style.homePage}>
            <Header />
            <h1>Home</h1>
            <p>Вы авторизованы в системe!</p>
        </div>
    )
}