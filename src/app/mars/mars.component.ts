import { Component, OnInit } from '@angular/core';
import { MarsImage }  from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  marsImages: MarsImage[];
  cameras: string[] = ['MAST','CHEMCAM','NAVCAM'];
  currentCamera:string;
  constructor(private servicio: NasaApiService) { }

  ngOnInit() {
    this.currentCamera = this.cameras[0]
    this.refreshView('MAST')
  }

  onSelectCamera(camera:string){
    this.refreshView(camera);
  }

  refreshView(camera:string){
    this.servicio.getMarsImages(camera)
    .subscribe(data =>{
      console.log("data",data)
      this.marsImages = data.photos
    })
  }

}
