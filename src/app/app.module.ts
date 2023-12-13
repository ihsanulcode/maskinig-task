import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { FormsModule } from '@angular/forms';
import { InputMaskDirective } from './input-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputValidationComponent,
    InputMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule          // Need to import for using ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
