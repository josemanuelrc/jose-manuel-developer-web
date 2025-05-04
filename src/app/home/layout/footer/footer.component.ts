import { Component } from '@angular/core';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
import { ThemeToggleSliderComponent } from './theme-toggle-slider/theme-toggle-slider.component';
import { SvgIconComponent } from '../../components/svg-icon/svg-icon.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [
        LangSelectorComponent,
        ThemeToggleSliderComponent,
        SvgIconComponent,
    ]
})
export class FooterComponent {}
