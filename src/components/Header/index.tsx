import * as S from './Header.styles';
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type HeaderProps = {
  title?: string;
  description?: string;
  subtitle?: string;
}

export const Header = ({ title, description, subtitle }: HeaderProps) => {
  return (
    <S.Container>
      <S.Header data-testid="header-container" >
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{subtitle}</p>
        </div>
        <FontAwesomeIcon icon={faBox} data-testid='box-icon' />
      </S.Header>
    </S.Container>
  )
}