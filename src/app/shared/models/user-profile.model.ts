export interface UserProfile{
    gender: 'masculino' | 'femenino';
    age?: number;
    weight?: number;
    height?: number;
    goal?: 'perder peso' | 'ganar peso' | 'ganar masa muscular' | 'dar forma a mi cuerpo' | 'otros';
    activityLevel?: 'principiante' | 'intermedio' | 'avanzado';
}
