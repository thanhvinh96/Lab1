import { Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'user', component: UserListComponent },
    { path: 'user-add', component: UserAddComponent },
    { path: 'user-edit/:id', component: UserEditComponent },
    { path: 'product', component: ProductListComponent },
    { path: 'product-add', component: ProductAddComponent },
    { path: 'product-edit/:id', component: ProductEditComponent },
    { path: '**', component: NotfoundComponent }
];
