import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";

import Billboard from "@/components/Billboard";
import Container from "@/components/shared/Container";
import Filter from "@/components/shared/filters/Filter";
import MobileFilters from "@/components/shared/filters/MobileFilters";
import NoResults from "@/components/shared/NoResults";
import ProductCard from "@/components/shared/product/ProductCard";

export const revalidate = 0;

export interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <main className="bg-white">
      <Container>
        <Billboard data={category.billboard} />

        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-5">
            <div className="block lg:hidden">
              <MobileFilters sizes={sizes} colors={colors} />
            </div>

            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 ? (
                <NoResults />
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} data={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default CategoryPage;
