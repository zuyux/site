import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Info() {
    return (
        <div>
            <Link href="/info">
                <Image src="/info.svg" height={21} width={21} alt="info" className='fixed top-4 left-4 opacity-25'></Image>
            </Link>
        </div>
    );
}