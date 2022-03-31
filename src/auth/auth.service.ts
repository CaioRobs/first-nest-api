import { Injectable } from '@nestjs/common';
// import { User, Bookmark } from '@prisma/client';

@Injectable({})
export class AuthService {
  signUp() {
    return { message: 'i am signed up' };
  }

  signIn() {
    return { message: 'i am signed up' };
  }
}
