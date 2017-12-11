import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserPageComponent} from './user-page/user-page.component';
import {PhonePageComponent} from './phone-page/phone-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HoverDirective} from './user-page/hover.directive';
import {SearchPipe} from './user-page/search.pipe';
import {HomePageComponent } from './home-page/home-page.component';
import { SetupHomePageComponent } from './setup-home-page/setup-home-page.component';
import { ThirdComponent } from './third-page/third.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FourthPageComponent } from './fourth-page/fourth-page.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupHomePageComponent},
  {path: 'phone', component: PhonePageComponent},
  {path: 'third', component: ThirdComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    PhonePageComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    SetupHomePageComponent,
    ThirdComponent,
    FourthPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
