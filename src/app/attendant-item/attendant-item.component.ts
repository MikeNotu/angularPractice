import { Component, Input, OnInit } from '@angular/core';
import { Attendant } from '../Attendant';

@Component({
  selector: 'app-attendant-item',
  templateUrl: './attendant-item.component.html',
  styleUrls: ['./attendant-item.component.css'],
})
export class AttendantItemComponent implements OnInit {
  @Input() attendant!: Attendant;

  constructor() {}

  ngOnInit(): void {}
}
