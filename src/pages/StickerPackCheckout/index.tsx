import React, { useContext, useState } from 'react';
import { Header } from '../../components/Header';
import { StickerPackContext } from '../../context/StickerPackProvider';
import * as S from './StickerPackCheckout.styles';

type StickerPackData = {
  react?: string;
  vue?: string;
  angular?: string;
  observations?: string;
  quantity_of_stickers?: number
}

export const StickerPackCheckout = () => {
  const { stickerPackData } = useContext(StickerPackContext);
  const [loading, setLoading] = useState(false);

  function handleLoading() {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }

  return (
    <div>
      <S.Container>
        <S.Content >
          <Header
            title="Checkout"
            subtitle="Pacote de adesivos"
          />
          <S.DataBlock>
            {handleLoading()}
            {!loading && <S.LoadingContent><S.Loading /></S.LoadingContent>}
            {loading && (
              stickerPackData?.map((item: StickerPackData, index: number) => {
                return (
                  <React.Fragment key={index} >
                    {
                      item.react && (
                        <p>{`${item.quantity_of_stickers} adesivo(s) React`}</p>)
                    }

                    {
                      item.vue && (
                        <p>{`${item.quantity_of_stickers} adesivo(s) Vue`}</p>)
                    }

                    {
                      item.angular && (
                        <p>{`${item.quantity_of_stickers} adesivo(s) Angular`}</p>)
                    }

                    {
                      item.observations && (
                        <p>Observações: {item.observations}</p>
                      )
                    }
                  </React.Fragment>
                )
              })
            )}
          </S.DataBlock>
        </S.Content>
      </S.Container >
    </div>
  )
}