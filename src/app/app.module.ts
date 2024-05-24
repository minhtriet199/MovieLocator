import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { TranslocoModule } from '@ngneat/transloco';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TranslocoRootModule } from './transloco-root.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatIconModule,
    TranslocoModule,
    HttpClientModule,
    TranslocoRootModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
