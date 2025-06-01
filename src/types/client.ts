export interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    company?: string;
    position?: string;
    isVip?: boolean;
    status?: "active" | "inactive" | "awaiting_payment" | "debtor";
    amount?: string;
    dueDate?: string;
    createdAt: string;
}