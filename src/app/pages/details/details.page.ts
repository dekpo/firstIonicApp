import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private storage: Storage) { }

  titre = 'Ceci est mon deuxième titre...';

  maVariable = 'Texte truc blahblah';

  monTableau = [];

  ajoutVar(){
    this.monTableau.push( this.maVariable );
    console.log( this.monTableau );
    this.storage.set('monTableau',this.monTableau);
  }

  supprIndex(i){
    console.log(i);
    this.monTableau.splice(i,1);
    this.storage.set('monTableau',this.monTableau);
  }

  methodeSoustitre(){
    return 'Ceci est mon sous-titre depuis une méthode';
  }

  ngOnInit() {

    this.storage.get('monTableau').then( (data) => {
      console.log('Données récupérées du Storage', data);
      if (data)this.monTableau = data;
    });

  }

}
