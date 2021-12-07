import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('it should display the component correctly with the custom image', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://enrique.jpg" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('it should show the component with the product image', () => {
    const wrapper = renderer.create(
        <ProductCard product={product2}>
            {
                () => (
                    <ProductImage />
                )
            }
        </ProductCard>
      );
      expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
