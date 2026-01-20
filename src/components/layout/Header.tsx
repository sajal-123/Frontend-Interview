import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { CreateBlogModal } from "../blog/CreateBlog";
import { useState } from "react";

const navItems = [
    { label: "Tools", path: "/tools" },
    { label: "Practice", path: "/practice" },
    { label: "Events", path: "/events" },
    { label: "Job Board", path: "/jobs" },
    { label: "Points", path: "/points" },
];

export const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 font-semibold">
                        <img
                            src="/ca_monk_logo.jpg"
                            alt="CA Monk"
                            className="h-8 w-8 rounded object-contain"
                        />
                        <span className="text-base tracking-wide">CA MONK</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navItems.map(item => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    cn(
                                        "relative px-4 py-2 text-sm font-medium rounded-full transition-all",
                                        isActive
                                            ? "text-primary bg-primary/10"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    )
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop Action */}
                    <div className="hidden md:block">
                        <Button className=" px-6">
                            <Link to="/profile">Profile</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden hover:bg-muted rounded-full"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-72 p-0 md:hidden">
                            <div className="flex flex-col h-full">

                                {/* Mobile Header */}
                                <div className="border-b px-6 py-4 font-semibold text-lg">
                                    Menu
                                </div>

                                {/* Mobile Nav */}
                                <nav className="flex flex-col gap-2 px-4 py-6">
                                    {navItems.map(item => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className={({ isActive }) =>
                                                cn(
                                                    "px-4 py-3 rounded-lg text-sm font-medium transition",
                                                    isActive
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                                )
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </nav>

                                <div className="hidden md:block">
                                    <Button onClick={() => setOpen(true)}>
                                        <Plus className="mr-2 h-4 w-4" />
                                        Create Blog
                                    </Button>
                                </div>

                                <CreateBlogModal open={open} onClose={() => setOpen(false)} />

                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </header>
    );
};
