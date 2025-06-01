import type {Client} from "../types/client";
import {mockClients} from "../mock/mockClients.ts";


export const getClients = async (): Promise<Client[]> => {
   await new Promise((res ) => setTimeout(res, 500));
    return mockClients;
};

export const getClientById = async (id: string): Promise<Client> => {
    await new Promise((res) => setTimeout(res, 300));
    const client = mockClients.find((c) => c.id === id);
    if (!client) throw new Error(`Клієнт з ID ${id} не знайдений`);
    return client;
}

export const createClient = async (client: Omit<Client, "id" | "createdAt">): Promise<Client> => {
    const newClient: Client = {
        ...client,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
    };

    mockClients.push(newClient);
    return newClient;
};

export const updateClient = async (id: string, updates: Partial<Client>): Promise<Client> => {
    const index = mockClients.findIndex((c) => c.id === id);
    if (index === -1) throw new Error("Клієнта не знайдено");

    mockClients[index] = { ...mockClients[index], ...updates };
    await new Promise((res) => setTimeout(res, 300));
    return mockClients[index];
};

export const deleteClient = async (id: string): Promise<void> => {
    const index = mockClients.findIndex((c) => c.id === id);
    if (index === -1) throw new Error("Клієнта не знайдено");

    mockClients.splice(index, 1);
    await new Promise((res) => setTimeout(res, 300));
};