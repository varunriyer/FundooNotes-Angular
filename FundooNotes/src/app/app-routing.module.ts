import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { TrashComponent } from './dashboard/trash/trash.component';
import { ReminderComponent } from './dashboard/reminder/reminder.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'notes', component: NotesComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'reminders', component: ReminderComponent },
      { path: '', redirectTo: 'notes', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
