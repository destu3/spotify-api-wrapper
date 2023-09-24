import NetworkUtils from '../utils/NetworkUtils.js';

/**
 * Represents the album spotify recourse and provides methods to interact with spotify albums.
 */
class Album {
  /**
   * Creates a new Album instance.
   */
  constructor() {}

  /**
   * The base URL for Spotify album-related API endpoints.
   * @type {string}
   */
  static baseUrl = 'https://api.spotify.com/v1/albums';

  /**
   * Gets album details by its ID.
   * @param {string} id - The ID of the album to retrieve.
   * @param {string} accessToken - The access token for authentication.
   * @returns {Promise<any>} A Promise that resolves to the album data or rejects with an error.
   */
  static getAlbum(id, accessToken) {
    const url = `${Album.baseUrl}/${id}`;
    return NetworkUtils.makeRequest(url, accessToken);
  }
}

export default Album;
