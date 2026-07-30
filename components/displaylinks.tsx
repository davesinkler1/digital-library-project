'use client'

import { useState } from 'react'
import Link from 'next/link'
import timeAgo from '../lib/time-ago'
import styles from './story.module.css'
import GetBook from '../lib/get-bookname'
import { getCookie, getCookies, setCookie, deleteCookie, hasCookie } from 'cookies-next/client';

export default function DisplayLink({title, author, year, url, pdf}) {

    const handleClick = () => {
        setCookie('pdf_name', pdf);
    };

    return (
        <div className={styles.story}>
            <div className={styles.title}>
                <button onClick={handleClick}>
                <a href={url} rel="noopener noreferrer nofollow" target="_blank">{title}</a>
                </button>
            </div>
            <div className={styles.meta}>
                <span>{author}, {year}</span>
            </div>
        </div>
    )
}