import {
  CardCafeContainer,
  CarrinhoContainer,
  Descricao,
  FooterCardCafe,
  NomeCafe,
  TagsContainer,
} from './styles';
import { ShoppingCart } from 'phosphor-react';
import { InputQuantidade } from '../../../../components/InputQuantidade';
import { formatarDinheiro } from '../../../../Utils/formatarDinheiro';

export interface Cafe {
  id: number;
  tags: string[];
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
}

interface CardCafeProps {
  cafe: Cafe;
}

export const CardCafe = ({ cafe }: CardCafeProps) => {
  const formatarPreco = formatarDinheiro(cafe.preco);

  return (
    <CardCafeContainer>
      <img src={`/cafes/${cafe.imagem}`} alt="" />
      <TagsContainer>
        {cafe.tags.map((tag) => (
          <span key={`${cafe.id}${tag}`}>{tag}</span>
        ))}
      </TagsContainer>

      <NomeCafe>{cafe.nome}</NomeCafe>
      <Descricao>{cafe.descricao}</Descricao>

      <FooterCardCafe>
        <div>
          <span>R$</span>
          <p>{formatarPreco}</p>
        </div>
        <CarrinhoContainer>
          <InputQuantidade />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </CarrinhoContainer>
      </FooterCardCafe>
    </CardCafeContainer>
  );
};
