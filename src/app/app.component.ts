import { Component } from '@angular/core';
import { People} from '../assets/data/mock-people'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'birthdaylist';

  //store the array of objects into dataFromParent and pass it to child component
  dataFromParent = People;

  onClick(){
    this.dataFromParent = [];
    
  }
}
