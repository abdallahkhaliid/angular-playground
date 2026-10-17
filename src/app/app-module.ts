import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';
import { Header } from './header/header';
import { Server } from './server/server';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Core } from './core/core';
import { ServerElement } from './server-element/server-element';
import { CourseCard } from './course-card/course-card';
import { CourseImage } from './course-image/course-image';
import { BasicHighkight } from './directives/basic-highkight';
import { Highlighted } from './directives/highlighted';
import { AccountComponent } from './account/account';
import { NewAccountComponent } from './new-account/new-account';
import { Tdf } from './tdf/tdf';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { Pipes } from './pipes/pipes';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { Posts } from './posts/posts';
import { AuthInterceptorService } from './interceptors/auth.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Core,
    Server,
    ServerElement,
    CourseCard,
    CourseImage,
    BasicHighkight,
    Highlighted,
    AccountComponent,
    NewAccountComponent,
    Tdf,
    ReactiveForms,
    Pipes,
    ShortenPipe,
    FilterPipe,
    Posts,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent], // the root component that will be rendered in the browser
})
export class AppModule {}
