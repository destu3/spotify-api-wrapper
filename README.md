# SpotifyWrapper Library

SpotifyWrapper is a JavaScript library designed to facilitate API requests to the Spotify platform. This library provides a convenient way to interact with Spotify's API, enabling you to retrieve information about albums, artists, playlists, search for recourses and more. Each method within this library corresponds to a specific API endpoint, making it easy to access the data you need from Spotify.

## Disclaimer

Please note the following prerequisites for using this library:

1. **Server-Side Use**: This library is intended for server-side use only. It employs the client_credential authentication flow, which is not suitable for client-side applications due to security concerns.

2. **ES Modules**: To use this library, ES modules (ECMAScript modules) support in your JavaScript environment is a prerequisite. Ensure that your project and runtime environment support ES modules before integrating this library into your codebase.

Please make sure your project meets these requirements before incorporating this library into your codebase.

## Installation

To use the SpotifyWrapper library in your project, you can install it using npm

```bash
npm install @destu/spotify-wrapper
```

## Usage

Here's how you can use the SpotifyWrapper library:

### Initialize SpotifyWrapper

To get started, you need to create a new instance of the SpotifyWrapper class, passing in your Spotify API client ID and client secret.

```javascript
import SpotifyWrapper from 'spotify-wrapper';

const clientId = 'your-client-id';
const clientSecret = 'your-client-secret';

const spotify = new SpotifyWrapper(clientId, clientSecret);
```

## Methods

### **spotify.getAlbum(id, queryStringParams) --&gt; Promise&lt;any&gt;**

Get Spotify catalog information for a single album.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| id                | string | The Spotify ID of the album                        |
| queryStringParams | object | Optional query string parameters for this endpoint |

Refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/reference/get-an-album) for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the queryStringParams argument.

```javascript
spotify
  .getAlbum(albumId, { market: 'GB' })
  .then(albumData => {
    // Handle album data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getSeveralAlbums(queryStringParams) --&gt; Promise&lt;any&gt;**

Get Spotify catalog information for multiple albums identified by their Spotify IDs.

#### Parameters

| parameter         | type   | description                                |
| ----------------- | ------ | ------------------------------------------ |
| queryStringParams | object | Query string parameters for this endpoint. |

Refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/reference/get-multiple-albums) for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the queryStringParams argument.

```javascript
const albumIds = ['album-id-1', 'album-id-2'].join();

spotify
  .getSeveralAlbums({ ids: albumIds })
  .then(albumsData => {
    // Handle multiple albums data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getAlbumTracks(id, queryStringParams) --&gt; Promise&lt;any&gt;**

Get Spotify catalog information about an album's tracks.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| id                | string | The Spotify ID of the album                        |
| queryStringParams | object | Optional query string parameters for this endpoint |

Refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/reference/get-an-albums-tracks) for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the queryStringParams argument.

```javascript
const albumId = 'album-id';

spotify
  .getAlbumTracks(albumId)
  .then(tracksData => {
    // Handle album tracks data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getArtist(id) --&gt; Promise&lt;any&gt;**

Get Spotify catalog information for a single artist.

#### Parameters

| parameter | type   | description                  |
| --------- | ------ | ---------------------------- |
| id        | string | The Spotify ID of the artist |

```javascript
const artistId = 'artist-id';

spotify
  .getArtist(artistId)
  .then(artistData => {
    // Handle artist data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getSeveralArtists(queryStringParams) --&gt; Promise&lt;any&gt;**

Get Spotify catalog information for multiple artists identified by their Spotify IDs.

#### Parameters

| parameter         | type   | description                               |
| ----------------- | ------ | ----------------------------------------- |
| queryStringParams | object | Query string parameters for this endpoint |

Refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/reference/get-multiple-artists) for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the queryStringParams argument.

```javascript
const artistIds = ['artist-id-1', 'artist-id-2'].join();

spotify
  .getSeveralArtists({ ids: artistIds })
  .then(artistsData => {
    // Handle multiple artists data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getArtistsAlbums(id, queryStringParams) --&gt; Promise&lt;any&gt;**

Get Spotify catalog information about an artist's albums.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| id                | string | The Spotify ID of the artist                       |
| queryStringParams | object | Optional query string parameters for this endpoint |

Refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums) for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the queryStringParams argument.

```javascript
const artistId = 'artist-id';

spotify
  .getArtistsAlbums(artistId)
  .then(albumsData => {
    // Handle artist's albums data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getArtistsTopTracks(id, queryStringParams) --&gt; Promise&lt;any&gt;**

Get Spotify catalog information about an artist's top tracks.

#### Parameters

| parameter         | type   | description                               |
| ----------------- | ------ | ----------------------------------------- |
| id                | string | The Spotify ID of the artist              |
| queryStringParams | object | Query string parameters for this endpoint |

Refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks) for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the queryStringParams argument.

```javascript
const artistId = 'artist-id';

spotify
  .getArtistsTopTracks(artistId, { country: 'GB' })
  .then(topTracksData => {
    // Handle artist's top tracks data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getArtistsRelatedArtists(id, queryStringParams) --&gt; Promise&lt;any&gt;**

Get Spotify catalog information about artists related to a given artist.

#### Parameters

| parameter | type   | description                  |
| --------- | ------ | ---------------------------- |
| id        | string | The Spotify ID of the artist |

```javascript
const artistId = 'artist-id';

spotify
  .getArtistsRelatedArtists(artistId)
  .then(relatedArtistsData => {
    // Handle related artists data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getPlaylist(id, queryStringParams) --&gt; Promise&lt;any&gt;**

Get a playlist owned by a Spotify user.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| id                | string | The Spotify ID of the playlist.                    |
| queryStringParams | object | Optional query string parameters for this endpoint |

Refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/reference/get-playlist) for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the queryStringParams argument.

```javascript
const playlistId = 'playlist-id';

spotify
  .getPlaylist(playlistId)
  .then(playlistData => {
    // Handle playlist data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getFeaturedPlaylists(queryStringParams) --&gt; Promise&lt;any&gt;**

Get a list of Spotify featured playlists.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| queryStringParams | object | Optional query string parameters for this endpoint |

Refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/reference/get-featured-playlists) for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the queryStringParams argument.

```javascript
spotify
  .getFeaturedPlaylists({ locale: 'en_US', country: 'US' })
  .then(featuredPlaylistsData => {
    // Handle featured playlists data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getCategoryPlaylists(id, queryStringParams) --&gt; Promise&lt;any&gt;**

Get a list of Spotify playlists tagged with a particular category.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| id                | string | The Spotify category ID.                           |
| queryStringParams | object | Optional query string parameters for this endpoint |

Refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/reference/get-a-categories-playlists) for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the queryStringParams argument.

```javascript
const categoryId = 'category-id';

spotify
  .getCategoryPlaylists(categoryId)
  .then(categoryPlaylistsData => {
    // Handle category-specific playlists data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getPlaylistCoverImage(id) --&gt; Promise&lt;any&gt;**

Get the current image associated with a specific playlist.

#### Parameters

| parameter | type   | description                     |
| --------- | ------ | ------------------------------- |
| id        | string | The Spotify ID of the playlist. |

```javascript
const playlistId = 'playlist-id';

spotify
  .getPlaylistCoverImage(playlistId)
  .then(coverImageData => {
    // Handle playlist cover image data
  })
  .catch(error => {
    // Handle error
  });
```

## Conclusion

The SpotifyWrapper library simplifies interactions with the Spotify API, enabling efficient access to music data. Feedback is highly valued and I encourage you to report any issues you encounter while using the library. Please remember to use it exclusively on the server side due to the client_credential authentication flow. Stay tuned for upcoming additions of methods to support various types of resources in the library.
