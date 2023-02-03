import Button from '@components/common/Button';
import Checkbox from '@components/common/Checkbox';
import Dropdown from '@components/common/Dropdown';
import Input from '@components/common/Input';
import { Country, State, City } from 'country-state-city';
import { useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useToggle } from 'usehooks-ts';

interface IShippingForm {
  email: string;
  country: string;
  city: string;
  postalCode: number;
  telephone: number;
}

export default function Shipping() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IShippingForm>({ mode: 'onSubmit' });
  const {
    email: emailFieldError,
    postalCode: postalCodeFieldError,
    telephone: phoneFieldError,
  } = errors;

  useEffect(() => {
    register('country', { required: 'Field is required' });
    register('city', { required: 'Field is required' });
  }, [register]);

  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const updatedCountries = useMemo(() => {
    return Country.getAllCountries().map((country) => {
      return { value: country.isoCode, label: country.name };
    });
  }, []);

  const [selectedCity, setSelectedCity] = useState<string>('');
  const updatedCities = useMemo(() => {
    return City.getCitiesOfCountry(selectedCountry)!.map((city) => {
      return { value: city.stateCode, label: city.name };
    });
  }, [selectedCountry]);

  useEffect(() => {
    setValue('country', selectedCountry);
    setValue('city', selectedCity);
  }, [selectedCountry, selectedCity]);

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IShippingForm> = (data) => {
    navigate('payment');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2">
      <Input
        label="Your email"
        type="email"
        id="email"
        placeholder="example@example.com"
        {...register('email', {
          required: 'Field is required',
        })}
        error={emailFieldError?.message}
        autoFocus
      />

      <Checkbox
        id="get_updates"
        label="Get updates about new drops & exclusive offers"
      />

      <Dropdown
        id="country"
        label="Country"
        options={updatedCountries}
        onSelect={setSelectedCountry}
      />

      <Dropdown
        id="city"
        label="City"
        options={updatedCities}
        onSelect={setSelectedCity}
      />

      <Input
        label="Postal code"
        type="number"
        id="postal-code"
        {...register('postalCode', {
          required: 'Field is required',
        })}
        error={postalCodeFieldError?.message}
      />

      <Input
        label="Phone number"
        type="tel"
        id="telephone"
        {...register('telephone', {
          required: 'Field is required',
        })}
        error={phoneFieldError?.message}
      />

      <Button type="submit">Proceed to payment</Button>
      <Button as="link" to="../">
        Go back to cart
      </Button>
    </form>
  );
}
