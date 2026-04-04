import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Server } from './server/server';
import { FormsModule } from '@angular/forms';
import { Core } from './core/core';
import { ServerElement } from './server-element/server-element';
import { CourseCard } from './course-card/course-card';
import { CourseImage } from './course-image/course-image';
import { BasicHighkight } from './directives/basic-highkight';
import { Highlighted } from './directives/highlighted';

@NgModule({
  declarations: [App, Header, Core, Server, ServerElement, CourseCard, CourseImage, BasicHighkight, Highlighted],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [App], // the root component that will be rendered in the browser
})
export class AppModule {}
