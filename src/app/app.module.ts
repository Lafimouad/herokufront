import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';
import { FormsModule } from '@angular/forms';
import { DocumentComponent } from './demo/document/document.component';

/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// keycloak
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakSecurityService } from './services/creditservices/keycloak-security.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreditAutoComponent } from './demo/credit-auto/credit-auto.component';
export function kcFactory(kcSecurity: KeycloakSecurityService){
  return ()=> kcSecurity.init();
}
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    ToggleFullScreenDirective,
    DocumentComponent ,
    CreditAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    KeycloakAngularModule,HttpClientModule,FormsModule,Ng2SearchPipeModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ {provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true},NavigationItem],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
