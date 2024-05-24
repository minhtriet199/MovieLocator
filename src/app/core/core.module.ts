import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoRootModule } from '../transloco-root.module';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { DecodeHtmlEntitiesPipe } from './pipe/decodeHtmlPipe';
import { ApiService } from './services/api.Services';
import { DataTransferServices } from './services/datatransfer';
import { HeaderComponent } from './shared/layout/header/header.component';

const componentList: any[]= [
  HeaderComponent,
]
@NgModule({
  declarations: [componentList],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
    // ApiServices
  ],
  exports:[componentList],
  providers: [
    DecodeHtmlEntitiesPipe,
    ApiService,
    DataTransferServices,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
