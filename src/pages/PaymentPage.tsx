import { useClients} from "../features/clients/useClients";
import type { Client } from "../types/client";

export default function PaymentPage() {
    const { data, isLoading, isError, error } = useClients();

    const statusLabels: Record<
        "active" | "inactive" | "awaiting_payment" | "debtor",
        string
    > = {
        active: "Активний",
        inactive: "Неактивний",
        awaiting_payment: "Очікує оплату",
        debtor: "Боржник",
    };

    const formatDate = (isoDate?: string) => {
        if (!isoDate) return "не вказано";
        const date = new Date(isoDate);
        return new Intl.DateTimeFormat("uk-UA").format(date);
    };

    if (isLoading) return <p>Завантаження...</p>;
    if (isError && error instanceof Error) return <p style={{color: "red"}}>{error.message}</p>;
    if (!data) return <p>Немає клієнтів</p>;

    const filtered = data.filter((c) => c.status === "awaiting_payment");

    return (
        <div>
            <h2>Очікують оплату</h2>
            {filtered.length === 0 ? (<p>Клієнтів з очікуваною оплатою немає.</p>) : (
            <ul className="payment-page">
                {filtered.map((client: Client) => (
                    <li>
                        <h3>{client.name}</h3>
                        <p>Телефон: {client.phone}</p>
                        <p>Email: {client.email}</p>
                        <p>Статус: {statusLabels[client.status || "inactive"]}</p>                        <p>Сума до сплати: <strong>{client.amount ?? "не вказано"}</strong></p>
                        <p>Термін: {client.dueDate ? formatDate(client.dueDate) : "не вказано"}</p>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
}