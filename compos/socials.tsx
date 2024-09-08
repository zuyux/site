import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Socials() {
    return (
        <div className="fixed right-4 bottom-4 justify-center items-center">
            <Link href="https://t.me/zuyuxxyz" target="_blank" className="p-4">
                <Image src="/telegram.svg" height={21} width={21} alt="telegram" />
            </Link>
            <Link href="https://youtube.com/@zuyux" target="_blank" className="p-4">
                <Image src="/yt.svg" height={21} width={21} alt="github" />
            </Link>
            <Link href="https://github.com/zuyux" target="_blank" className="p-4">
                <Image src="/github.svg" height={21} width={21} alt="youtube" />
            </Link>
        </div>
    );
}