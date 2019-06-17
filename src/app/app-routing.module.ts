import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', loadChildren: './inicio/login/login.module#LoginPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'cadastro', loadChildren: './inicio/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'config', loadChildren: './config/config.module#ConfigPageModule' },
  { path: 'alterar-senha', loadChildren: './inicio/alterar-senha/alterar-senha.module#AlterarSenhaPageModule' },
  { path: 'detalhes-noticias', loadChildren: './detalhes-noticias/detalhes-noticias.module#DetalhesNoticiasPageModule' },
  { path: 'por-numero/:numero', loadChildren: './detalhes-noticias/detalhes-noticias.module#DetalhesNoticiasPageModule' },
  { path: 'detalhes-curso', loadChildren: './detalhes-curso/detalhes-curso.module#DetalhesCursoPageModule' },
  { path: 'curso-numero/:numero', loadChildren: './detalhes-curso/detalhes-curso.module#DetalhesCursoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
