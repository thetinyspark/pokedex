import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactComponent],
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
  ]
})
export class ContactModule { }
