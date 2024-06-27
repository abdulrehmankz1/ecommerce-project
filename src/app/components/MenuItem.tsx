"use client";
import React from 'react';
import Link from 'next/link';
import { MenuItemProps } from './types';


const MenuItem = ({ text, slug, isActive, variant, onClick }: MenuItemProps) => {
    const handleClick = () => {
        onClick(slug);
    };

    return (
        <li className={`mr-5`}>
            <Link
                href={`/?tag=${slug}`}
                scroll={false}
                onClick={handleClick}
                className={`${isActive ? 'font-bold text-black' : ''} ${variant}`}
            >
                {text}
            </Link>
        </li>
    );
};

export default MenuItem;

