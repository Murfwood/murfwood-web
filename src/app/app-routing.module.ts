import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebServicesComponent } from './web-services/web-services.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { WebDevelopComponent } from './web-develop/web-develop.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'web-services', component: WebServicesComponent },
  { path: 'web-design', component: WebDesignComponent },
  { path: 'web-development', component: WebDevelopComponent },
  { path: 'graphics', component: GraphicsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
