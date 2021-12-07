import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('it should display the component correctly with the custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product - Title" className="custom3-class" />
    );
    // console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('it should show the component with the product name', () => {
    const wrapper = renderer.create(
        <ProductCard product={product1}>
            {
                () => (
                    <ProductTitle />
                )
            }
        </ProductCard>
      );
      expect(wrapper.toJSON()).toMatchSnapshot();
  })
  
});
