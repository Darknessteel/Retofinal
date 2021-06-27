import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';

import { TablesComponent } from '../../tables/tables.component';

import { RegisterHouseComponent } from 'app/register-house/register-house.component';







@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyApF3pPYLpb-U_QARmy0Vh-B4tULSJM4TI&libraries=places&v=weekly'})
  ],
  declarations: [

    RegisterHouseComponent,
    
  

  ]
})

export class AdminLayoutModule {}
