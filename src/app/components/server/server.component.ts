import { Component } from '@angular/core';

@Component ({
  selector: 'app-server',
  // template: `<div class="server__font">Server is running</div>`,
  templateUrl: './server.component.html',
  // styles: [`
  //   .server__font {
  //     color: blue;
  //   }
  // `]
  styleUrls: ['./server.component.scss']
})

export class ServerComponent {
  serverNumber: string = '2';
  anotherServer: string = 'Another server is also running';
  enteredName: string = '';
  clickHandler() {
    alert('Click Button was clicked');
  }

}