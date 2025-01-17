import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {NestFactory} from "@nestjs/core";
import {CorsOptions} from "@nestjs/common/interfaces/external/cors-options.interface.js";
import cookieParser from "cookie-parser";
import {AppModule} from "./AppModule.js";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());
    const corsOptions: CorsOptions = {
        origin: true,
        methods: 'GET,HEAD,POST',
        credentials: true,
    };
    app.enableCors(corsOptions);

    const config = new DocumentBuilder()
        .setTitle("Test")
        .setDescription("Test API")
        .setVersion('1.0')
        .addBearerAuth({
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
            in: "header",
            name: "JWT",
            description: "Enter your Bearer token",
        }, "Authorization")
        .addSecurityRequirements("Authorization")
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("v1/api", app, documentFactory);
    await app.listen(8080);
    console.log(`Application is running on: ${await app.getUrl()}`);
}

await bootstrap();
