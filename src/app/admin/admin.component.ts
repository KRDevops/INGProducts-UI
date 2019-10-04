import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  fileUploadUrl: string;

  constructor() { }

  ngOnInit() {
    this.fileUploadUrl = `${environment.apiUrl}/products`;
  }

}
