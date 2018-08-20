import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  maquinas;
  params;
  constructor(private http: HttpClient){
  }

  changeStatus(status, id) : void {
    this.params = {"status": status, "id": id}
    this.http.put('urlPut', this.params).subscribe(data => {
      console.log(data);
      this.maquinas = data;
    });
  }

  ngOnInit(): void {
    this.http.get('https://my-json-server.typicode.com/joannasmoura/demo-json-server/maquinas').subscribe(data => {
      console.log(data);
      this.maquinas = data;
    });
  }

}



