import { Suspense } from "react";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-brand-black text-white pt-20">
            <Suspense fallback={<div className="text-center py-20">Loading projects...</div>}>
                <Projects />
            </Suspense>
        </main>
    );
}
