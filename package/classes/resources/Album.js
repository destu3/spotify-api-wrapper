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
   * @param {string} id - The ID of the album to retrieve.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @param {string} queryStringParams.market - An ISO 3166-1 alpha-2 country code.
   * @returns {Promise<any>} A Promise that resolves with album data or error information
   */
  static getAlbum(id, accessToken, queryStringParams) {
    const queryParams = new URLSearchParams(queryStringParams).toString();
    const url = `${Album.baseUrl}/${id}?${queryParams}`;
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
   * @param {string} queryStringParams.ids - A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
   * @param {string} queryStringParams.market - An ISO 3166-1 alpha-2 country code.
   * @returns {Promise<any>} A Promise that resolves with a collection of album data or error information
   */
  static getSeveralAlbums(accessToken, queryStringParams) {
    const queryParams = new URLSearchParams(queryStringParams).toString();
    const url = `${Album.baseUrl}?${queryParams}`;
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
   * @param {string} id - The ID of the album to retrieve.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @param {string} queryStringParams.market - An ISO 3166-1 alpha-2 country code.
   * @param {number} queryStringParams.limit - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   * @param {number} queryStringParams.offset - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
   * @returns {Promise<any>} A Promise that resolves with album tracks or error information
   */
  static getAlbumTracks(id, accessToken, queryStringParams) {
    const queryParams = new URLSearchParams(queryStringParams).toString();
    const url = `${Album.baseUrl}/${id}/tracks?${queryParams}`;
    return NetworkUtils.makeRequest(url, accessToken);
  }
}

export default Album;
