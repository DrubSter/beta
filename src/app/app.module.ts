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


@NgModule({
  declarations: [							
    AppComponent,
      MyBodyComponent,
      MyHeaderComponent,
      MyFooterComponent,
      MenuComponent,
      RegisterComponent,
      CardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
