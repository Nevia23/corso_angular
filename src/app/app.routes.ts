import { Routes } from '@angular/router';
import { Home } from './componenti/home/home';
import { About } from './componenti/about/about';
import { Contact } from './componenti/contact/contact';
import { ContactDetails } from './componenti/contact-details/contact-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact, children: [{ path: ':id', component: ContactDetails }] }
];
