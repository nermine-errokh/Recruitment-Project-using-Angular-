import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SigninComponent } from './signin/signin.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { NosOffresComponent } from './nos-offres/nos-offres.component';
import { SecteursComponent } from './secteurs/secteurs.component';
import { FooterComponent } from './footer/footer.component';
import { SingnupComponent } from './singnup/singnup.component';
import { BlogComponent } from './blog/blog.component';
import { DevJavaComponent } from './dev-java/dev-java.component';
import { DevNetComponent } from './dev-net/dev-net.component';
import { DataAnalyComponent } from './data-analy/data-analy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    SigninComponent,
    QuiSommesNousComponent,
    NosOffresComponent,
    SecteursComponent,
    FooterComponent,
    SingnupComponent,
    BlogComponent,
    DevJavaComponent,
    DevNetComponent,
    DataAnalyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
