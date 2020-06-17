import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Code";
  public name="Sandal";
    recievedChildMessage: string;
  getMessage(message:string){
    this.recievedChildMessage=message;
  }
 
}
