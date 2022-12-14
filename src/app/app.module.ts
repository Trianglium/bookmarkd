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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HighlighthtDirective } from './directives/highlightht.directive';
import { FilterByTimePipe } from './pipes/filter-by-time.pipe';
import { FilterByNetworkPipe } from './pipes/filter-by-network.pipe';
import { FilterByPopularPipe } from './pipes/filter-by-popular.pipe';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

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
    AboutComponent,
    HighlighthtDirective,
    FilterByTimePipe,
    FilterByNetworkPipe,
    FilterByPopularPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
