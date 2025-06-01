import type {Client} from "../types/client.ts";
import {Link} from "react-router-dom";
import { Pencil } from "lucide-react";

interface Props {
    client: Client;
}

const statusLabels: Record<
    "active" | "inactive" | "awaiting_payment" | "debtor",
    string
> = {
    active: "Активний",
    inactive: "Неактивний",
    awaiting_payment: "Очікує оплату",
    debtor: "Боржник"
};

export function ClientCard({ client }: Props) {
    return (
        <div className="client-card">
            <h3>{client.name}</h3>
            <p>Email: {client.email}</p>
            <p>Телефон: {client.phone}</p>
            <p>Компанія: {client.company?.trim() ? client.company : "-"}</p>
            <p>Статус: {statusLabels[client.status || "inactive"]}</p>
            {client.isVip && <p style={{color: "gold"}}>🌟 VIP</p>}

            <div className="card-actions">
                <Link to={`/clients/${client.id}/edit`} className="edit-button">
                    <Pencil size={16} style={{ marginRight: "6px", verticalAlign: "middle"}} />
                    Редагувати клієнта
                </Link>
            </div>
        </div>
    );
}

export default ClientCard;