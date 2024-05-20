import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { TranslocoModule } from '@ngneat/transloco';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatIconModule,
    TranslocoModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
