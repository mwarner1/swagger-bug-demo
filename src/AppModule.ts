import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {TestController} from "./TestController.js";

@Module({
    imports: [
        ConfigModule.forRoot()
    ],
    controllers: [TestController],

})

export class AppModule {}
