import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './yupValdation';
import TextField from './textField/textField';
import EmailIcon from '../assets/imagesData/EmailIcon';

const MyForm: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <TextField
                    icon = {<EmailIcon/>}
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        {...field}
                        error={errors.email?.message}
                        customSize="small"
                    />
                )}
            />

            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <TextField
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                        error={errors.password?.message}
                        customSize="medium"
                    />
                )}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
