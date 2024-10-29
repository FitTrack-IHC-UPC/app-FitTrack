import { UserProfile } from "./user-profile.model";

export interface User {
    id: number;
    email: string;
    name: string;
    password: string;
    nickname: string;
    telephone: string;
    birthdate?: Date;
    profile: UserProfile;
    role: 'basic' | 'subscriber';
}
