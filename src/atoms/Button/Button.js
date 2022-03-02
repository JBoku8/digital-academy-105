export const Button = ({ className, text, onClick, type = 'button', children }) => {
  const buttonContent = children ? children : text;

  return (
    <button className={className} onClick={onClick} type={type}>
      {buttonContent}
    </button>
  );
};
