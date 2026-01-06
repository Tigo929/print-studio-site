"use client";
import navigation from "@/lib/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
export default function Header() {
  const urlParam = usePathname();
  return (
    <header>
      <div className="container mx-auto flex h-18.25 items-center justify-between gap-6">
        <div className="flex">
          <Link href={"/"}>
            <Image src={Logo} alt="Логотип" width={34} height={70} />
          </Link>
          <div>
            <p>PRINT STUDIO</p>
            <span>Москва • «тонкие армянские ноты»</span>
          </div>
        </div>
        <nav className="h-10">
          <ul className="flex h-full items-center gap-6">
            {navigation.map((e) => {
              const isActiveLink = urlParam === e.href;
              return (
                <li key={e.href} className="h-full">
                  <Link
                    className={`${isActiveLink ? "nav-link-active" : ""} flex h-full w-full items-center justify-center p-2`}
                    href={e.href}
                  >
                    {e.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button>Оставить заявку</Button>
      </div>
    </header>
  );
}
