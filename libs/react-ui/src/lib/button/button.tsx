import buttonStyles from './button.module.css';
import { ButtonProps } from '@with-nx/types';

export const Button = ({
  icon,
  disabled,
  style,
  loading,
  className = '',
  type = 'button',
  ...props
}: ButtonProps): JSX.Element => (
  <button
    className={`button ${buttonStyles.button} ${className} ${
      icon ? `button-group ${buttonStyles.buttonRow}` : ''
    }`}
    disabled={disabled || loading}
    style={style}
    type={type}
    {...props}
  >
    {icon ? icon : null} {props.children}
    {loading ? (
      <div className={`button-loader ${buttonStyles.loader}`}></div>
    ) : null}
  </button>
);

export default Button;
