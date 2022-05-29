import { Grid } from '@chakra-ui/react';
import { Product, Props as ProductProps } from './Product';

type Props = {
  products: ProductProps[];
};

export const ProductsGrid = ({ products }: Props) => (
  <Grid
    gridTemplateColumns={[
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
      'repeat(3, 1fr)',
    ]}
    gap="6"
    justifyItems="center"
    w="100%"
  >
    {products.map(product => (
      <Product key={product.name} {...product} />
    ))}
  </Grid>
);
