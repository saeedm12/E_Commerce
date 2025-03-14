import { BrandsComponent } from './Features/Pages/brands/brands.component';
import { ProductsComponent } from './Features/Pages/products/products.component';
import { CartComponent } from './Features/Pages/cart/cart.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Features/Pages/home/home.component';
import { CategoriesComponent } from './Features/Pages/categories/categories.component';
import { LoginComponent } from './Features/Auth/login/login.component';
import { RegisterComponent } from './Features/Auth/register/register.component';
import { NotFoundComponent } from './Features/Layout/not-found/not-found.component';
import { authGuard } from './Core/Guards/AuthGuard/auth.guard';
import { ProductDetailsComponent } from './Features/Pages/product-details/product-details.component';
import { AddressComponent } from './Features/Pages/address/address.component';
import { AllordersComponent } from './Features/Pages/allorders/allorders.component';
import { ForgotPasswordComponent } from './Features/Auth/forgot-password/forgot-password.component';


export const routes: Routes = [

    {path:"" ,redirectTo:"home", pathMatch:"full"},
    {path:"home" , component:HomeComponent , canActivate:[authGuard], title:"Home"},
    {path:"cart" , component:CartComponent, canActivate:[authGuard], title:"Cart"},
    {path:"products" , component:ProductsComponent, canActivate:[authGuard], title:"Products"},
    {path:"categories" , component:CategoriesComponent, canActivate:[authGuard], title:"Categories"},
    {path:"brands" , component:BrandsComponent, canActivate:[authGuard], title:"Brands"},
    {path:"address/:CartId" , component:AddressComponent, canActivate:[authGuard], title:"Address"},
    {path:"allorders" , component:AllordersComponent, canActivate:[authGuard], title:"All orders"},
    {path:"ProductDetails/:id" , component:ProductDetailsComponent, canActivate:[authGuard], title:"Product Details"},
    
    {path:"login" , component:LoginComponent},
    {path:"register" , component:RegisterComponent},
    {path:"ForgotPassword" , component:ForgotPasswordComponent},
    {path:"**" , component:NotFoundComponent}
];
