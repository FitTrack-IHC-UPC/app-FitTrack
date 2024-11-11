export interface Exercise {
  title: string;
  duration: number;
  reps: number;
  calories: number;
  imageUrl: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  isSelected?: boolean;
}
