import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";

import Billboard from "@/components/Billboard";
import Container from "@/components/shared/Container";
import ProductsList from "@/components/shared/ProductsList";

const HomePage = async () => {
  const billboard = await getBillboard("142f0d39-a256-4438-a48b-12e79bd6d1a6");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
