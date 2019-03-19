import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RoutingModule } from './routing-module';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { NestedfirstComponent } from './first/nestedfirst/nestedfirst.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
	  SecondComponent,
	  ThirdComponent,
    FourthComponent,
    NestedfirstComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
