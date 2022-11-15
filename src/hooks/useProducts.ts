import { useQuery } from '@tanstack/react-query';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface Rating {
  rate: number;
  count: number;
}

const useProducts = (category: string) => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: [category],
    queryFn: () => fetch(`https://fakestoreapi.com/products/category/${category}`).then(res => res.json()),
  });

  return { products, isLoading };
};

export default useProducts;
