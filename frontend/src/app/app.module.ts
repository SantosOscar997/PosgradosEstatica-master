import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { FooterComponent } from './components/footer/footer.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { PlanesDeEstudioComponent } from './components/planes-de-estudio/planes-de-estudio.component';
import { NucleoAcademicoComponent } from './components/nucleo-academico/nucleo-academico.component';
import { RequisitosIngresoComponent } from './components/requisitos-ingreso/requisitos-ingreso.component';
import { RequisitosEgresoComponent } from './components/requisitos-egreso/requisitos-egreso.component';
import { RequisitosPermanenciaComponent } from './components/requisitos-permanencia/requisitos-permanencia.component';
import { SeleccionAspirantesComponent } from './components/seleccion-aspirantes/seleccion-aspirantes.component';
import { CaracteristicasTesisComponent } from './components/caracteristicas-tesis/caracteristicas-tesis.component';
import { PrimeraGeneracionComponent } from './components/primera-generacion/primera-generacion.component';
import { SegundaGeneracionComponent } from './components/segunda-generacion/segunda-generacion.component';
import { TerceraGeneracionComponent } from './components/tercera-generacion/tercera-generacion.component';
import { VinculacionComponent } from './components/vinculacion/vinculacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    PerfilesComponent,
    FooterComponent,
    ObjetivosComponent,
    PlanesDeEstudioComponent,
    NucleoAcademicoComponent,
    RequisitosIngresoComponent,
    RequisitosEgresoComponent,
    RequisitosPermanenciaComponent,
    SeleccionAspirantesComponent,
    CaracteristicasTesisComponent,
    PrimeraGeneracionComponent,
    SegundaGeneracionComponent,
    TerceraGeneracionComponent,
    VinculacionComponent,
    ContactoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
