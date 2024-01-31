import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";

import Container from "@/components/shared/Container";
import ProductsList from "@/components/shared/ProductsList";

import { Product } from "@/interfaces";

export interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <main className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div>Gallery</div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">Info</div>
          </div>

          <hr className="my-10" />

          <ProductsList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </main>
  );
};

export default ProductPage;
