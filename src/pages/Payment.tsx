import Input from '@components/common/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IPaymentForm {
  walletType: string;
  walletAddress: string;
  safeCode: number;
}

export default function Payment() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IPaymentForm>({ mode: 'onSubmit' });
  const {
    walletType: walletTypeFieldError,
    walletAddress: walletAddressFieldError,
    safeCode: safeCodeFieldError,
  } = errors;

  const onSubmit: SubmitHandler<IPaymentForm> = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Wallet type"
        type="text"
        id="walletType"
        {...register('walletType', {
          required: 'Field is required',
        })}
        error={walletTypeFieldError?.message}
        autoFocus
      />

      <Input
        label="Wallet address"
        type="text"
        id="walletAddress"
        {...register('walletAddress', {
          required: 'Field is required',
        })}
        error={walletTypeFieldError?.message}
        autoFocus
      />

      <Input
        label="Safe code"
        type="password"
        id="safeCode"
        {...register('safeCode', {
          required: 'Field is required',
        })}
        error={walletTypeFieldError?.message}
        autoFocus
      />
    </form>
  );
}
