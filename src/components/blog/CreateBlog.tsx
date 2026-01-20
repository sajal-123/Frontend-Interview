import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState, type ChangeEvent } from "react";
import { type BlogCategory, type BlogPost } from "@/types";
import { useCreateBlog } from "@/features/blog/hooks";

interface Props {
    open: boolean;
    onClose: () => void;
}

const categories: BlogCategory[] = [
    "FINANCE",
    "TECH",
    "CAREER",
    "EDUCATION",
    "REGULATIONS",
    "LIFESTYLE",
];

export function CreateBlogModal({ open, onClose }: Props) {
    const { mutate, isPending } = useCreateBlog();

    const [form, setForm] = useState<Partial<BlogPost>>({
        title: "",
        description: "",
        content: "",
        category: [], 
        coverImage: "",
    });

    const handleChange = (
        key: keyof Omit<typeof form, "category">,
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm({ ...form, [key]: e.target.value });

    const handleSubmit = () => {
        if (!form.title || !form.content || !form.category) return;

        mutate(form, {
            onSuccess: () => {
                setForm({
                    title: "",
                    description: "",
                    content: "",
                    category: undefined,
                    coverImage: "",
                });
                onClose();
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>Create New Blog</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <Input
                        placeholder="Blog title"
                        value={form.title}
                        onChange={(e) => handleChange("title", e)}
                    />

                    <Textarea
                        placeholder="Short description"
                        value={form.description}
                        onChange={(e) => handleChange("description", e)}
                    />

                    <Input
                        placeholder="Cover image URL"
                        value={form.coverImage}
                        onChange={(e) => handleChange("coverImage", e)}
                    />

                    <Select
                        value={form.category?.[0] ?? ""}
                        onValueChange={(value:BlogCategory) =>
                            setForm({ ...form, category: [value] })
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                    {cat}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Textarea
                        placeholder="Write blog content here..."
                        className="min-h-[140px]"
                        value={form.content}
                        onChange={(e) => handleChange("content", e)}
                    />
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={
                            isPending || !form.title || !form.content || !form.category
                        }
                    >
                        {isPending ? "Creating..." : "Create Blog"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
