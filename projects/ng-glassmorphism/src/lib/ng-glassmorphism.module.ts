import { NgModule } from '@angular/core';
import { NgGlassmorphismComponent } from './ng-glassmorphism.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [NgGlassmorphismComponent, CardComponent],
  imports: [
  ],
  exports: [NgGlassmorphismComponent, CardComponent]
})
export class NgGlassmorphismModule { }
