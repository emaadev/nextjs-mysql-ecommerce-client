import { NameStoreProps } from "@/interfaces";

const Footer = ({ nameStore }: NameStoreProps) => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2024 {nameStore}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
