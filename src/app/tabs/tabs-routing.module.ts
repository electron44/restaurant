import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'ajouter',
            children :[{
                path: '',
                loadChildren: () => import('../tab2/ajouter/ajouter.module').then( m => m.AjouterPageModule)
            }]
          },
          {
            path: 'modifier',
            children :[{
                path: '',
                loadChildren: () => import('../tab2/modifier/modifier.module').then( m => m.ModifierPageModule)
            }]
          },
          {
            path: 'modifier/:id',
            children :[{
                path: '',
                loadChildren: () => import('../tab2/modifier/modifier.module').then( m => m.ModifierPageModule)
            }]
          },
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: 'ajouter',
            children :[{
                path: '',
                loadChildren: () => import('../tab3/ajouter/ajouter.module').then( m => m.AjouterPageModule)
            }]
          },
          {
            path: 'modifier',
            children :[{
                path: '',
                loadChildren: () => import('../tab3/modifier/modifier.module').then( m => m.ModifierPageModule)
            }]
          },
          {
            path: 'modifier/:id',
            children :[{
                path: '',
                loadChildren: () => import('../tab3/modifier/modifier.module').then( m => m.ModifierPageModule)
            }]
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
