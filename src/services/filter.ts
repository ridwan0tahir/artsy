interface IProductData {
  id: string;
  name: string;
  image_url: string;
  description: string;
  country: string;
  artist: string;
  creators: {
    id: string;
    name: string;
    photo: string;
  }[];
  status: string[];
  price: number;
  views: number;
  category: string;
}

let catFlag = false;
let artFlag = false;

const filterProducts = (
  categories: string[],
  artists: string[],
  price: { min: number; max: number },
  products: IProductData[]
) => {
  let filteredProducts: IProductData[] = [];
  if (categories.length > 0) {
    for (let category of categories) {
      if (!catFlag) {
        const filtered = products.filter((prod) => prod.category === category);
        filteredProducts = [...filteredProducts, ...filtered];
        catFlag = false;
        artFlag = true;
      } else {
        filteredProducts = filteredProducts.filter(
          (prod) => prod.category === category
        );
        catFlag = true;
      }
    }
  }

  if (artists.length > 0) {
    for (let artist of artists) {
      if (!artFlag) {
        const filtered = products.filter((prod) => prod.artist === artist);
        filteredProducts = [...filteredProducts, ...filtered];
        artFlag = false;
        catFlag = true;
      } else {
        filteredProducts = filteredProducts.filter(
          (prod) => prod.artist === artist
        );
        artFlag = true;
      }
    }
  }

  if (price.min > 0 || price.max < 50) {
    filteredProducts = products.filter(
      (prod) => prod.price >= price.min && prod.price <= price.max
    );
  }
  return filteredProducts;
};

self.onmessage = (ev) => {
  const { selectedCategories, selectedArtist, price, products } = ev.data;
  const message = filterProducts(
    selectedCategories,
    selectedArtist,
    price,
    products
  );

  postMessage(message);
};

export default {};
