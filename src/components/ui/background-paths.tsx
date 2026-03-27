import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

function FloatingPaths({ position }: { position: number }) {
    const prefersReducedMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const paths = Array.from({ length: isMobile ? 12 : 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${389 + i * 6}C-${
            380 - i * 5 * position
        } -${389 + i * 6} -${312 - i * 5 * position} ${16 - i * 6} ${
            152 - i * 5 * position
        } ${143 - i * 6}C${616 - i * 5 * position} ${270 - i * 6} ${
            684 - i * 5 * position
        } ${675 - i * 6} ${684 - i * 5 * position} ${675 - i * 6}`,
        color: `rgba(239, 68, 68, ${0.05 + i * 0.015})`,
        width: 0.8 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="absolute inset-x-0 top-0 w-full h-full opacity-50"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: prefersReducedMotion ? 0.3 : [0.3, 0.6, 0.3],
                            pathOffset: prefersReducedMotion ? 0 : [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    children,
    className
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-zinc-950", className)}>
            <div className="absolute inset-0 z-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 w-full container mx-auto">
                {children}
            </div>
        </div>
    );
}
