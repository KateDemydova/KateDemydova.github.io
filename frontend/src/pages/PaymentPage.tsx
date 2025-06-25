import {useEffect, useState} from "react";
import {useClients} from "../features/clients/useClients";
import {useUpdateClientStatus} from "../features/clients/updateClientStatus.ts";
import type {Client} from "../types/client";
import {toast} from "react-toastify";

export default function PaymentPage() {
    const page = 1;
    const limit = 1000;

    const {data, isLoading, isError, error} = useClients(page, limit);
    const [localClients, setLocalClients] = useState<Client[]>([]);

    const {mutate: updateStatus, isPending} = useUpdateClientStatus();

    useEffect(() => {
        if (data?.data) {
            const filtered = data.data.filter(
                (client: Client) =>
                    client.status !== undefined &&
                    ["awaiting_payment", "debtor", "inactive"].includes(client.status)
            );
            setLocalClients(filtered);
        }
    }, [data]);

    const handleStatusChange = (id: string, newStatus: Client["status"]) => {
        updateStatus(
            {id, status: newStatus!},
            {
                onSuccess: (_, variables) => {
                    const {id} = variables;
                    setLocalClients((prev) => prev.filter((c) => c._id !== id));
                    toast.success("Статус оновлено");
                },
                onError: () => {
                    toast.error("Помилка при оновленні статусу");
                },
            }
        );
    };

    const statusLabels: Record<NonNullable<Client["status"]>, string> = {
        active: "Активний",
        inactive: "Неактивний",
        awaiting_payment: "Очікує оплату",
        debtor: "Боржник",
    };

    const formatDate = (isoDate?: string) => {
        if (!isoDate) return "не вказано";
        const date = new Date(isoDate);
        return new Intl.DateTimeFormat("uk-UA", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }).format(date);
    };

    if (isLoading) return <p>Завантаження...</p>;
    if (isError && error instanceof Error)
        return <p style={{color: "red"}}>{error.message}</p>;

    return (
        <div>
            <h2>Очікують оплату</h2>
            {localClients.length === 0 ? (
                <p>Клієнтів з очікуваною оплатою немає.</p>
            ) : (
                <ul className="payment-page">
                    {localClients.map((client) => (
                        <li key={client._id} className="payment-card">
                            <h3>{client.name}</h3>
                            <p>Телефон: {client.phone}</p>
                            <p>Email: {client.email}</p>
                            <p>
                                Статус:{" "}
                                {client.status && (
                                    <span className={`status-badge status-${client.status}`}>
    {statusLabels[client.status]}
  </span>
                                )}
                            </p>
                            <p>
                                Сума до сплати:{" "}
                                <strong>{client.amount ?? "не вказано"}</strong>
                            </p>
                            <p>Термін: {formatDate(client.dueDate)}</p>

                            <div>
                                <label>Змінити статус:</label>
                                <select
                                    defaultValue=""
                                    onChange={(e) =>
                                        handleStatusChange(
                                            client._id,
                                            e.target.value as Client["status"]
                                        )
                                    }
                                    disabled={isPending}
                                >
                                    <option value="" disabled>
                                        Оберіть статус
                                    </option>
                                    <option value="active">Активний</option>
                                    <option value="inactive">Неактивний</option>
                                    <option value="debtor">Боржник</option>
                                </select>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
