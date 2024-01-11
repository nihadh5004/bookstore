export interface LoginType {
    
        "refresh": string;
        "access": string;
        "is_student": boolean;
        "is_consultancy": boolean;
        "is_premium": boolean;
        "id": number;
    
}

export interface LoginPost {
    username : string;
    password : string;
}