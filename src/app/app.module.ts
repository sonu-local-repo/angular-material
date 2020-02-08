import {  MaterialModules } from './material/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { HeaderComponent } from './header/header/header.component';
import { EmployeeServiceService } from './employees/employee-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MaterialModules,
    FlexLayoutModule,HttpClientModule,
  
  ],
  providers: [EmployeeServiceService],
  entryComponents: [NewEmployeeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
