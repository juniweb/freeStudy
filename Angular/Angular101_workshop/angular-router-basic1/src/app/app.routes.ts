import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'about', component: AboutComponent},
    {path : 'developer', component: DeveloperComponent},
    {path : 'developer/:name', component: DeveloperComponent},
  ];

export default RouterModule.forRoot(routes);
