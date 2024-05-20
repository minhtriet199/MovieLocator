import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoRootModule } from '../transloco-root.module';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  exports:[HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    TranslocoRootModule
  ]
})
export class CoreModule { }
