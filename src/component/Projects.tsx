import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import promoImage from "../assets/nopromo.png";
import logo from "../assets/facebook-bg-png.png";

type Project = {
    id: number;
    title: string;
    category: "Residential" | "Commercial";
    location: string;
    capacity: string;
    images: string[]; // unang picture ang magiging cover
};

// SAMPLE DATA: palitan ng totoong projects at pictures mo.
// Kapag ginawa mong [] ito, lalabas ulit ang "No projects yet".
const projects: Project[] = [
    {
        id: 1,
        title: "Sample Project 1",
        category: "Residential",
        location: "Lungsod / Probinsya",
        capacity: "0 kW",
        images: [promoImage, logo],
    },
    {
        id: 2,
        title: "Sample Project 2",
        category: "Commercial",
        location: "Lungsod / Probinsya",
        capacity: "0 kW",
        images: [promoImage, logo],
    },
    {
        id: 3,
        title: "Sample Project 3",
        category: "Residential",
        location: "Lungsod / Probinsya",
        capacity: "0 kW",
        images: [promoImage],
    },
];

const filters = ["All", "Residential", "Commercial"] as const;

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    const [index, setIndex] = useState(0);
    const total = project.images.length;

    const prev = () => setIndex((i) => (i - 1 + total) % total);
    const next = () => setIndex((i) => (i + 1) % total);

    // Keyboard controls + i-lock ang scroll habang bukas ang modal
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
            if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
        };
        const oldOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = oldOverflow;
            window.removeEventListener("keydown", handleKey);
        };
    }, [onClose, total]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label={project.title}
                className="w-full max-w-3xl overflow-hidden rounded-xl bg-gray-900 text-white"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative bg-black">
                    <img
                        className="h-[60vh] w-full object-contain"
                        src={project.images[index]}
                        alt={`${project.title} photo ${index + 1}`}
                    />
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        autoFocus
                        className="absolute right-3 top-3 h-10 w-10 rounded-full bg-black/60 hover:bg-green-700"
                    >
                        ✕
                    </button>

                    {total > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={prev}
                                aria-label="Previous photo"
                                className="absolute left-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/60 text-2xl hover:bg-green-700"
                            >
                                ‹
                            </button>
                            <button
                                type="button"
                                onClick={next}
                                aria-label="Next photo"
                                className="absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/60 text-2xl hover:bg-green-700"
                            >
                                ›
                            </button>
                            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs">
                                {index + 1} / {total}
                            </span>
                        </>
                    )}
                </div>
                <div className="p-5">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <p className="text-sm text-gray-300">
                        {project.category} • {project.location} • {project.capacity}
                    </p>
                </div>
            </div>
        </div>
    );
}

function Projects() {
    const [filter, setFilter] = useState<(typeof filters)[number]>("All");
    const [selected, setSelected] = useState<Project | null>(null);

    const shown = projects.filter((p) => filter === "All" || p.category === filter);

    return (
        <>
            <section className="w-full min-h-200 bg-gray-900 px-6 py-16 text-white">
                {projects.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center">
                        <img className="h-64 object-contain" src={promoImage} alt="" />
                        <h1 className="mt-4 text-2xl font-bold">NO PROJECTS YET</h1>
                        <p className="mt-1 text-sm">
                            Stay tuned for our latest updates via our social media account
                        </p>
                    </div>
                ) : (
                    <div className="mx-auto max-w-6xl">
                        <h1 className="text-center text-3xl font-bold">OUR PROJECTS</h1>
                        <p className="mt-2 text-center text-sm text-gray-300">
                            Click a project to see more photos
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            {filters.map((f) => (
                                <button
                                    key={f}
                                    type="button"
                                    onClick={() => setFilter(f)}
                                    aria-pressed={filter === f}
                                    className={`rounded-full px-5 py-2 text-sm transition-colors ${
                                        filter === f
                                            ? "bg-green-600"
                                            : "bg-gray-800 hover:bg-gray-700"
                                    }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>

                        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {shown.map((p) => (
                                <button
                                    key={p.id}
                                    type="button"
                                    onClick={() => setSelected(p)}
                                    className="group overflow-hidden rounded-xl bg-gray-800 text-left transition-transform hover:-translate-y-1"
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            src={p.images[0]}
                                            alt={p.title}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <span className="text-xs font-semibold text-green-400">
                                            {p.category}
                                        </span>
                                        <h2 className="text-lg font-bold">{p.title}</h2>
                                        <p className="text-sm text-gray-300">
                                            {p.location} • {p.capacity}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {shown.length === 0 && (
                            <p className="mt-10 text-center text-gray-400">
                                No {filter.toLowerCase()} projects yet.
                            </p>
                        )}
                    </div>
                )}
            </section>

            {selected && (
                <ProjectModal project={selected} onClose={() => setSelected(null)} />
            )}

            <footer className="w-full bg-green-800 p-8 text-white">
                <div className="flex flex-col items-center justify-around gap-8 md:flex-row">
                    <div className="flex flex-col">
                        <img className="h-50 w-auto object-contain" src={logo} alt="Suntastic Solar Corp logo" />
                        <p className="max-w-sm text-balance">
                            Suntastic Solar Corp is a construction company specializing in
                            solar power technology. Our team of experts is dedicated to
                            finding the solar solution that's right for you. Contact us for
                            a free consultation.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h6>LINKS</h6>
                        <ul className="flex flex-col">
                            {[
                                ["/", "Home"],
                                ["/about", "About"],
                                ["/projects", "Our Projects"],
                                ["/why-solar", "Why Solar"],
                                ["/contact", "Contact Us"],
                            ].map(([to, label]) => (
                                <li key={to}>
                                    <Link to={to} className="transition-colors hover:text-green-400">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h6>CONTACT INFORMATION</h6>
                        <address className="text-balance not-italic">
                            1053 Zabarte Rd,<br />
                            Caloocan City, Philippines<br />
                            near Wadfow Ammena Construction Supplies Trading
                        </address>
                        <p className="break-all">suntasticsolarcorporation@gmail.com</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h6>CONNECT WITH US!</h6>
                        <p>Phone No: 02 8641-6976</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Projects;