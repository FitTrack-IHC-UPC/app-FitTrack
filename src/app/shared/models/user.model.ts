import { ExercisePlan } from './exercise_plan.model';
import { MealPlan } from './meal_plan.model';
import { Bill } from './bill.model';
import { UserProfile } from './user-profile';

export interface User {
    id: number;
    email: string;
    name: string;
    password: string;
    nickname: string;
    telephone: string;
    role: 'basic' | 'subscriber';
    gender: 'masculino' | 'femenino';
    profile?: UserProfile;
    meal_plan: MealPlan;
    exercise_plan: ExercisePlan[];
    bills: Bill[];
}
