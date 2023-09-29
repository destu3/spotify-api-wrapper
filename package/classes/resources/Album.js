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
   * Get Spotify catalog information for a single album.
   * @param {string} id - The Spotify ID of the album.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with album data or error information
   */
  static getAlbum(id, accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(
      `${this.baseUrl}/${id}`,
      queryStringParams
    );
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with a collection of album data or error information
   */
  static getSeveralAlbums(accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(this.baseUrl, queryStringParams);
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
   * @param {string} id - The Spotify ID of the album.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with album tracks or error information
   */
  static getAlbumTracks(id, accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(
      `${this.baseUrl}/${id}/tracks`,
      queryStringParams
    );
    return NetworkUtils.makeRequest(url, accessToken);
  }
}

export default Album;
