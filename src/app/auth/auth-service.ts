import { Service } from '@angular/core';

@Service()
export class AuthService {

    private isLogged = true;
    private isAdmin = true;

    isAuthenticated() {
        return this.isLogged;
    }

    isRoleAdmin() {
        return this.isAdmin;
    }
}
