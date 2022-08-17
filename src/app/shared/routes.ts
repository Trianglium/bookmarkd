import { Routes } from '@angular/router';
const routes: Routes = [
    {
        path: 'activity',
        component: ActivityComponent
    },
    {
        path: 'activity/:filter',
        component: ActivityFilterComponent
    }
    {
        path: 'books',
        component: BooksComponent
    },
    {
        path: 'book/:title',
        component: BookDetailComponent
    },
    {
        path: 'book/:title/members',
        component: BookMembersComponent 
    },
    {
        path: 'book/:title/fans',   
        component: BookFansComponent    
    },
    {
        path: 'book/:title/likes',  
        component: BookLikesComponent   
    },
    {
        path: 'book/:title/ratings',
        component: BookRatingsComponent 
    },
    {
        path: 'book/:title/reviews',
        component: BookReviewsComponent 
    },
    {
        path: 'book/:title/reviews/by/:filter',
        component: BookFilterReviewsComponent 
    },
    {
        path: 'book/:title/lists',  
        component: BookListsComponent   
    },
    {
        path: 'book/:title/lists/by/:filter',
        component: BookFilterListsComponent 
    },
    {
        path: 'journal',
        component: JournalComponent
    },
    {
      path: 'reviewers/popular/:timeframe',
      component: PopularReviewersComponent
    },
    {
        path: 'members',
        component: MembersComponent
    },
    {
      path: 'members/popular/:timeframe',
      component: PopularMembersComponent
    },
    {
      path: 'lists',
      component: ListsComponent
    },
    {
      path: 'lists/popular/:timeframe',
      component: PopularListsComponent
    },
    {
      path: 'lists/new',
      component: ListAddComponent
    },
    {
      path: 'lists/:slug/edit',
      component: ListEditComponent
    },
    {
        path: ':username/rss',
        component: UserRssComponent
    },
    {
        path: ':username/lists',
        component: UserListsComponent
    },
    {
        path: ':username/lists/:name',
        component: ListDetailComponent
    },
    {
        path: ':username/lists/:visibility',
        component: ListVisibilityComponent
    },
    {
        path: ':username/lists/:sortby',
        component: ListSortComponent
    },
    {
        path: ':username/likes',
        component: LikesComponent
    },
    {
        path: ':username/tags',
        component: TagsComponent
    },
    {
        path: ':username/following',
        component: NetworkComponent
    },
    {
        path: ':username/readlist',
        component: ReadListComponent
    },
    {
        path: ':username/activity',
        component: ActivityComponent
    },
    {
        path: ':username/books',
        component: BooksComponent
    },
    {
        path: ':username/books/ratings',
        component: RatingsComponent
    },
    {
        path: ':username/books/reviews',
        component: ReviewsComponent
    },
    {
        path: ':username/books/diary',
        component: DiaryComponent
    },
];