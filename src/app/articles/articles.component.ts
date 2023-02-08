import { Component, OnInit } from '@angular/core';
import { Article } from '../Core/model/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
titel:string="Les articles du jour";
listeArticles!:Article[];
nombreArticlesAffiches!:number;
  constructor() { }

  ngOnInit(): void {
    
    this.listeArticles=[
      {titre:'le championnat du monde',contenu:'Le champion du monde de cette année est ',auteur:'Med Taher',date:'12/12/2005',categorie:'sport'},
      {titre:'les nouveaux parents',contenu:'les nouveaux parents',auteur:'Ahmed Said',date:'11/11/2018',categorie:'Education'},
      {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi',auteur:'Maria Elsa',date:'02/04/2017',categorie:'Travail'}
    ]
 
    this.nombreArticlesAffiches = this.listeArticles.filter(article => article.categorie !== 'Travail').length;
  }


}
