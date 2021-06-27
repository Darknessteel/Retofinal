import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterHouseComponent } from './register-house/register-house.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandpageComponent } from './landpage/landpage.component';
import { ReservaCasaComponent } from './reserva-casa/reserva-casa.component';
import { HomeComponent } from './home/home.component';
import { TablesComponent } from './tables/tables.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [
    TablesComponent,
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegistroComponent,
    ProfileComponent,
    LandpageComponent,
    ReservaCasaComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
