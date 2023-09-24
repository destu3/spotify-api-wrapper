import AuthHandler from './classes/utils/AuthHandler.js';
import Album from './classes/resources/Album.js';

/**
 * A class for making API requests to Spotify.
 */
class SpotifyWrapper {
  /**
   * Creates a new SpotifyWrapper instance.
   * @param {string} clientId - The Spotify API client ID.
   * @param {string} clientSecret - The Spotify API client secret.
   * @param {AuthHandler} authHandler - The authentication handler for this instance.
   */
  constructor(clientId, clientSecret) {
    this.authHandler = new AuthHandler(clientId, clientSecret);
  }

  /**
   * Gets album details by its ID.
   * @param {string} id - The ID of the album to retrieve.
   * @returns {Promise<any>} A Promise that resolves to the album data or rejects with an error.
   */
  async getAlbum(id) {
    await this.authHandler.verifyToken();
    return Album.getAlbum(id, this.authHandler.accessToken);
  }
}

export default SpotifyWrapper;
