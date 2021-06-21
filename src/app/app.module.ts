import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyHeaderComponent, MyHeaderDialog } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MenuComponent } from './my-header/menu/menu.component';
import { RegisterComponent } from './my-body/register/register.component';
import { CardComponent } from './my-body/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [							
    AppComponent,
      MyBodyComponent,
      MyHeaderComponent,
      MyFooterComponent,
      MenuComponent,
      RegisterComponent,
      CardComponent,
      MyHeaderDialog
   ],
   entryComponents: [MyHeaderComponent, MyHeaderDialog],   
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, MyHeaderComponent, MyHeaderDialog]
})
export class AppModule { }
