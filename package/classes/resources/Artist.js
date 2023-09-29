import NetworkUtils from '../utils/NetworkUtils.js';

/**
 * Represents the artist Spotify resource and provides methods to interact with Spotify artists.
 */
class Artist {
  /**
   * Creates a new Artist instance.
   */
  constructor() {}

  /**
   * The base URL for Spotify artist-related API endpoints.
   * @type {string}
   */
  static baseUrl = 'https://api.spotify.com/v1/artists';

  /**
   * Get Spotify catalog information for a single artist.
   * @param {string} id - The Spotify ID of the artist.
   * @param {string} accessToken - The access token for authentication.
   * @returns {Promise<any>} A Promise that resolves with artist data or error information.
   */
  static getArtist(id, accessToken) {
    const url = `${this.baseUrl}/${id}`;
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get Spotify catalog information for multiple artists identified by their Spotify IDs.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with a collection of artist data or error information.
   */
  static getSeveralArtists(accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(this.baseUrl, queryStringParams);
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get Spotify catalog information about an artist's albums.
   * @param {string} id - The Spotify ID of the artist.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with artist's album data or error information.
   */
  static getArtistsAlbums(id, accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(
      `${this.baseUrl}/${id}/albums`,
      queryStringParams
    );
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get Spotify catalog information about an artist's top tracks.
   * @param {string} id - The Spotify ID of the artist.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with artist's top tracks or error information.
   */
  static getArtistsTopTracks(id, accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(
      `${this.baseUrl}/${id}/top-tracks`,
      queryStringParams
    );
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get Spotify catalog information about artists related to a given artist.
   * @param {string} id - The Spotify ID of the artist.
   * @param {string} accessToken - The access token for authentication.
   * @returns {Promise<any>} A Promise that resolves with a collection of related artist data or error information.
   */
  static getArtistsRelatedArtists(id, accessToken) {
    const url = `${this.baseUrl}/${id}/related-artists`;
    return NetworkUtils.makeRequest(url, accessToken);
  }
}

export default Artist;
