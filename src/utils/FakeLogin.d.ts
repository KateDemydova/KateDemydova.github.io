interface LoginData {
    username: string;
    password: string;
}
export declare const FakeLogin: ({ username, password }: LoginData) => Promise<LoginData>;
export {};
