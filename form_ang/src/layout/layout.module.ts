import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentsModule } from '../app/components/components.module';
import { Model } from '../model/model';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, FooterComponent],
  imports: [CommonModule, ComponentsModule],
  providers: [Model],
  exports: [HeaderComponent, LayoutComponent, FooterComponent]
})
export class LayoutModule {}
