import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IFrameComponent } from './iframe.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [IFrameComponent]
})
export class IFrameComponentModule {}
