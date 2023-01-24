import { render, screen } from '@testing-library/react'
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { urlFor } from '../lib/client';

jest.mock('../lib/client', () => {
    return {
      urlFor: jest.fn().mockReturnValue('mocked-url'),
    };
  });

describe("HeroBanner component test", () => {
  let heroBanner;
  beforeEach(() => {
    heroBanner = {
      smallText: 'Beats Solo',
      midText: 'Wireless Headphones',
      largeText1: 'New Arrival',
      image: {url: 'test.jpg'},
      product: 'test-product',
      buttonText: 'Shop Now',
      desc: 'Experience the best sound quality'
    };
  });

  test("should render the correct small text", () => {
    render(<HeroBanner heroBanner={heroBanner} />);
    expect(screen.getByText(heroBanner.smallText)).toBeInTheDocument();
  });

  test("should render the correct mid text", () => {
    render(<HeroBanner heroBanner={heroBanner} />);
    expect(screen.getByText(heroBanner.midText)).toBeInTheDocument();
  });

  test("should render the correct large text", () => {
    render(<HeroBanner heroBanner={heroBanner} />);
    expect(screen.getByText(heroBanner.largeText1)).toBeInTheDocument();
  });

  test("should render the correct image url", () => {
    render(<HeroBanner heroBanner={heroBanner} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', urlFor(heroBanner.image));
  });

  test("should render the correct link", () => {
    render(<HeroBanner heroBanner={heroBanner} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', `/product/${heroBanner.product}`);
  });

  test("should render the correct button text", () => {
    render(<HeroBanner heroBanner={heroBanner} />);
    expect(screen.getByText(heroBanner.buttonText)).toBeInTheDocument();
  });

  test("should render the correct description text", () => {
    render(<HeroBanner heroBanner={heroBanner} />);
    expect(screen.getByText(heroBanner.desc)).toBeInTheDocument();
  });
});