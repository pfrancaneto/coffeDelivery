import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../../components/Input';
import { EnderecoFormContainer } from './styles';

interface ErrosType {
  errors: {
    [Key: string]: {
      message: string;
    };
  };
}

export const EnderecoForm = () => {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrosType;

  return (
    <EnderecoFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="rua"
        {...register('rua')}
        error={errors.rua?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register('numero')}
        error={errors.numero?.message}
      />
      <Input
        placeholder="Complemento"
        className="complemento"
        {...register('complemento')}
        error={errors.complemento?.message}
      />
      <Input
        placeholder="Bairro"
        {...register('bairro')}
        error={errors.bairro?.message}
      />
      <Input
        placeholder="Cidade"
        {...register('cidade')}
        error={errors.cidade?.message}
      />
      <Input
        placeholder="UF"
        {...register('uf')}
        error={errors.uf?.message}
      />
    </EnderecoFormContainer>
  );
};
