import { Header } from "./Header"
import { Outlet } from "react-router-dom";


export default function MainLayout() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="w-full mx-auto py-6">
                <Outlet />
            </main>
        </div>
    )
}
