export interface ApiUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string;
    };
    phone: string;
    company: {
        name: string;
    }
}
// UI type
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    city: string;
    phone: string;
    companyName: string;
}