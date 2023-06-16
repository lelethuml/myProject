import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = []; // Store registered users

  register(user: any): boolean {
    // Perform validation checks
    if (this.isUsernameTaken(user.username)) {
      // Username is already taken
      return false;
    }

    // Perform custom validation checks
    if (!this.isPasswordStrong(user.password)) {
      // Password is not strong enough
      return false;
    }

    // If validation passes, register the user
    this.users.push(user);
    return true;
  }

  login(username: string, password: string): boolean {
    // Perform authentication logic
    const user = this.findUserByUsername(username);

    if (!user) {
      // User not found
      return false;
    }

    if (user.password !== password) {
      // Invalid password
      return false;
    }

    // If authentication succeeds, set the user session or token
    // Add your code here

    return true;
  }

  private isUsernameTaken(username: string): boolean {
    // Check if username is already taken
    return this.users.some(user => user.username === username);
  }

  private isPasswordStrong(password: string): boolean {
    // Perform custom password strength validation checks
    // Add your code here
    // Example: Password must contain at least 8 characters and include a combination of letters, numbers, and special characters
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  }

  private findUserByUsername(username: string): any {
    // Find user by username
    return this.users.find(user => user.username === username);
  }
}

