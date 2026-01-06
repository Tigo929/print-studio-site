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
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt="Логотип" width={34} height={70} />
        </Link>
        <div>
          <p>PRINT STUDIO</p>
          <span>Москва • «тонкие армянские ноты»</span>
        </div>
      </div>
      <nav>
        <ul>
          {navigation.map((e, i) => {
            const isActiveLink = urlParam === e.href;
            return (
              <li key={e.href}>
                <Link
                  className={isActiveLink ? "nav-link-active" : ""}
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
    </header>
  );
}
