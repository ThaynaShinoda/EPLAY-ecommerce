import { useParams } from 'react-router-dom';
import { Hero } from '../../components/Hero';

export function Product() {
  const { id } = useParams();

  return (
    <>
      <Hero />
    </>
  );
}
