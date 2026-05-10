import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileDashboardComponent } from './shared/component/mobile-dashboard/mobile-dashboard.component';
import { MobileComponent } from './shared/component/mobile/mobile.component';
import { PostDashoardComponent } from './shared/component/post-dashoard/post-dashoard.component';
import { PostComponent } from './shared/component/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileDashboardComponent,
    MobileComponent,
    PostDashoardComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
