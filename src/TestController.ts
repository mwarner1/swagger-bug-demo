import {
    Controller,
    Headers,
    Get,
    UnauthorizedException
} from '@nestjs/common';

@Controller()
export class TestController {
    @Get(`/v1/auth/readlogin`)
    async getOwnUserLoginInfo(@Headers("Authorization") authHeader: string) {
        if (!authHeader) {
            throw new UnauthorizedException("No authorization header found");
        }
        return true;
    }
}
