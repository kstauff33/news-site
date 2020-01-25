import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrafListButtonComponent } from './draf-list-button/draf-list-button.component';
import { InstallButtonComponent } from './install-button/install-button.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import { SubscriptionBottomsheetComponent } from './subscription-bottomsheet/subscription-bottomsheet.component';
import { SubscriptionButtonComponent } from './subscription-button/subscription-button.component';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClipboardModule } from 'ngx-clipboard';
import { RedlineModule } from '../redline/redline.module';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DrafListButtonComponent,
    InstallButtonComponent,
    LoginButtonComponent,
    MenuButtonComponent,
    NavigationComponent,
    ShareButtonComponent,
    SubscriptionBottomsheetComponent,
    SubscriptionButtonComponent,
    HeaderComponent,
  ],
  exports: [
    DrafListButtonComponent,
    InstallButtonComponent,
    LoginButtonComponent,
    MenuButtonComponent,
    NavigationComponent,
    ShareButtonComponent,
    SubscriptionBottomsheetComponent,
    SubscriptionButtonComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    ClipboardModule,
    RedlineModule,
    MatBottomSheetModule,
    MatInputModule,
  ],
  entryComponents: [SubscriptionBottomsheetComponent]
})
export class HeaderModule { }
