import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'howitworks', component: HowItWorksComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'team', component: TeamComponent },
    { path: 'testimonial', component: TestimonialsComponent },
    { path: 'subscribe', component: SubscribeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent }
];


@NgModule({
  imports:[
      RouterModule.forRoot(routes)
  ],
    exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
