import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './Core/services/Flowbite/flowbite.service';
import { NavbarComponent } from "./Features/Layout/navbar/navbar.component";
import { FooterComponent } from "./Features/Layout/footer/footer.component";
import { NgxSpinnerModule} from "ngx-spinner";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent,NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'E-Comm_App';
  constructor(private flowbiteService: FlowbiteService) {}
  

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
