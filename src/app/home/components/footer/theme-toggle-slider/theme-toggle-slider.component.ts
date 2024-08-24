import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Theme } from 'src/app/assets/themes/theme.interface';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-toggle-slider',
  templateUrl: './theme-toggle-slider.component.html',
  styleUrls: ['./theme-toggle-slider.component.scss'],
})
export class ThemeToggleSliderComponent implements OnInit, OnDestroy {
  // Web Themes
  private theme: string = '';
  // Web Theme Subscription
  private themeSubscription: Subscription;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService
      .getTheme$()
      .subscribe((theme) => (this.theme = theme));
  }

  ngOnInit(): void {}

  public changeTheme() {
    if (this.theme === Theme.LIGHT) {
      this.themeService.setTheme(Theme.DARK);
    } else if (this.theme === Theme.DARK) {
      this.themeService.setTheme(Theme.LIGHT);
    }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
