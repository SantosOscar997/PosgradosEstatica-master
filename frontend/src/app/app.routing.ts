import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { PrimeraGeneracionComponent } from './components/primera-generacion/primera-generacion.component';
import { SegundaGeneracionComponent } from './components/segunda-generacion/segunda-generacion.component';
import { TerceraGeneracionComponent } from './components/tercera-generacion/tercera-generacion.component';
import { VinculacionComponent } from './components/vinculacion/vinculacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component'
import { PlanesDeEstudioComponent } from './components/planes-de-estudio/planes-de-estudio.component';
import { NucleoAcademicoComponent} from './components/nucleo-academico/nucleo-academico.component'
import { RequisitosIngresoComponent } from './components/requisitos-ingreso/requisitos-ingreso.component'
import { RequisitosEgresoComponent } from './components/requisitos-egreso/requisitos-egreso.component'
import { RequisitosPermanenciaComponent } from './components/requisitos-permanencia/requisitos-permanencia.component';
import {SeleccionAspirantesComponent} from './components/seleccion-aspirantes/seleccion-aspirantes.component'
import { CaracteristicasTesisComponent } from './components/caracteristicas-tesis/caracteristicas-tesis.component';
import { DescargasComponent } from './components/descargas/descargas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BecasComponent } from '../app/components/becas/becas.component';
import { LGACComponent } from '../app/components/lgac/lgac.component';
import { NormasEstatutosComponent } from './components/normas-estatutos/normas-estatutos.component'
const appRoutes = [

  { path: '*', component: CarrouselComponent,  pathMatch: 'full'},
  { path: 'inicio', component: CarrouselComponent,  pathMatch: 'full'},
  { path: 'perfiles', component: PerfilesComponent,  pathMatch: 'full'} ,
  { path: 'objetivos', component: ObjetivosComponent,  pathMatch: 'full'},
  { path: 'planes-de-estudio', component: PlanesDeEstudioComponent,  pathMatch: 'full'},
  { path: 'nucleo-academico', component: NucleoAcademicoComponent,  pathMatch: 'full'},
  { path: 'requisitos-ingreso', component: RequisitosIngresoComponent,  pathMatch: 'full'},
  { path: 'requisitos-egreso', component: RequisitosEgresoComponent,  pathMatch: 'full'},
  { path: 'requisitos-permanencia', component: RequisitosPermanenciaComponent,  pathMatch: 'full'},
  { path: 'seleccion-aspirantes', component: SeleccionAspirantesComponent,  pathMatch: 'full'},
  { path: 'caracteristicas-tesis', component: CaracteristicasTesisComponent,  pathMatch: 'full'},
  { path: 'primera-generacion', component: PrimeraGeneracionComponent, pathMatch: 'full'},
  { path: 'segunda-generacion', component: SegundaGeneracionComponent, pathMatch: 'full'},
  { path: 'tercera-generacion', component: TerceraGeneracionComponent, pathMatch: 'full'},
  { path: 'vinculacion', component: VinculacionComponent, pathMatch: 'full'},
  { path: 'contacto', component: ContactoComponent, pathMatch: 'full'},
  
  { path: '*', component: InicioComponent,  pathMatch: 'full'},
  { path: 'perfiles', component: PerfilesComponent,  pathMatch: 'full'} ,
  { path: 'objetivos', component: ObjetivosComponent,  pathMatch: 'full'},
  { path: 'planes-de-estudio', component: PlanesDeEstudioComponent,  pathMatch: 'full'},
  { path: 'nucleo-academico', component: NucleoAcademicoComponent,  pathMatch: 'full'},
  { path: 'requisitos-ingreso', component: RequisitosIngresoComponent,  pathMatch: 'full'},
  { path: 'requisitos-egreso', component: RequisitosEgresoComponent,  pathMatch: 'full'},
  { path: 'requisitos-permanencia', component: RequisitosPermanenciaComponent,  pathMatch: 'full'},
  { path: 'seleccion-aspirantes', component: SeleccionAspirantesComponent,  pathMatch: 'full'},
  { path: 'caracteristicas-tesis', component: CaracteristicasTesisComponent,  pathMatch: 'full'},
  { path: 'descargas', component: DescargasComponent,  pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent,  pathMatch: 'full'},
  { path: 'becas', component: BecasComponent,  pathMatch: 'full'},
  { path: 'lgac', component: LGACComponent,  pathMatch: 'full'},
  { path: 'normas-y-estatutos', component: NormasEstatutosComponent,  pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(appRoutes);
