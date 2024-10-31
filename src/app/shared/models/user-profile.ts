export interface UserProfile {
    birthdate: Date;
    age: number;
    weight: number;
    height: number;
    goal: 'perder peso' | 'ganar peso' | 'ganar masa muscular' | 'dar forma a mi cuerpo' | 'otros';
    activityLevel: 'principiante' | 'intermedio' | 'avanzado';
}
