import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Home } from './core/home/home';
import { ConferenceList } from './core/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularProject4dasi13');
}
