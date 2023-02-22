import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent implements OnInit {
  user={nom:"", email:"", typeCarte:"", numeroCarte:"", dateExpiration:"", code:""}
  constructor() { }

  ngOnInit(): void {
  }

}
