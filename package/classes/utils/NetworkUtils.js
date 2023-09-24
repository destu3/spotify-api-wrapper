/**
 * A utility class for making network requests and handling responses.
 */
class NetworkUtils {
  /**
   * Creates an instance of NetworkUtils.
   */
  constructor() {}

  /**
   * Makes an asynchronous network request to the specified URL with the provided access token.
   * @param {string} url - The URL to make the request to.
   * @param {string} accessToken - The access token to include in the request headers.
   * @returns {Promise<any>} A Promise that resolves to the response data or rejects with an error.
   */
  static async makeRequest(url, accessToken) {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = NetworkUtils.handleResponse(res);
      return data;
    } catch (err) {
      console.error('error: ' + err);
    }
  }

  /**
   * Handles the response from a network request by parsing it as JSON and logging the body.
   * @param {Response} res - The response object to handle.
   * @returns {Promise<any>} A Promise that resolves to the parsed JSON response body.
   */
  static handleResponse(res) {
    const body = res.json();
    return body;
  }
}

export default NetworkUtils;
