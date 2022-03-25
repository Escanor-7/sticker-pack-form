import * as S from './StickerPackForm.styles';
import { CheckboxInput } from "../CheckboxInput";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react';
import { StickerPackContext } from '../../context/StickerPackProvider';
import { useNavigate } from 'react-router-dom';

const checksMock = [
  { title: 'React', value: 'react' },
  { title: 'Vue', value: 'vue' },
  { title: 'Angular', value: 'angular' }
]

export type Inputs = {
  observation_message: string;
  react: string;
  vue: string;
  angular: string;
};

export const StickerPackForm = () => {
  const { stickerPackData, setStickerPackData } = useContext(StickerPackContext);
  const [quantityOfStickers, setQuantityOfStickers] = useState(0);
  const [inputs, setInputs] = useState<any>([]);
  const [checkError, setCheckError] = useState(false);
  const [quantityOfStickersError, setQuantityOfStickersError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    let { value } = event.currentTarget;

    if (event.currentTarget.checked) {
      setInputs({ ...inputs, [name]: value })
      setCheckError(false)
      return
    }
    if (!event.currentTarget.checked) {
      setInputs({ ...inputs, [name]: "" })
      return
    }
  }

  const handleQuantityOfStickers = () => {
    if (quantityOfStickers <= 0) {
      setQuantityOfStickers(0);
      return quantityOfStickers;
    }
    setQuantityOfStickers(quantityOfStickers - 1);
    return quantityOfStickers;
  }

  const myFunction = () => {
    let inputs = document.getElementsByTagName('input');
    const checks = [];

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type === "checkbox") {
        checks.push(inputs[i]);
      }
    }

    const verifyChecks = checks.some((check) => {
      return check.checked === true;
    })

    if (!verifyChecks) {
      setCheckError(true);
      return false;
    }

    if (verifyChecks) {
      setCheckError(false);
      return true;
    }
  }

  const handleErrorsInQuantityOfStickers = () => {
    return quantityOfStickers === 0 ? setQuantityOfStickersError(true) : setQuantityOfStickersError(false);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    myFunction();
    handleErrorsInQuantityOfStickers();

    if (myFunction() && quantityOfStickers !== 0) {
      setStickerPackData([...stickerPackData, inputs]);
      navigate('/checkout');
    }
    return;
  }

  return (
    <S.Container data-testid="sticker-pack-form-container">
      <form onSubmit={(e) => handleSubmit(e)} >
        <S.Content>
          <S.QuestionTitle>Quais adesivos:</S.QuestionTitle>
          {checksMock.map((check, index) => {
            return (
              <CheckboxInput
                key={index}
                title={check.title}
                value={check.value}
                onChange={(e) => {
                  handleChange(e)
                }}
                variant={checkError ? 'error' : ''}
              />
            )
          })}
          {checkError && (
            <S.ErrorMessage>Selecione um ou mais adesivos!</S.ErrorMessage>
          )}

          <S.QuestionTitle>Quantos adesivos de cada?</S.QuestionTitle>
          <S.QuantityBlock >
            <S.QuantityButton
              type='button'
              name="quantity_of_stickers"
              value={quantityOfStickers}
              data-testid='minus-button'
              onClick={(e) => {
                handleQuantityOfStickers();
                setInputs({ ...inputs, [e.currentTarget.name]: handleQuantityOfStickers() });
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </S.QuantityButton>

            <input type="text"
              value={quantityOfStickers}
              data-testid="quantity_of_stickers"
              readOnly
            />

            <S.QuantityButton
              type="button"
              name="quantity_of_stickers"
              value={quantityOfStickers}
              onClick={(e) => {
                setQuantityOfStickers(quantityOfStickers + 1);
                setInputs({ ...inputs, [e.currentTarget.name]: quantityOfStickers + 1 });
                setQuantityOfStickersError(false);
              }}
              data-testid='plus-button'
            >
              <FontAwesomeIcon icon={faPlus} />
            </S.QuantityButton>
            {quantityOfStickersError && (
              <S.ErrorMessage>Quantidade de adesivos obrigatória.</S.ErrorMessage>
            )}
          </S.QuantityBlock>

          <S.QuestionTitle>Observações:</S.QuestionTitle>
          <S.TextAreaInput
            name="observations"
            rows={14}
            cols={20}
            wrap="soft"
            maxLength={170}
            placeholder="Alguma dúvida?  Recado?"
            data-testid="textarea"
            onChange={(e) => {
              const name = e.currentTarget.name;
              let { value } = e.currentTarget;
              setInputs({ ...inputs, [name]: value });
            }}
          />
        </S.Content>

        <S.Baseboard>
          <S.SubmitButton type='submit' >
            ENVIAR
          </S.SubmitButton>
        </S.Baseboard>
      </form>
    </S.Container >
  )
}