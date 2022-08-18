import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCreateComponent } from './lists/list-create/list-create.component';
import { ListUpdateComponent } from './lists/list-update/list-update.component';
import { ListComponent } from './lists/list/list.component';
import { BookComponent } from './books/book/book.component';
import { AuthComponent } from './users/auth/auth.component';
import { RssComponent } from './users/rss/rss.component';
import { BooksComponent } from './users/books/books.component';
import { NetworkComponent } from './users/network/network.component';
import { ListsComponent } from './users/lists/lists.component';
import { JournalFeedComponent } from './journal/journal-feed/journal-feed.component';
import { PostDetailComponent } from './journal/post-detail/post-detail.component';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCreateComponent,
    ListUpdateComponent,
    ListComponent,
    BookComponent,
    AuthComponent,
    RssComponent,
    BooksComponent,
    NetworkComponent,
    ListsComponent,
    JournalFeedComponent,
    PostDetailComponent,
    WelcomeComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
