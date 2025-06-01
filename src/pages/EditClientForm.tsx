import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getClientById, updateClient } from "../api/clientsApi.ts";
import type { Client } from "../types/client.ts";
import ClientForm, { type FormValues } from "../components/ClientForm.tsx";

export default function EditClientForm() {
    const { id } = useParams();
    const clientId = id || "";

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error } = useQuery<Client>({
        queryKey: ["client", clientId],
        queryFn: () => getClientById(clientId),
        enabled: !!clientId,
    });

    const { mutate, isPending } = useMutation({
        mutationFn: (updatedData: FormValues) => updateClient(clientId, updatedData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["clients"] });
            navigate("/");
        },
    });

    const handleSubmit = (data: FormValues) => {
        mutate(data);
    };

    if (isLoading) return <p>Завантаження даних...</p>;
    if (isError && error instanceof Error) return <p style={{ color: "red" }}>{error.message}</p>;
    if (!data) return <p>Клієнта не знайдено</p>;

    return (
        <ClientForm
            title="Редагувати клієнта"
            defaultValues={data}
            onSubmit={handleSubmit}
            isPending={isPending}
        />
    );
}