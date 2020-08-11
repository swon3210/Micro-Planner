import React from 'react';
import { render } from '@testing-library/react';
import PlanCardList from './PlanCardList';

test('PlanCardList', () => {
  const { getByText } = render(<PlanCardList />);
  
});
