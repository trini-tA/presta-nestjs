import { Injectable, Get, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  constructor(private readonly http: HttpService) {}

  getProducts(): object {
    return this.http
      .get(
        process.env.PRESTA_WS_URI +
          '/products&display=full&output_format=JSON&ws_key=' +
          process.env.PRESTA_KEY,
      )
      .pipe(map((response) => response.data));
  }
}

/*
import { Controller, Get, HttpService } from '@nestjs/common';
import { AppService } from './app.service';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly http: HttpService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  root() {
    return this.http
      .get(
        'https://prestashop.cayde6.ovh/api/products&display=full&output_format=JSON&ws_key=JHR6PXX3TG9TNKDWL9G64AQHK2E4MRW5',
      )
      .pipe(map((response) => response.data));
  }
}

 */
