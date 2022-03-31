import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signUp() {
    return { message: 'i am signed up' };
  }

  signIn() {
    return { message: 'i am signed up' };
  }
}
