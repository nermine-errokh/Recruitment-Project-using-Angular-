import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { NosOffresComponent } from './nos-offres/nos-offres.component';
import { SecteursComponent } from './secteurs/secteurs.component';
import { SingnupComponent } from './singnup/singnup.component';
import { BlogComponent } from './blog/blog.component';
import { DevNetComponent } from './dev-net/dev-net.component';
import { DevJavaComponent } from './dev-java/dev-java.component';
import { DataAnalyComponent } from './data-analy/data-analy.component';

const routes: Routes = [
  {path: "signin",component: SigninComponent},
  {path: "Qui",component:QuiSommesNousComponent},
  {path: "offres",component: NosOffresComponent},
  {path: "secteurs",component: SecteursComponent},
  {path: "signup",component: SingnupComponent},
  {path: "blog",component: BlogComponent},
  {path:"devNet",component:DevNetComponent},
  {path:"devJava",component:DevJavaComponent},
  {path:"datadev",component:DataAnalyComponent},
  {path:"",component:QuiSommesNousComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
