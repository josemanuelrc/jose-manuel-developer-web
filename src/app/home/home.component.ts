import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // Web Theme
  public theme: string = '';
  // Web Theme Subscription
  private themeSubscription: Subscription;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService
      .getTheme$()
      .subscribe((theme) => (this.theme = theme));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
