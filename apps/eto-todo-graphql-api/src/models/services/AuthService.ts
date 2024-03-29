import { Service } from 'typedi';
import { OAuth2Client, TokenPayload } from 'google-auth-library';

@Service('AuthService')
export class AuthService {
  private googleAuthClient: OAuth2Client;

  constructor() {
    this.googleAuthClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  }

  public async verifyTokenId(tokenId: string): Promise<TokenPayload> {
    const ticket = await this.googleAuthClient.verifyIdToken({
      idToken: tokenId,
    });
    return ticket.getPayload();
  }

  public generateAccessToken(): string {
    const generateString = () => Math.random().toString(36).substring(2, 15);
    return (
      generateString() + generateString() + generateString() + generateString()
    );
  }
}
