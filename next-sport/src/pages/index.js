import Layout from 'components/Layout';
import ProductItem from 'components/productItem';
import data from 'utils/data';
export default function Home() {
  return (
    <Layout title={'home-page'}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}> </ProductItem>
        ))}
      </div>
    </Layout>
  );
}
