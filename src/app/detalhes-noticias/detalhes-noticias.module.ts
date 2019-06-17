import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalhesNoticiasPage } from './detalhes-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesNoticiasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalhesNoticiasPage]
})
export class DetalhesNoticiasPageModule {}
