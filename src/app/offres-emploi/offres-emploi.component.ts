import { Component, OnInit } from '@angular/core';
import { Emploi } from '../Core/model/Emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})

export class OffresEmploiComponent implements OnInit {
  listEmploi!:Emploi[];
  nombreOffresNonCloturees!:number;
  entreprise!:string
    constructor() { }

  ngOnInit(): void {
    this.listEmploi=[
    {reference: "R01",titre:"Dev",entreprise:"Focus",etat:true},
    {reference: "R02",titre:"Management",entreprise:"Actia",etat:false},
    {reference: "R03",titre:"Security",entreprise:"Proxym",etat:true}]
  }
  Bilan() {
    this.nombreOffresNonCloturees = this.listEmploi.filter(emploi => emploi.etat).length;
  }
}
