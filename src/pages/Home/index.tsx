import {
  HeaderContainer,
  HeaderContent,
  Icon,
  IconCar,
  IconContainer,
  IconPackage,
  TitleHeader,
} from './styles';
import BgHome from '../../assets/BgHome.svg';

export const Home = () => (
  <HeaderContainer>
    <HeaderContent>
      <TitleHeader>
        Encontre o café perfeito para qualquer hora do dia
      </TitleHeader>
      <p>
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </p>
      <div>
        <IconContainer>
          <Icon>
            <IconCar weight="fill" />
            <span>Compra simples e segura</span>
          </Icon>
          <Icon>
            <IconPackage weight="fill" />
            <span>Embalagem mantém o café intacto</span>
          </Icon>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconCar weight="fill" />
            <span>Compra simples e segura</span>
          </Icon>
          <Icon>
            <IconPackage weight="fill" />
            <span>Embalagem mantém o café intacto</span>
          </Icon>
        </IconContainer>
      </div>
    </HeaderContent>
    <img src={BgHome} alt="Embalagem do Produto" />
  </HeaderContainer>
);
