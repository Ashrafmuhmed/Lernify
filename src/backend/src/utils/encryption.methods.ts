import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { ConfigService } from '@nestjs/config';

export class EncryptionMethods {
  constructor(private configService: ConfigService) {}
  iv = randomBytes(16);
  generate_key = this.configService.get<string>('ENCRYPTION_KEY');

  encrypt = async (password: string) => {
    const key = (await promisify(scrypt)(
      this.generate_key,
      'salt',
      32,
    )) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);
    const encryptedText = Buffer.concat([
      cipher.update(password),
      cipher.final(),
    ]).toString();
    return encryptedText;
  };
}
