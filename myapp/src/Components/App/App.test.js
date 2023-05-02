import React from 'react';
import { render, screen } from '@testing-library/react';
import ResourceListDisplay from '../ResourceList/ResourceList.js'
import resource from '../Resource/Resource.js'


test('checks that the links are displayed on the page', () => {
  render(<ResourceListDisplay resource={resource} />);
  resource.forEach((item) => {
    const linkElement = screen.getByAltText(item.imgAlt);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', item.link);
  });
});