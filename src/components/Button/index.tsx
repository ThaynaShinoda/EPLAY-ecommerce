import { ButtonContainer, ButtonLink } from './styles';

export type Props = {
  type: 'button' | 'link';
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

export function Button({
  type,
  title,
  to,
  onClick,
  children,
  disabled,
  variant = 'primary',
}: Props) {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        variant={variant}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  );
}
