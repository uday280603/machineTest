import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileDashboardComponent } from './shared/component/mobile-dashboard/mobile-dashboard.component';
import { MobileComponent } from './shared/component/mobile/mobile.component';
import { PostDashoardComponent } from './shared/component/post-dashoard/post-dashoard.component';
import { PostComponent } from './shared/component/post/post.component';
import { MobileDashboardTwoComponent } from './shared/component/mobile-dashboard-two/mobile-dashboard-two.component';
import { MobileTwoComponent } from './shared/component/mobile-two/mobile-two.component';
import { MovieDashboardComponent } from './shared/component/movie-dashboard/movie-dashboard.component';
import { MovieComponent } from './shared/component/movie/movie.component';
import { MovieDashboardTwoComponent } from './shared/component/movie-dashboard-two/movie-dashboard-two.component';
import { MovieTwoComponent } from './shared/component/movie-two/movie-two.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileDashboardComponent,
    MobileComponent,
    PostDashoardComponent,
    PostComponent,
    MobileDashboardTwoComponent,
    MobileTwoComponent,
    MovieDashboardComponent,
    MovieComponent,
    MovieDashboardTwoComponent,
    MovieTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
