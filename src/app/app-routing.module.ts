import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/modals/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'criteria-evidences',
    loadChildren: () => import('./pages/censo/criteria-evidences/criteria-evidences.module').then( m => m.CriteriaEvidencesPageModule)
  },
  {
    path: 'evidence',
    loadChildren: () => import('./pages/censo/evidence/evidence.module').then( m => m.EvidencePageModule)
  },
  {
    path: 'ficha',
    loadChildren: () => import('./pages/censo/sitio/ficha/ficha.module').then( m => m.FichaPageModule)
  },
  {
    path: 'espacios',
    loadChildren: () => import('./pages/reviews/espacios/espacios.module').then( m => m.EspaciosPageModule)
  },
  {
    path: 'modal-revision',
    loadChildren: () => import('./pages/reviews/modal-revision/modal-revision.module').then( m => m.ModalRevisionPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'bloques',
    loadChildren: () => import('./pages/ubicaciones/bloques/bloques.module').then( m => m.BloquesPageModule)
  },
  {
    path: 'campus',
    loadChildren: () => import('./pages/ubicaciones/campus/campus.module').then( m => m.CampusPageModule)
  },
  {
    path: 'espacios',
    loadChildren: () => import('./pages/ubicaciones/espacios/espacios.module').then( m => m.EspaciosPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/ubicaciones/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'planimetria',
    loadChildren: () => import('./pages/ubicaciones/planimetria/planimetria.module').then( m => m.PlanimetriaPageModule)
  },
  {
    path: 'sedes',
    loadChildren: () => import('./pages/ubicaciones/sedes/sedes.module').then( m => m.SedesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
