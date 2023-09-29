import NetworkUtils from '../utils/NetworkUtils.js';

/**
 * Represents the playlist Spotify resource and provides methods to interact with Spotify playlists.
 */
class Playlist {
  /**
   * Creates a new Playlist instance.
   */
  constructor() {}

  /**
   * The base URL for Spotify playlist-related API endpoints.
   * @type {string}
   */
  static baseUrl = 'https://api.spotify.com/v1/playlists';

  /**
   * Get a playlist owned by a Spotify user.
   * @param {string} id - The Spotify ID of the playlist.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<object>} A Promise that resolves with playlist data or error information.
   */
  static getPlaylist(id, accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(
      `${this.baseUrl}/${id}`,
      queryStringParams
    );
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get a list of Spotify featured playlists.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<object>} A Promise that resolves with a collection of featured playlist data or error information.
   */
  static getFeaturedPlaylists(accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(
      'https://api.spotify.com/v1/browse/featured-playlists',
      queryStringParams
    );
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get a list of Spotify playlists tagged with a particular category.
   * @param {string} id - The Spotify category ID
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<object>} A Promise that resolves with a collection of category-specific playlist data or error information.
   */
  static getCategoryPlaylists(id, accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(
      `https://api.spotify.com/v1/browse/categories/${id}/playlists`,
      queryStringParams
    );
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get the current image associated with a specific playlist.
   * @param {string} id - The Spotify ID of the playlist.
   * @param {string} accessToken - The access token for authentication.
   * @returns {Promise<object>} A Promise that resolves with playlist cover image data or error information.
   */
  static getPlaylistCoverImage(id, accessToken) {
    const url = `${this.baseUrl}/${id}/images`;
    return NetworkUtils.makeRequest(url, accessToken);
  }
}

export default Playlist;
