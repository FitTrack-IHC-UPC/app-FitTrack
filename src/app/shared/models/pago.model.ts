import { User } from "./user.model";

export interface Pago {
    id: number;
    tarjeta: string;
    fecha: Date;
    cvv: number;
    name_on_card: string;
    user: User;
    address: string;
}
