import {useQuery} from "@tanstack/react-query";
import {getClients} from "../../api/clientsApi";
import type {Client} from "../../types/client.ts";

export const useClients= () => {
    return useQuery<Client[]>({
        queryKey: ['clients'],
        queryFn: () => getClients(),
    });
}