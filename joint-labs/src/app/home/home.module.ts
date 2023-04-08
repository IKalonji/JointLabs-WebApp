import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CommunityComponent } from './components/community/community.component';
import { TeamComponent } from './components/team/team.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    CommunityComponent,
    TeamComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
