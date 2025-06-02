import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full'
      },
      {
        path: 'notes',
        loadComponent: () =>
          import('./dashboard/notes/notes.component').then(m => m.NotesComponent)
      },
      {
        path: 'trash',
        loadComponent: () =>
          import('./dashboard/trash/trash.component').then(m => m.TrashComponent)
      },
      {
        path: 'reminders',
        loadComponent: () =>
          import('./dashboard/reminder/reminder.component').then(m => m.ReminderComponent)
      }
    ]
  }
];
