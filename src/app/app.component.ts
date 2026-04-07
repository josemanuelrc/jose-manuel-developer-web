import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomCursorComponent } from './home/components/custom-cursor/custom-cursor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'Jose Manuel Rodríguez Camacho - Web Developer';
}
