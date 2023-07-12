import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import { Navbar } from '../ui';


interface Props {
    title?: string;
}

export const Layout = ({ title = 'Cookie Master - RomApps', children }: PropsWithChildren<Props>) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav>
                <Navbar />
            </nav>
            <main style={{ padding: '20px 50px' }}>
                {children}
            </main>
        </>
    )
}
