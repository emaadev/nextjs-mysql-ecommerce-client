"use client";

import Image from "next/image";

import { ProductCardProps } from "@/interfaces";
import IconButton from "@/components/shared/IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/shared/Currency";
import { useRouter } from "next/navigation";

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <header className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt={data?.name}
          className="aspect-square object-cover rounded-md"
        />

        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-800 opacity-0 group-hover:opacity-100 rounded-b-xl transition" />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </header>

      <section>
        <h2 className="font-semibold text-lg">{data.name}</h2>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </section>

      <footer className="flex items-center justify-between">
        <Currency value={data?.price} />
      </footer>
    </article>
  );
};

export default ProductCard;
