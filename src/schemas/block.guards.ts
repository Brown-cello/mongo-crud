import { CanActivate, ExecutionContext, HttpException } from "@nestjs/common";


export class BlockGuard implements CanActivate{
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const isBlocked =request.user?.isBlocked;

        if (isBlocked===true) {
            throw new HttpException('user is blocked ',403)
    }
    return true;    
}}