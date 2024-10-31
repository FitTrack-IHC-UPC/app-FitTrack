export interface Exercise {
    id: number;
    name: string;
    time: string;
    calories: number;
    image: Blob;
    repetitions: number;
    type: 'basic' | 'premium';
}
