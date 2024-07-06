"use client";
import React from 'react';
import Link from 'next/link';
import { MenuItemProps } from './types';

const MenuItem = ({ text, slug, isActive, variant }: MenuItemProps) => {
    return (
        <li className={`mr-5`}>
            <Link
                href={`/?tag=${slug}`}
                scroll={false}
                className={`${isActive ? 'font-bold text-black' : ''} ${variant}`}
            >
                {text}
            </Link>
        </li>
    );
};

export default MenuItem;

