import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSectionComponent } from './info-section/info-section.component';
import { InfoCardComponent } from './info-section/info-card/info-card.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { ImageCardComponent } from './work-section/image-card/image-card.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { SliderSectionComponent } from './slider-section/slider-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InfoSectionComponent,
    InfoCardComponent,
    WorkSectionComponent,
    ImageCardComponent,
    BlogSectionComponent,
    ContactSectionComponent,
    SliderSectionComponent
  ],
  exports: [
    InfoSectionComponent,
    WorkSectionComponent,
    BlogSectionComponent,
    ContactSectionComponent,
    SliderSectionComponent
  ]
})
export class ComponentsModule {}
