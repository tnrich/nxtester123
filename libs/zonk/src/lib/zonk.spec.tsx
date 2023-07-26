import { render } from '@testing-library/react';

import Zonk from './zonk';

describe('Zonk', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Zonk />);
    expect(baseElement).toBeTruthy();
  });
});
