import { afterEach, beforeEach, expect, vi, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile.tsx";

beforeEach(() => {
    vi.resetAllMocks();
});

afterEach(() => {
    vi.resetAllMocks();
});


test("Ім'я користувача:", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () =>
            ({ name: "Ingrid Watson",
                email: "test@excample.com",
                username: "iwatson",
        }),
    });
    render(<UserProfile />);

    expect(screen.getByText(/Завантаження/i)).toBeTruthy();

    await waitFor(() => {
        expect(screen.getByText(/Ingrid Watson/i)).toBeTruthy();
    });
});

test("Повідомлення про помилку", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
        ok: false,
        status: 500,
    });

    render(<UserProfile />);

    await waitFor(() => {
        expect(screen.getByText(/Помилка завантаження/i)).toBeTruthy();
    });
});