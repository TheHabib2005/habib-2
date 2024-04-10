import { useFormSteps } from "@/store/useStore";
import React from "react";
import CustomLoading from "@/components/(root)/customLoading";
interface IProps {
  params: {
    category: string;
  };
}
const ProductWrapper: React.FC<IProps> = ({ params }) => {
  const { product, isLoading } = useFormSteps();
  if (isLoading) return <CustomLoading />;
  return (
    <div className="text-white">
      {params.category} - {product}
    </div>
  );
};

export default ProductWrapper;
