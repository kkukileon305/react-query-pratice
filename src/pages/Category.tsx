import { useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

const Category = () => {
  const { category } = useParams<{ category: string }>();

  if (!category) return <div>잘못된 페이지</div>;

  const { isLoading, products } = useProducts(category as string);

  if (isLoading || !products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Category;
