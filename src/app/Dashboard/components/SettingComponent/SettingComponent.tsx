import { useForm } from 'react-hook-form';

export const SettingComponent = () => {
  const { register, handleSubmit } = useForm<{
    [key: string]: number | string | boolean;
  }>();

  return (
    <>
      <h1>Settings</h1>
      <input type="text" {...register('trading server url')} />
    </>
  );
};
