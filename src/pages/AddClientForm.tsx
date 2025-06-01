import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClient } from "../api/clientsApi.ts";
import { useNavigate } from "react-router-dom";
import ClientForm, { type FormValues } from "../components/ClientForm.tsx";
import type { Client } from "../types/client.ts";

export default function AddClientForm() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: createClient,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["clients"] });
            navigate("/");
        },
    });

    const onSubmit = (data: FormValues) => {
        const queryData = queryClient.getQueryData<Client[]>(["clients"]);
        const clients = queryData ?? [];

        const existing = clients.find(
            (client) => client.email.trim().toLowerCase() === data.email.trim().toLowerCase()
        );

        if (existing) {
            const confirmDuplicate = window.confirm(
                `Клієнт "${data.email}" вже існує. Додати ще одного?`
            );
            if (!confirmDuplicate) return;
        }

        mutate(data);
    };

    return (
        <ClientForm
            title="Додати нового клієнта"
            onSubmit={onSubmit}
            isPending={isPending}
            defaultValues={{
                isVip: false,
                status: "active",
            }}
        />
    );
}