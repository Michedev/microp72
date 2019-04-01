import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-contacts',
    pathMatch: 'full'
  },
  { path: 'list-contacts', loadChildren: './list-contacts/list-contacts.module#ListContactsPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
