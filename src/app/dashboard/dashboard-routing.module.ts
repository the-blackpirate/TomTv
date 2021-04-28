import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsComponent } from './components/channels/channels.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'channels',
        component: ChannelsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
