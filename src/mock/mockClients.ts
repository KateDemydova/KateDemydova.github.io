import type { Client } from "../types/client.ts"

export const mockClients: Client[] = [
    {
        id: "1",
        name: "Петро Петров",
        email: "petrov@example.com",
        phone: "+380987654321",
        company: "ForestMap",
        position: "project-manager",
        isVip: true,
        status: "active",
        createdAt: "2025-05-09T15:00:00Z"
    },
    {
        id: "2",
        name: "Марія Мартинова",
        email: "marymar@example.com",
        phone: "+380987654123",
        isVip: false,
        status: "inactive",
        createdAt: "2025-04-02T15:00:00Z"
    },
    {
        id: "3",
        name: "Олена Василенко",
        email: "olena@example.com",
        phone: "+380987654321",
        company: "Textile",
        position: "accountant",
        isVip: true,
        status: "awaiting_payment",
        createdAt: "2025-05-10T15:00:00Z",
        amount: "1000 uan",
        dueDate: new Date("2025-06-01").toISOString()

    },
    {
        id: "4",
        name: "Анжела Орленко",
        email: "anjela@example.com",
        phone: "+380985674321",
        company: "FitLine",
        position: "Managing Director",
        isVip: true,
        status: "debtor",
        createdAt: "2025-05-06T15:00:00Z"
    },
    {
        id: "5",
        name: "Олег Фроленко",
        email: "olegfl@example.com",
        phone: "+380895674321",
        isVip: false,
        status: "active",
        createdAt: "2025-05-10T15:00:00Z"
    }
];
