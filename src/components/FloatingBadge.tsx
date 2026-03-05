"use client";

import Image from "next/image";

export default function FloatingBadge() {
    return (
        <div className="fixed bottom-6 left-6 z-[9999] pointer-events-none">
            <div className="relative group pointer-events-auto cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <Image
                        src="/mw.png"
                        alt="MW Logo"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
