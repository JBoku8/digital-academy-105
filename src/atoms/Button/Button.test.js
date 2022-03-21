import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render using default props', () => {
    // Assertion
    const defaultProps = {
      className: 'default-class',
      text: 'text',
      type: 'button',
    };

    // Act
    render(<Button {...defaultProps} />);

    // Test
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
    expect(screen.getByTestId('buttonElement')).toHaveAttribute('type', defaultProps.type);
  });

  it('should execute onclick function', () => {
    // Assertion
    const defaultProps = {
      className: 'default-class',
      text: 'text',
      type: 'button',
      onClick: jest.fn(),
    };

    // Act
    render(<Button {...defaultProps} />);
    fireEvent.click(screen.getByTestId('buttonElement'));

    // Test
    expect(defaultProps.onClick).toBeCalledTimes(1);
  });
});
