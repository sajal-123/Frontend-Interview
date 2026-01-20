import { Header } from "./Header"
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="w-full mx-auto py-6 h-full overflow-auto scrollbar-none">
        <Outlet />
      </main>
    </div>
  );
}
