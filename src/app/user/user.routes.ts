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
import { ExerciseHomeComponent } from './pages/general/exercise/exercise-home/exercise-home.component';
import { ExerciseGoalComponent } from './pages/general/exercise/exercise-goal/exercise-goal.component';
import { ExerciseVideoComponent } from './pages/general/exercise/exercise-video/exercise-video.component';
import { ExerciseRoutineComponent } from './pages/general/exercise/exercise-routine/exercise-routine.component';
import { ExerciseRoutineCreateComponent } from './pages/general/exercise/exercise-routine-create/exercise-routine-create.component';
import { ExerciseProgressComponent } from './pages/general/exercise/exercise-progress/exercise-progress.component';
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
                    { path: 'premium-articles/:id', component: PremiumArticlesComponent },
                    { path: 'premium-home', component: PremiumHomeComponent },
                    { path: 'premium-videos/:id', component: PremiumVideosComponent },
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
                    { path: 'exercise-goal', component: ExerciseGoalComponent },
                    { path: 'exercise-video', component: ExerciseVideoComponent },
                    { path: 'exercise-routine', component: ExerciseRoutineComponent },
                    { path: 'exercise-home', component: ExerciseHomeComponent },
                    { path: 'exercise-routine-create', component: ExerciseRoutineCreateComponent },
                    { path: 'exercise-progress', component: ExerciseProgressComponent },
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


