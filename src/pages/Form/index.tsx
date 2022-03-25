import React, { useState } from 'react';
import * as S from './Form.styles';
import { StickerPackForm } from "../../components/StickerPackForm";
import { Header } from '../../components/Header';

export const FormPage = () => {

  return (
    <S.Container>
      <S.Content>
        <Header
          title="Formulário"
          description="para compra de"
          subtitle="Pacote de adesivos"
        />
        <StickerPackForm />
      </S.Content>
    </S.Container>
  )
}