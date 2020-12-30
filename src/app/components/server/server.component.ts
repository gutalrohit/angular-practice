import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  // template: `<div class="server__font">Server is running</div>`,
  templateUrl: "./server.component.html",
  // styles: [`
  //   .server__font {
  //     color: blue;
  //   }
  // `]
  styleUrls: ["./server.component.scss"]
})
export class ServerComponent {
  serverNumber: string = "2";
  anotherServer: string = "Another server is also running";
  enteredName: string = "";
  fontColor = "red";
  showngif = false;
  showServers = [1, 2, 3, 4, 5];
  clickHandler() {
    alert("Click Button was clicked");
  }
}
