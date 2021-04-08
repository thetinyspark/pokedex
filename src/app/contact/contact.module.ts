import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogService } from '../catalog.service';
import { IsNameTakenValidator } from './validators/IsNameTakenValidator';
import { VowelValidator } from './validators/VowelValidator';



@NgModule({
  declarations: [ContactComponent, IsNameTakenValidator, VowelValidator],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forChild( 
      [
        {
          path: "", 
          component: ContactComponent
        }
      ]
    )
  ], 
  exports:[ContactComponent, IsNameTakenValidator, VowelValidator],
  providers:[CatalogService, IsNameTakenValidator, VowelValidator]
})
export class ContactModule { }
