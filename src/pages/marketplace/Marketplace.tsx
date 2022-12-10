import Chevron from "components/icons/Chevron";
import Section from "components/layouts/Section";
import ButtonIcon from "components/common/ButtonIcon";
import ProductCard from "components/views/products/ProductCard";

const Marketplace = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Section
        content={
          <>
            <div
              className="px-5 py-4 flex items-center justify-between 
              drop-shadow bg-white mb-7 rounded-2xl font-normal text-fs-30"
            >
              <ButtonIcon
                className="flex items-center gap-4"
                content={
                  <>
                    Filter <Chevron />
                  </>
                }
              />

              <ButtonIcon
                className="flex items-center gap-4"
                content={
                  <>
                    Sort by <Chevron />
                  </>
                }
              />
            </div>
            <ul className="grid gap-10 md:grid-cols-fluid">
              <li className="px-5">
                <ProductCard />
              </li>
              <li className="px-5">
                <ProductCard />
              </li>
              <li className="px-5">
                <ProductCard />
              </li>
            </ul>
          </>
        }
      />
    </div>
  );
};

export default Marketplace;
