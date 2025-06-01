import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import type { Client } from "../types/client";
import 'react-phone-input-2/lib/style.css';


export type FormValues = Omit<Client, "id" | "createdAt">;

interface ClientFormProps {
    defaultValues?: Partial<FormValues>;
    onSubmit: (data: FormValues) => void;
    isPending?: boolean;
    title: string;
}

export default function ClientForm({ defaultValues, onSubmit, isPending = false, title }: ClientFormProps) {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues,
        mode: "onChange",
    });

    return (
        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
            <h2>{title}</h2>

            <label className="label" htmlFor="name">Прізвище та ім'я:</label>
            <input className="input-item"
                   id="name"
                   placeholder="Прізвище та ім'я"
                   {...register("name", {
                       required: "Поле обов'язкове для заповнення!",
                       minLength: {
                           value: 5,
                           message: "Мінімум 5 символів",
                       },
                   })}
                   type="text"
            />
            {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}

            <label className="label" htmlFor="email">Email:</label>
            <input className="input-item"
                   id="email"
                   type="email"
                   placeholder="Ваш email"
                   {...register("email", {
                       required: "Поле обов'язкове для заповнення!",
                       pattern: {
                           value: /\S+@\S+\.\S+/,
                           message: "Некорректний email!",
                       },
                   })}
            />
            {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}

            <label className="label" htmlFor="phone">Телефон:</label>
            <Controller
                name="phone"
                control={control}
                rules={{
                    required: "Поле обов'язкове!",
                    minLength: {
                        value: 12,
                        message: "Номер занадто короткий",
                    },
                }}
                render={({field}) => (
                    <PhoneInput
                        {...field}
                        country={'ua'}
                        onlyCountries={['ua']}
                        inputProps={{name: 'phone', required: true}}
                        inputClass="input-item"
                        placeholder="+380..."
                        onChange={(phone) => field.onChange(phone)}
                    />
                )}
            />
            {errors.phone && <p style={{color: "red"}}>{errors.phone.message}</p>}

            <label className="label" htmlFor="company">Компанія:</label>
            <input className="input-item"
                   id="company"
                   type="text"
                   placeholder="Назва компанії"
                   {...register("company")}
            />

            <label className="label" htmlFor="position">Посада:</label>
            <input className="input-item"
                   id="position"
                   type="text"
                   placeholder="Посада"
                   {...register("position")}
            />

            <div className="checkbox-wrapper">
                <input type="checkbox" id="isVip" {...register("isVip")} />
                <label htmlFor="isVip">VIP-клієнт</label>
            </div>

            <label className="label" htmlFor="status">Статус:</label>
            <select id="status" {...register("status")}>
                <option value="active">Активний</option>
                <option value="inactive">Неактивний</option>
                <option value="awaiting_payment">Очікує оплату</option>
                <option value="debtor">Боржник</option>
            </select>

            <button type="submit" className="button" disabled={isPending}>
                {isPending ? "Збереження..." : "Зберегти клієнта"}
            </button>
        </form>
    );
}