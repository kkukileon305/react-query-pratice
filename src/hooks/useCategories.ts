import { useQuery } from '@tanstack/react-query';

const useCategories = () => {
  const {
    data: categories,
    isLoading,
    isError,
    refetch,
    isStale,
  } = useQuery<string[]>({
    queryKey: ['getCategories'],
    queryFn: () => fetch('https://fakestoreapi.com/products/categories').then(res => res.json()),
  });

  return { categories, isLoading, isError, refetch, isStale };
};

export default useCategories;
