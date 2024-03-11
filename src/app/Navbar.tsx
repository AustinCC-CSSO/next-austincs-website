import React from 'react';
import Link from 'next/link';

export function Navbar() {
    return (
        <main>
            <nav className="bg-sky-800 text-yellow-100 p-1 flex justify-between items-center">
                <Link className="m-2 border-opacity-50" href="/">
                    Riverhacks
                </Link>
                <div className="flex ">
                    <Link className="m-2" href="/about">
                        About
                    </Link>
                    <Link className="m-2" href="/contact">
                        Contact
                    </Link>
                    <Link className="m-2" href="/blog">
                        Sponsors
                    </Link>
                </div>
            </nav>
        </main>
    );
};