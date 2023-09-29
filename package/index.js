import AuthHandler from './classes/utils/AuthHandler.js';
import Album from './classes/resources/Album.js';
import Artist from './classes/resources/Artist.js';
import Playlist from './classes/resources/Playlist.js';

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
   * @param {string} id - The Spotify ID of the album.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with album data or error information.
   */
  async getAlbum(id, queryStringParams) {
    await this.authHandler.verifyToken();
    return Album.getAlbum(id, this.authHandler.accessToken, queryStringParams);
  }

  /**
   * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with a collection of album data or error information.
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
   * @param {string} id - The Spotify ID of the album.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with album tracks or error information.
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
   * @param {string} id - The Spotify ID of the artist.
   * @returns {Promise<any>} A Promise that resolves with artist data or error information.
   */
  async getArtist(id) {
    await this.authHandler.verifyToken();
    return Artist.getArtist(id, this.authHandler.accessToken);
  }

  /**
   * Get Spotify catalog information for multiple artists identified by their Spotify IDs.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
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
   * @param {string} id - The Spotify ID of the artist.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
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
   * @param {string} id - The Spotify ID of the artist.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
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
   * @param {string} id - The Spotify ID of the artist.
   * @returns {Promise<any>} A Promise that resolves with a collection of related artist data or error information.
   */
  async getArtistsRelatedArtists(id) {
    await this.authHandler.verifyToken();
    return Artist.getArtistsRelatedArtists(id, this.authHandler.accessToken);
  }

  /**
   * Get a playlist owned by a Spotify user.
   * @param {string} id - The Spotify ID of the playlist.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<any>}  A Promise that resolves with playlist data or error information.
   */
  async getPlaylist(id, queryStringParams) {
    await this.authHandler.verifyToken();
    return Playlist.getPlaylist(
      id,
      this.authHandler.accessToken,
      queryStringParams
    );
  }

  /**
   * Get a list of Spotify featured playlists.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with a collection of featured playlist data or error information.
   */
  async getFeaturedPlaylists(queryStringParams) {
    await this.authHandler.verifyToken();
    return Playlist.getFeaturedPlaylists(
      this.authHandler.accessToken,
      queryStringParams
    );
  }

  /**
   * Get a list of Spotify playlists tagged with a particular category.
   * @param {string} id - The Spotify category ID.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with a collection of category-specific playlist data or error information.
   */
  async getCategoryPlaylists(id, queryStringParams) {
    await this.authHandler.verifyToken();
    return Playlist.getCategoryPlaylists(
      id,
      this.authHandler.accessToken,
      queryStringParams
    );
  }

  /**
   * Get the current image associated with a specific playlist.
   * @param {string} id - The Spotify ID of the playlist.
   * @returns {Promise<any>} A Promise that resolves with playlist cover image data or error information.
   */
  async getPlaylistCoverImage(id) {
    await this.authHandler.verifyToken();
    return Playlist.getPlaylistCoverImage(id);
  }
}

export default SpotifyWrapper;
