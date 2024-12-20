import { Injectable } from '@angular/core';
import { Meal } from '../../shared/models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private meals: Meal[] = [
    {
      id: 1,
      name: "Delicia con yogurt griego",
      calories: 150,
      image: 'assets/images/Recetas/Yogurt_griego.png',
      time: "08:00 AM",
      ingredients: ["Yogurt griego", "Frutas frescas", "Granola"],
      preparation: "Mezcla yogurt griego con frutas frescas y granola en un bol."
    },
    {
      id: 2,
      name: "Tortilla de espinacas y tomate",
      calories: 200,
      image: 'assets/images/Recetas/Tortilla_espinaca_tomate.png',
      time: "07:30 AM",
      ingredients: ["Espinacas", "Tomate", "Huevos", "Aceite de oliva"],
      preparation: "Bate los huevos, añade espinacas y tomate, y cocina en una sartén con aceite de oliva."
    },
    {
      id: 3,
      name: "Tostada de palta y huevo",
      calories: 250,
      image: 'assets/images/Recetas/Tostada_palta_huevo.png',
      time: "08:15 AM",
      ingredients: ["Pan integral", "Palta", "Huevo cocido"],
      preparation: "Unta palta sobre el pan tostado y coloca rodajas de huevo cocido encima."
    },
    {
      id: 4,
      name: "Batido de proteínas con fruta",
      calories: 180,
      image: 'assets/images/Recetas/Batido_proteinas.png',
      time: "10:00 AM",
      ingredients: ["Proteína en polvo", "Leche", "Banana", "Fresas"],
      preparation: "Mezcla todos los ingredientes en una licuadora y sirve frío."
    },
    {
      id: 5,
      name: "Ensalada con langostinos",
      calories: 300,
      image: 'assets/images/Recetas/Ensalada_langostinos.png',
      time: "12:30 PM",
      ingredients: ["Langostinos", "Lechuga", "Palta", "Tomates cherry"],
      preparation: "Cocina los langostinos, mezcla con los demás ingredientes y aliña al gusto."
    },
    {
      id: 6,
      name: "Ensalada con pollo",
      calories: 280,
      image: 'assets/images/Recetas/Ensalada_pollo.png',
      time: "01:00 PM",
      ingredients: ["Pollo a la plancha", "Lechuga", "Zanahoria", "Pepino"],
      preparation: "Corta el pollo en trozos y mezcla con las verduras en un bol."
    },
    {
      id: 7,
      name: "Pollo a la plancha con verduras",
      calories: 350,
      image: 'assets/images/Recetas/Pollo_plancha.png',
      time: "01:30 PM",
      ingredients: ["Pechuga de pollo", "Brócoli", "Zanahoria", "Aceite de oliva"],
      preparation: "Cocina el pollo y las verduras en una sartén con un poco de aceite de oliva."
    },
    {
      id: 8,
      name: "Tostada con salmón",
      calories: 220,
      image: 'assets/images/Recetas/Tostada_salmon.png',
      time: "05:00 PM",
      ingredients: ["Pan integral", "Salmón ahumado", "Queso crema", "Eneldo"],
      preparation: "Unta queso crema sobre el pan, añade salmón ahumado y decora con eneldo."
    },
    {
      id: 9,
      name: "Sopa de espinaca",
      calories: 150,
      image: 'assets/images/Recetas/Sopa_espinaca.png',
      time: "07:00 PM",
      ingredients: ["Espinacas", "Caldo de pollo", "Cebolla", "Crema"],
      preparation: "Cocina las espinacas con el caldo, licúa y añade crema al servir."
    },
    {
      id: 10,
      name: "Salteado de verduras con avena",
      calories: 250,
      image: 'assets/images/Recetas/Saltado_verduras.png',
      time: "07:30 PM",
      ingredients: ["Avena cocida", "Pimientos", "Brócoli", "Zanahoria", "Salsa de soja"],
      preparation: "Saltea las verduras, mezcla con la avena cocida y añade salsa de soja al gusto."
    }
  ]
  constructor() { }

  getRecipes(): Meal[] {
    return this.meals;
  }

  getRecipeById(id: number): any {
    return this.meals.find(meal => meal.id === id);
  }
}
