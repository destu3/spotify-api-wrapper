import AuthHandler from './classes/utils/AuthHandler.js';
import Album from './classes/resources/Album.js';
import Artist from './classes/resources/Artist.js';

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
   * Get Spotify catalog information for a single album.
   * @param {string} id - The ID of the album to retrieve.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @param {string} queryStringParams.market - An ISO 3166-1 alpha-2 country code.
   * @returns {Promise<any>} A Promise that resolves with album data or error information
   */
  async getAlbum(id, queryStringParams) {
    await this.authHandler.verifyToken();
    return Album.getAlbum(id, this.authHandler.accessToken, queryStringParams);
  }

  /**
   * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
   * @param {string} queryStringParams.ids - A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
   * @param {string} queryStringParams.market - An ISO 3166-1 alpha-2 country code.
   * @returns {Promise<any>} A Promise that resolves with a collection of album data or error information
   */
  async getSeveralAlbums(queryStringParams) {
    await this.authHandler.verifyToken();
    return Album.getSeveralAlbums(
      this.authHandler.accessToken,
      queryStringParams
    );
  }

  /**
   * Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
   * @param {string} id - The ID of the album to retrieve.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @param {string} queryStringParams.market - An ISO 3166-1 alpha-2 country code.
   * @param {number} queryStringParams.limit - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   * @param {number} queryStringParams.offset - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
   * @returns {Promise<any>} A Promise that resolves with album tracks or error information
   */
  async getAlbumTracks(id, queryStringParams) {
    await this.authHandler.verifyToken();
    return Album.getAlbumTracks(
      id,
      this.authHandler.accessToken,
      queryStringParams
    );
  }

  /**
   * Get Spotify catalog information for a single artist.
   * @param {string} id - The ID of the artist to retrieve.
   * @returns {Promise<any>} A Promise that resolves with artist data or error information.
   */
  async getArtist(id) {
    await this.authHandler.verifyToken();
    return Artist.getArtist(id, this.authHandler.accessToken);
  }

  /**
   * Get Spotify catalog information for multiple artists identified by their Spotify IDs.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
   * @param {string} queryStringParams.ids - A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.
   * @returns {Promise<any>} A Promise that resolves with a collection of artist data or error information.
   */
  async getSeveralArtists(queryStringParams) {
    await this.authHandler.verifyToken();
    return Artist.getSeveralArtists(
      this.authHandler.accessToken,
      queryStringParams
    );
  }

  /**
   * Get Spotify catalog information about an artist's albums.
   * @param {string} id - The ID of the artist to retrieve albums for.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @param {("album"|"single"|"appears_on"|"compilation")} queryStringParams.include_groups - A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned.
   * @param {string} queryStringParams.market - An ISO 3166-1 alpha-2 country code.
   * @param {number} queryStringParams.limit - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   * @param {number} queryStringParams.offset - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
   * @returns {Promise<any>} A Promise that resolves with an artist's album data or error information.
   */
  async getArtistsAlbums(id, queryStringParams) {
    await this.authHandler.verifyToken();
    return Artist.getArtistsAlbums(
      id,
      this.authHandler.accessToken,
      queryStringParams
    );
  }

  /**
   * Get Spotify catalog information about an artist's top tracks.
   * @param {string} id - The ID of the artist to retrieve top tracks for.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
   * @param {string} queryStringParams.market - An ISO 3166-1 alpha-2 country code (required).
   * @returns {Promise<any>} A Promise that resolves with an artist's top tracks or error information.
   */
  async getArtistsTopTracks(id, queryStringParams) {
    await this.authHandler.verifyToken();
    return Artist.getArtistsTopTracks(
      id,
      this.authHandler.accessToken,
      queryStringParams
    );
  }

  /**
   * Get Spotify catalog information about artists related to a given artist.
   * @param {string} id - The ID of the artist to retrieve related artists for.
   * @returns {Promise<any>} A Promise that resolves with a collection of related artist data or error information.
   */
  async getArtistsRelatedArtists(id) {
    await this.authHandler.verifyToken();
    return Artist.getArtistsRelatedArtists(id, this.authHandler.accessToken);
  }
}

export default SpotifyWrapper;
