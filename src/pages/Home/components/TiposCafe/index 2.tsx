import { Cafes } from '../../../../data/Cafes';
import { CardCafe } from '../CardCafe';
import { TiposCafeContainer, TiposCafeContent } from './styles';

export const TiposCafe = () => (
  <TiposCafeContainer className="container">
    <h2>Nossos Cafés</h2>
    <TiposCafeContent>
      {Cafes.map((cafe) => (
        <CardCafe key={cafe.id} cafe={cafe} />
      ))}
    </TiposCafeContent>
  </TiposCafeContainer>
);
