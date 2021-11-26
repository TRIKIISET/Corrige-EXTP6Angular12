import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/model/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-listlivres',
  templateUrl: './listlivres.component.html',
  styleUrls: ['./listlivres.component.css']
})
export class ListlivresComponent implements OnInit {

  tab:Livre[]=[];

  constructor(private livreService:LivreService) { }

  ngOnInit(): void {
    this.tab = this.livreService.getLivres();
  }

  onAffiche(categ:string){
    this.tab = this.livreService.getLivresByCategorie(categ);
  }

  onAfficheAll(){
    this.tab = this.livreService.getLivres();
  }


}
