import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {
  centroId:any

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(
      params => this.centroId = params['centroId']
    )
   }

  ngOnInit(): void {
  }

}
