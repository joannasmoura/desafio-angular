import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  maquinas;
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get('https://my-json-server.typicode.com/joannasmoura/demo-json-server/maquinas').subscribe(data => {
      console.log(data);
      this.maquinas = data;
    });
  }

}



