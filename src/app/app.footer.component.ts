import { Component, Inject, forwardRef } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer">
            <span class="footer-text-left">
                <img src="assets/layout/images/logo-dark.png" />
            </span>
            
        </div>
    `
})
export class AppFooterComponent {

}
