import navigation from "@/lib/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <header>
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt="Логотип" width={34} height={34} />
        </Link>
        <div>
          <p>PRINT STUDIO</p>
          <span>Москва • «тонкие армянские ноты»</span>
        </div>
      </div>
      <nav>
        <ul>
          {navigation.map((e, i) => {
            return (
              <li key={e.href}>
                <Link href={e.href}>{e.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Button>Оставить заявку</Button>
    </header>
  );
}
