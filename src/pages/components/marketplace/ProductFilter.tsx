import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Checkbox from "components/common/CheckboxButton";

import ProductFilterConfigs from "configs/ProductFilterConfigs";
import RangeSlider from "components/common/RangeSlider";
import ProductData from "data/ProductData";
import { ProductContext } from "providers/ProductProvider";

interface IProductFilter {
  close: () => void;
  products: typeof ProductData;
  setProducts: Dispatch<SetStateAction<typeof ProductData>>;
}
const ProductFilter: FunctionComponent<IProductFilter> = ({
  close,
  products,
  setProducts,
}) => {
  const { category: categoryConfigs, artist: artistConfigs } =
    ProductFilterConfigs;

  const [price, setPrice] = useState<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [selectedArtist, setSelectedArtist] = useState<string[]>([]);

  const worker = useMemo(() => {
    return new Worker("/src/services/filter.ts", {
      name: "worker-filter",
      type: "module",
    });
  }, []);

  const { products: globalP } = useContext(ProductContext);

  useEffect(() => {
    worker.postMessage({ selectedCategories, selectedArtist, price, products });
    worker.onmessage = (ev) => {
      const products = ev.data;
      if (products.length <= 0) return;
      console.log(products);
    };
  }, [selectedCategories, selectedArtist, price.min, price.max]);

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!selectedCategories.includes(value)) {
      setSelectedCategories((current) => [...current, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  const handleArtistChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!selectedArtist.includes(value)) {
      setSelectedArtist((current) => [...current, value]);
    } else {
      setSelectedArtist(selectedArtist.filter((artist) => artist !== value));
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button type="button" onClick={close}>
        FilterSection
      </button>
      <div className="grid space-y-8">
        <div>
          <h3 className="mb-2">Category</h3>
          <div className="grid grid-cols-filter justify-items-start gap-y-2 px-2">
            {categoryConfigs.map((configs) => (
              <Checkbox
                key={configs.id}
                {...configs}
                onChange={handleCategoryChange}
                checked={selectedCategories.includes(configs.label)}
                className="flex flex-row-reverse items-center gap-x-2"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2">Price</h3>
          <p className="mb-4 px-2">{`$${price.min} - $${price.max}`}</p>
          <RangeSlider
            min={0}
            max={50}
            step={1}
            thumbsCap={10}
            onChange={({ min, max }) => setPrice({ min, max })}
            className="px-2"
          />
        </div>

        <div>
          <h3 className="mb-2">Artist</h3>
          <div className="grid grid-cols-filter justify-items-start gap-y-2 px-2">
            {artistConfigs.map((configs) => (
              <Checkbox
                key={configs.id}
                {...configs}
                onChange={handleArtistChange}
                checked={selectedArtist.includes(configs.value)}
                className="flex flex-row-reverse items-center gap-x-2"
              />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductFilter;
