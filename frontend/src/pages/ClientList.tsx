import {useOutletContext} from "react-router-dom";
import {useState} from "react";
import {useClients} from "../features/clients/useClients";
import {deleteClient} from "../api/clientsApi";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import type {Client} from "../types/client";
import ClientCard from "../components/ClientCard";
import {toast} from "react-toastify";

function ClientList() {
    const {searchTerm}: { searchTerm: string } = useOutletContext();
    const [visibleCount, setVisibleCount] = useState(6);
    const limit = 1000;
    const page = 1;

    const {data, isLoading, isError, error} = useClients(page, limit);
    const queryClient = useQueryClient();

    const {mutate: deleteMutate, isPending: isDeleting} = useMutation({
        mutationFn: deleteClient,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["clients"]});
            toast.success("Клієнта успішно видалено");
        },
        onError: (error) => {
            toast.error("Помилка при видаленні: " + error.message);
        }
    });

    const handleDelete = (id: string) => {
        if (window.confirm("Ви впевнені, що хочете видалити клієнта?")) {
            deleteMutate(id);
        }
    };

    if (isLoading) return <p>Завантаження...</p>;
    if (isError && error instanceof Error)
        return <p style={{color: "red"}}>{error.message}</p>;

    const allClients = data?.data || [];
    const filteredClients = allClients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const visibleClients = filteredClients.slice(0, visibleCount);

    return (
        <div className="container">
            <div className="client-list">
                {visibleClients.length === 0 ? (
                    <p>Клієнтів не знайдено</p>
                ) : (
                    visibleClients.map((client: Client) => (
                        <ClientCard
                            key={client._id}
                            client={client}
                            onDelete={handleDelete}
                            isPending={isDeleting}
                        />
                    ))
                )}
            </div>

            {filteredClients.length > visibleCount && (
                <div style={{textAlign: "center", marginTop: "1rem"}}>
                    <button
                        onClick={() => setVisibleCount((prev) => prev + 6)}
                        className="load-more-button"
                    >
                        Дивитись більше
                    </button>
                </div>
            )}
        </div>
    );
}

export default ClientList;
