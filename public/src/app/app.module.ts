import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './common/services/http.service';
import { FormsModule } from '@angular/forms';
import { ShowAllAuthorComponent } from './common/components/show-all-author/show-all-author.component';
import { ViewAuthorComponent } from './common/components/view-author/view-author.component';
import { CreateAuthorComponent } from './common/components/create-author/create-author.component';
import { CreateQuoteComponent } from './common/components/create-quote/create-quote.component';
import { EditAuthorComponent } from './common/components/edit-author/edit-author.component';

@NgModule({
  declarations: [AppComponent, ShowAllAuthorComponent, ViewAuthorComponent, CreateAuthorComponent, CreateQuoteComponent, EditAuthorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
