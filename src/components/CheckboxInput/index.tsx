import React, { useState } from "react";
import * as S from "./CheckboxInput.styles";

interface ICheckboxInputProps {
  title: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  onClick?: ((event: React.MouseEvent<HTMLInputElement>) => void) | undefined;
  variant?: string;
  value?: string;
  isRequired?: boolean
}

export const CheckboxInput = React.forwardRef(
  (
    { title, onChange, onClick, variant, value, isRequired }: ICheckboxInputProps, ref: any
  ) => {
    return (
      <S.Container className={variant} data-testid="checkbox-input-container" >
        <input
          type='checkbox'
          name={value}
          id={title}
          onChange={onChange}
          onClick={onClick}
          value={value}
          required={isRequired}
        />
        <label htmlFor={title}>{title}</label>
      </S.Container>
    );
  }
);
