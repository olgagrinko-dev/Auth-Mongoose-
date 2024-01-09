import Link from "next/link"

export default function Header() {
    return (
        <div>
            <p><Link href='/auth'>Go to authorization page</Link></p>
            <p><Link href='/reg'>Go to registration page</Link></p>
            <p><Link href='/'>Go to main page</Link></p>
        </div>
    )
}