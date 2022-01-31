import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetService } from './services/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { PetComponent } from './pet/pet.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetComponent,
    AddPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
