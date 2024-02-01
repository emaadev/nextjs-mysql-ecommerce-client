import Currency from "@/components/shared/Currency";

import { Product } from "@/interfaces";
import Button from "../Button";
import { InfoIcon, ShoppingCart } from "lucide-react";

export interface ProductInfoProps {
  data: Product;
}

const ProductInfo = ({ data }: ProductInfoProps) => {
  return (
    <article>
      <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>
      <section className="mt-3 flex items-end justify-between">
        <h2 className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </h2>
      </section>

      <section className="flex flex-col mt-4">
        <p className="text-lg font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          reiciendis quod unde illum molestiae blanditiis libero ducimus
          incidunt, error enim ab, id esse exercitationem!
        </p>
      </section>

      {/* "Out of stock" alert text */}
      <section className="flex flex-row gap-2 mt-4">
        <InfoIcon color="#983b3b" />
        <span className="text-[#983b3b]">
          This product could be out of stock. Please contact us before you buy
          it.
        </span>
      </section>

      <hr className="my-4" />

      <section className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h4 className="font-semibold text-black">Size: </h4>
          <span>{data?.size?.name}</span>
        </div>

        <div className="flex items-center gap-x-4">
          <h4 className="font-semibold text-black">Color: </h4>
          <span
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>

        <div className="mt-10 flex items-center gap-x-3">
          <Button className="flex items-center gap-x-2">
            <ShoppingCart />
            Add To Cart
          </Button>
        </div>
      </section>
    </article>
  );
};

export default ProductInfo;
