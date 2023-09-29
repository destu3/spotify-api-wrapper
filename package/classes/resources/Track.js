import NetworkUtils from '../utils/NetworkUtils.js';

/**
 * Represents the track spotify recourse and provides methods to interact with spotify tracks.
 */
class Track {
  /**
   * Creates a new Track instance.
   */
  constructor() {}

  /**
   * The base URL for Spotify track-related API endpoints.
   * @type {string}
   */
  static baseUrl = 'https://api.spotify.com/v1/tracks';

  /**
   * Get Spotify catalog information for a single track identified by its unique Spotify ID.
   * @param {string} id - The Spotify ID for the track.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Optional query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with track data or error information.
   */
  static getTrack(id, accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(
      `${this.baseUrl}/${id}`,
      queryStringParams
    );
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
   * @param {string} accessToken - The access token for authentication.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
   * @returns {Promise<any>} A Promise that resolves with a collection of track data or error information.
   */
  static getSeveralTracks(accessToken, queryStringParams) {
    const url = NetworkUtils.appendQueryParams(this.baseUrl, queryStringParams);
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get audio feature information for a single track identified by its unique Spotify ID.
   * @param {string} id - The Spotify ID for the track.
   * @param {string} accessToken - The access token for authentication.
   * @returns {Promise<any>} A Promise that resolves with audio feature information or error information.
   */
  static getTracksAudioFeatures(id, accessToken) {
    const url = `https://api.spotify.com/v1/audio-features/${id}`;
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get a low-level audio analysis for a track in the Spotify catalog.
   * @param {string} id - The Spotify ID for the track.
   * @param {string} accessToken - The access token for authentication.
   * @returns {Promise<any>} A Promise that resolves with audio analysis information or error information.
   */
  static getTracksAudioAnalysis(id, accessToken) {
    const url = `https://api.spotify.com/v1/audio-analysis/${id}`;
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Get Spotify track recommendations based on a set of query string parameters.
   * @param {object} queryStringParams - Query string parameters for this endpoint.
   * @param {string} accessToken - The access token for authentication.
   * @returns {Promise<any>} A Promise that resolves with recommended tracks or error information.
   */
  static getRecommendations(queryStringParams, accessToken) {
    const url = NetworkUtils.appendQueryParams(
      'https://api.spotify.com/v1/recommendations',
      queryStringParams
    );
    return NetworkUtils.makeRequest(url, accessToken);
  }

  /**
   * Retrieve a list of available genre seed parameter values for recommendations.
   * @param {string} accessToken - The access token for authentication.
   * @returns {Promise<any>} A Promise that resolves with available genre seed parameter values or error information.
   */
  static getAvailableGenreSeeds(accessToken) {
    const url =
      ' https://api.spotify.com/v1/recommendations/available-genre-seeds';
    return NetworkUtils.makeRequest(url, accessToken);
  }
}

export default Track;
