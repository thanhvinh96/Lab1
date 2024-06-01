import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Bai2Component } from './components/bai2/bai2.component';
import { Bai3Component } from './components/bai3/bai3.component';
import { Bai4Component } from './components/bai4/bai4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,Bai2Component,Bai3Component,Bai4Component,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab1';


}
