import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MenuComponent } from './my-header/menu/menu.component';
import { RegisterComponent } from './my-body/register/register.component';
import { CardComponent } from './my-body/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyHeaderDialogComponent } from './my-header/my-header-dialog/my-header-dialog.component';
import { AngularMaterialModule } from './material-module';




@NgModule({
  declarations: [							
    AppComponent,
      MyBodyComponent,
      MyHeaderComponent,
      MyFooterComponent,
      MenuComponent,
      RegisterComponent,
      CardComponent,
      MyHeaderDialogComponent
   ],
   entryComponents: [MyHeaderComponent],   
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
