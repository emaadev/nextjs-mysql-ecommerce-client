import Link from "next/link";

import getCategories from "@/actions/getCategories";

import Container from "@/components/shared/Container";
import MainNav from "@/components/MainNav";
import NavbarActions from "@/components/NavbarActions";

import { NameStoreProps } from "@/interfaces";

const Navbar = async ({ nameStore }: NameStoreProps) => {
  const categories = await getCategories();

  return (
    <header className="border-b">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 lg:ml-0">
            <p className="font-bold text-xl">{nameStore}</p>
          </Link>

          <MainNav data={categories} />

          <NavbarActions />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
