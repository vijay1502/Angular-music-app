import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { SideComponent } from './side/side.component';
import { BodyComponent } from './body/body.component';
import { PlayfootComponent } from './playfoot/playfoot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    SideComponent,
    BodyComponent,
    PlayfootComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
