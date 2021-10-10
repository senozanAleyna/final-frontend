import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //ul li head vs gibi html tagi gibi kullanabileceklerimiz index.html nin bunu tanıma sebebi burasıdır.
  templateUrl: './app.component.html', //sen bunun datasını yönetecek bir compenentsin (./ aynı klasör demektir)
  styleUrls: ['./app.component.css'] //ilgili htmlnin csslerini koydugumuz yer. [] array oldugunu gösterir
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Aleyna Şenozan"


}
