import { Component, OnInit } from '@angular/core';
import {MapService} from "../../shared/map.service";
import {Map} from "../../shared/map"

@Component({
  selector: 'bs-bronte-walk',
  templateUrl: './bronte-walk.component.html',
  styleUrls: ['./bronte-walk.component.css']
})
export class BronteWalkComponent implements OnInit {
  route = this.mapService.getRoute(1);
  zoom = this.route.zoom;
  center = this.route.center;
  path = this.route.path;



  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    console.log(this.center);
  }

  getPolyCoords () { }

}
