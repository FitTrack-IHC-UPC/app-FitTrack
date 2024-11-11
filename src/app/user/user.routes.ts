import { Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';
//SUBSCRIBER USER COMPONENTS
import { PremiumArticlesComponent } from './pages/suscriber/premium-articles/premium-articles.component';
import { PremiumHomeComponent } from './pages/suscriber/premium-home/premium-home.component';
import { PremiumVideosComponent } from './pages/suscriber/premium-videos/premium-videos.component';
//BASIC USER COMPONENTS
import { PaymentComponent } from './pages/basic/payment/payment.component';
import { SubscribeComponent } from './pages/basic/subscribe/subscribe.component';
import { SuccessPaymentComponent } from './pages/basic/success-payment/success-payment.component';
//ACCOUNT COMPONENTS
import { DashboardComponent } from './pages/general/account/dashboard/dashboard.component';
import { HomeComponent } from './pages/general/account/home/home.component';
import { UpdateProfileComponent } from './pages/general/account/update-profile/update-profile.component';
//EXERCISE COMPONENTS
import { ActivityLevelComponent } from './pages/general/exercise/activity-level/activity-level.component';
import { CompleteRoutineComponent } from './pages/general/exercise/complete-routine/complete-routine.component';
import { CreateRoutineComponent } from './pages/general/exercise/create-routine/create-routine.component';
import { ExerciseHomeComponent } from './pages/general/exercise/exercise-home/exercise-home.component';
import { GoalComponent } from './pages/general/exercise/goal/goal.component';
import { YourRoutineComponent } from './pages/general/exercise/your-routine/your-routine.component';
//NUTRITION COMPONENTS
import { FoodPreferenceComponent } from './pages/general/nutrition/food-preference/food-preference.component';
import { MealPlanComponent } from './pages/general/nutrition/meal-plan/meal-plan.component';
import { RecipeComponent } from './pages/general/nutrition/recipe/recipe.component';

export const UserRoutes: Routes = [
    {
        path: '',
        component: UserLayoutComponent,
        children: [
            //SUBSCRIBER USER COMPONENTS
            {
                path: 'subscriber',
                children: [
                    { path: 'premium-articles', component: PremiumArticlesComponent },
                    { path: 'premium-home', component: PremiumHomeComponent },
                    { path: 'premium-videos', component: PremiumVideosComponent },
                ]
            },
            //BASIC USER COMPONENTS
            {
                path: 'basic',
                children: [
                    { path: 'payment/:amount', component: PaymentComponent },
                    { path: 'subscribe', component: SubscribeComponent },
                    { path: 'success-payment', component: SuccessPaymentComponent },
                ]
            },
            //ACCOUNT COMPONENTS
            {path: 'dashboard', component: DashboardComponent},
            {path: 'home', component: HomeComponent},
            {path: 'update-profile', component: UpdateProfileComponent},
            //EXERCISE COMPONENTS
            {
                path: 'exercise',
                children: [
                    { path: 'activity-level', component: ActivityLevelComponent },
                    { path: 'complete-routine', component: CompleteRoutineComponent },
                    { path: 'create-routine', component: CreateRoutineComponent },
                    { path: 'exercise-home', component: ExerciseHomeComponent },
                    { path: 'goal', component: GoalComponent },
                    { path: 'your-routine', component: YourRoutineComponent },
                ]
            },
            //NUTRITION COMPONENTS
            {
                path: 'nutrition',
                children: [
                    { path: 'food-preference', component: FoodPreferenceComponent },
                    { path: 'meal-plan', component: MealPlanComponent },
                    { path: 'recipe', component: RecipeComponent },
                ]
            }
        ]
    }
];


