import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChannelsComponent } from './components/channels/channels.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WrapperComponent, DashboardComponent, ChannelsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // NG Material Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
})
export class DashboardModule {}
