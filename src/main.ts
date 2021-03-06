import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  // --- without hbs --- const app = await NestFactory.create(AppModule);
  // view hbs
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  // view hbs

  // testing hotReload
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  await app.listen(3300);
}
bootstrap();
