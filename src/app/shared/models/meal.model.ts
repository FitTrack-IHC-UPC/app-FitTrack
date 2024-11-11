export interface Meal {
    id: number;
    name: string;
    calories: number;
    image: Blob;
    time: string;
    ingredients: string[];
    preparation: string;
}
