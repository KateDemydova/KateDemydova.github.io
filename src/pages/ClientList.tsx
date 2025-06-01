import {useOutletContext} from "react-router-dom";
import {useClients} from "../features/clients/useClients.ts";
import type {Client} from "../types/client.ts";
import ClientCard from "../components/ClientCard.tsx";


function ClientList() {
    const { searchTerm }: { searchTerm: string } = useOutletContext();
    const {data, isLoading, isError, error} = useClients();
    const filtered = data?.filter(client => client.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (isLoading) return <p>Завантаження...</p>;
    if (isError && error instanceof Error)
        return <p style={{ color: "red" }}>{error.message}</p>;

    return (
            <div className="client-list">
                {filtered?.length === 0 ? (<p>Клієнтів не знайдено</p>) : (
                filtered?.map((client: Client) => (
                    <ClientCard key={client.id} client={client}/>
                ))
                )}
            </div>
    );
}

export default ClientList;
