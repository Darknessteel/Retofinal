import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { TablesComponent } from '../../tables/tables.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { RegisterHouseComponent } from '../../register-house/register-house.component';
import { ReservaCasaComponent } from 'app/reserva-casa/reserva-casa.component';





export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'table',          component: TablesComponent },

    {path: 'profile',         component:ProfileComponent},
    {path: 'registerHouse',   component:RegisterHouseComponent},
    {path: 'reservaCasa',   component:ReservaCasaComponent}
    
];
