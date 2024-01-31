import { BillboardProps } from "@/interfaces";

const Billboard = ({ data }: BillboardProps) => {
  return (
    <main className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <section
        className="rounded-xl relative aspect-square w-full h-[500px] bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 bg-gray-200/80">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.label}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Billboard;
