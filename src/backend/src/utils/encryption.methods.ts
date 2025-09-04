import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { createDecipheriv } from 'node:crypto';

const iv = randomBytes(16);
const generate_key = 'Ashrooof';

export class EncryptionMethods {
  constructor() {}
}

export const encrypt = async (password: string) => {
  const key = (await promisify(scrypt)(generate_key, 'salt', 32)) as Buffer;
  const cipher = createCipheriv('aes-256-ctr', key, iv);
  const encryptedText = Buffer.concat([
    cipher.update(password),
    cipher.final(),
  ]).toString();
  return encryptedText;
};

export const decrypt = async (password: any) => {
  const key = (await promisify(scrypt)(generate_key, 'salt', 32)) as Buffer;
  const decipher = createDecipheriv('aes-256-ctr', key, iv);
  return Buffer.concat([decipher.update(password), decipher.final()]);
};
