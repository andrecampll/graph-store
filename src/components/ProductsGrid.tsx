import { Grid } from '@chakra-ui/react';
import { Product, Props as ProductProps } from './Product';

type Props = {
  products: Omit<ProductProps, 'onAddClick'>[];
  onAddClick: (product: Omit<ProductProps, 'onAddClick'>) => void;
};

export const ProductsGrid = ({ products, onAddClick }: Props) => (
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
    {products?.map(product => (
      <Product
        onAddClick={() => onAddClick(product)}
        key={product.name}
        {...product}
      />
    ))}
  </Grid>
);
