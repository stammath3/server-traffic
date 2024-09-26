import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerTrafficComponent } from "./dashboard/server-traffic/server-traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerTrafficComponent, TicketsComponent, ServerStatusComponent, DashboardItemComponent],
})
export class AppComponent {
 
  currentStatus = 'online';
}
