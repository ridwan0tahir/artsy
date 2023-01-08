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

enum Sort {
  NONE,
  LOW,
  HIGH,
  DATE,
}

const sortProducts = (activeSort: Sort, products: IProductData[]) => {
  if (activeSort === Sort.NONE) {
    const data = [...products].sort((itemA, itemB) =>
      itemA.id.localeCompare(itemB.id)
    );
    return data;
  } else if (activeSort === Sort.LOW) {
    const data = [...products].sort(
      (itemA, itemB) => itemA.price - itemB.price
    );
    return data;
  } else if (activeSort === Sort.HIGH) {
    const data = [...products].sort(
      (itemA, itemB) => itemB.price - itemA.price
    );
    return data;
  } else {
    return products;
  }
};

interface IWorkerEvent {
  activeSort: Sort;
  products: IProductData[];
}

self.onmessage = (e: MessageEvent<IWorkerEvent>) => {
  const { activeSort, products } = e.data;
  const message = sortProducts(activeSort, products);
  postMessage(message);
};

self.onerror = (error) => {
  console.log(error);
};

export default {};
