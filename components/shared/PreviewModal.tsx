"use client";

import usePreviewModal from "@/hooks/usePreviewModal";

import Modal from "@/components/shared/Modal";
import Gallery from "./gallery/Gallery";
import ProductInfo from "./product/ProductInfo";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="flex flex-col md:flex-row justify-center m-auto w-full gap-8">
        <div className="w-[90%] md:w-[1200px] mx-auto">
          <Gallery images={product.images} />
        </div>

        <div className="">
          <ProductInfo data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
