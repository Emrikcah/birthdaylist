import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //receive data from parent component and use it in card template
  @Input() name = '';
  @Input() age: number;
  @Input() img = '';

  constructor() { }

  ngOnInit(): void {
  }

}


