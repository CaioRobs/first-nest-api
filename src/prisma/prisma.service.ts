import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          // url: process.env.DATABASE_URL,
          url: 'postgresql://root:alohomora@localhost:5432/nest?schema=public',
        },
      },
    });
  }
}
