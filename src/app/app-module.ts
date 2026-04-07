import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';
import { Header } from './header/header';
import { Server } from './server/server';
import { FormsModule } from '@angular/forms';
import { Core } from './core/core';
import { ServerElement } from './server-element/server-element';
import { CourseCard } from './course-card/course-card';
import { CourseImage } from './course-image/course-image';
import { BasicHighkight } from './directives/basic-highkight';
import { Highlighted } from './directives/highlighted';
import { AccountComponent } from './account/account';
import { NewAccountComponent } from './new-account/new-account';

@NgModule({
  declarations: [AppComponent, Header, Core, Server, ServerElement, CourseCard, CourseImage, BasicHighkight, Highlighted, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient(), provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [AppComponent], // the root component that will be rendered in the browser
})
export class AppModule {}
