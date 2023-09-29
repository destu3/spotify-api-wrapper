import NetworkUtils from '../utils/NetworkUtils.js';

/**
 * Represents the user spotify recourse and provides methods to interact with spotify users.
 */
class User {
  /**
   * Creates a new User instance.
   */
  constructor() {}

  /**
   * The base URL for Spotify user-related API endpoints.
   * @type {string}
   */
  static baseUrl = 'https://api.spotify.com/v1/users';

  /**
   * Get public profile information about a Spotify user.
   * @param {string} id - The user's Spotify user ID.
   * @param {string} accessToken - The access token for authentication.
   * @returns {Promise<any>} A Promise that resolves with a users public profile information or error information.
   */
  static getUsersProfile(id, accessToken) {
    const url = `${this.baseUrl}/${id}`;
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Check to see if one or more Spotify users are following a specified playlist.
   * @param {string} id - The Spotify ID of the playlist.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with information on whether user(s) follow the playlist or error information.
   */
  static checkIfUsersFollowPlaylist(id, accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(
      `https://api.spotify.com/v1/playlists/${id}/followers/contains`,
      queryStringParams
    );
    return NetworkUtils.makeRequest(url, accessToken);
  }
}

export default User;
