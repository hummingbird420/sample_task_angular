import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module.';
import { ApiInterceptor, ApiInterceptorProvider } from './utilities/api-interceptor';
import { ToastService } from './services/toast-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ApiInterceptorProvider, DatePipe, ToastService],
  bootstrap: [AppComponent],

})
export class AppModule { }