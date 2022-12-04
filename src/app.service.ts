import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<code style="color: slateblue; font-size: 20px;">hello world !!!</code> <br/>${new Date().toLocaleDateString()}`;
  }
}
