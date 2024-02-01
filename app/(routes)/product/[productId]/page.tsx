import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";

import Container from "@/components/shared/Container";
import Gallery from "@/components/shared/gallery/Gallery";
import ProductInfo from "@/components/shared/product/ProductInfo";
import ProductsList from "@/components/shared/ProductsList";

export interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const allProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  const suggestedProducts = allProducts.filter(
    (item) => item.id !== product.id
  );

  return (
    <main className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfo data={product} />
            </div>
          </div>

          <hr className="my-10" />

          <ProductsList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </main>
  );
};

export default ProductPage;
