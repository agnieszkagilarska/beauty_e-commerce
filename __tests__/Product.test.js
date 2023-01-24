import { render, screen } from '@testing-library/react'
import Product from '../components/Product'
import { urlFor } from '../lib/client';

import React from 'react';

jest.mock('../lib/client', () => {
    return {
      urlFor: jest.fn().mockReturnValue('mocked-url'),
    };
  });
describe("Product component test", () => {
  let product;
  beforeEach(() => {
    product = {
      image: [{url: 'test.jpg'}],
      name: 'Test Product',
      slug: {current: 'test-product'},
      price: '100'
    };
  });

  test("should render the correct product name", () => {
    render(<Product product={product} />);
    expect(screen.getByText(product.name)).toBeInTheDocument();
});

  test("should render the correct product price", () => {
   render(<Product product={product} />);
   expect(screen.getByText(`${product.price} zł`)).toBeInTheDocument();
  });

  test("should render the correct product image url", () => {
    render(<Product product={product} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', urlFor(product.image[0]));
  });

  test("should render the correct link", () => {
    render(<Product product={product} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', `/product/${product.slug.current}`);
});
});