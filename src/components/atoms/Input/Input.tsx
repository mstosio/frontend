import React from 'react';
import { Container, InputWrapper, Label, StyledIcon, StyledInput } from './Input.styled';
import { IProps } from './Input.model';

const Input = ({
  type = 'text',
  icon: Icon,
  label,
  className,
  placeholder,
  ...props
}: IProps): JSX.Element => {
  const renderLabel = () => label && <Label>{label}</Label>;
  return (
    <Container className={className}>
      {renderLabel()}
      <InputWrapper>
        <StyledInput isIcon={!!Icon} type={type} placeholder={placeholder} {...props} />
        {Icon && (
          <StyledIcon data-testid="icon">
            <Icon />
          </StyledIcon>
        )}
      </InputWrapper>
    </Container>
  );
};

export default Input;
