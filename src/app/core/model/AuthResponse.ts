export interface AuthResponse {
    idToken: string;
    email: string | null;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}
