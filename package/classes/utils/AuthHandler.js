/**
 * A class for handling authentication with Spotify and managing tokens.
 */
class AuthHandler {
  /**
   * Creates a new AuthHandler instance.
   * @param {string} clientId - The Spotify API client ID.
   * @param {string} clientSecret - The Spotify API client secret.
   */
  constructor(clientId, clientSecret) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.tokenUrl = 'https://accounts.spotify.com/api/token';
    this.accessToken;
    this.tokenStartTime;
  }

  /**
   * Requests an access token from the Spotify accounts service using the client_credentials flow.
   * @param {string} clientId - The Spotify API client ID.
   * @param {string} clientSecret - The Spotify API client secret.
   * @returns {Promise<void>} A Promise that resolves when the access token is successfully obtained and set.
   */
  async requestAccessToken() {
    const requestBody = new URLSearchParams({
      grant_type: 'client_credentials',
    });

    const base64Credentials = Buffer.from(
      `${this.clientId}:${this.clientSecret}`
    ).toString('base64');
    const authorizationHeader = `Basic ${base64Credentials}`;

    const res = await fetch(this.tokenUrl, {
      method: 'POST',
      body: requestBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: authorizationHeader,
      },
    });

    const { access_token } = await res.json();

    this.accessToken = access_token;
    this.tokenStartTime = Date.now();
  }

  /**
   * Checks if the current access token has expired. Tokens expire after 1 hour.
   * @returns {boolean} `true` if the access token has expired, `false` otherwise.
   */
  tokenExpired() {
    const currentTime = Date.now();
    return currentTime - this.tokenStartTime >= 3_300_000; // 55 minutes
  }

  /**
   * Verifies the current access token. If the token is missing or expired, it requests a new one.
   * @returns {Promise<boolean>} A Promise that resolves to `true` if the token is valid, or `false` if a new token was requested.
   */
  async verifyToken() {
    if (!this.accessToken || this.tokenExpired()) {
      await this.requestAccessToken();
      console.log('Token set');
      return false;
    }
    return true;
  }
}

export default AuthHandler;
