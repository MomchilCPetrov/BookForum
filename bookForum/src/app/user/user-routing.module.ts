import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Auth } from "../core/guards/auth";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [Auth],
        data: {
            authenticationRequired: false,
            autheticationFailUrl: '/'
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [Auth],
        data: {
            authenticationRequired: false,
            autheticationFailUrl: '/'
        }
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {}