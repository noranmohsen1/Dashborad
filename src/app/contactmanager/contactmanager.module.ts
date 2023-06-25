import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './conponents/toolbar/toolbar.component';
import { MainContentComponent } from './conponents/main-content/main-content.component';
import { SidenavComponent } from './conponents/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './conponents/notes/notes.component';
import { NewContactDialogComponent } from './conponents/new-contact-dialog/new-contact-dialog.component';

const routes: Routes =[
  {path: '', component:ContactmanagerAppComponent,
  children:[
    {path:'contactmanager/:id',component: MainContentComponent},
    {path:'',component: MainContentComponent}
  ]
},
  {path: '**',redirectTo: ''}
];

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    UserService
  ]
})
export class ContactmanagerModule { }
