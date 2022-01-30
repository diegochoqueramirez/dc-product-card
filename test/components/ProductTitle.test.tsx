import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { product } from '../data/products';

describe('ProductTitle', () => {
  test('debe de mostar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className="custom-style" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
