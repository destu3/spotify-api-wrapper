<div style="display: flex; align-items: center;">
  <img src="https://www.freeiconspng.com/uploads/spotify-icon-18.png" alt="Spotify Icon" height="40" width="40" />
  <h1 style="margin-left: 10px;">SpotifyWrapper Library</h1>
</div>

1. [Introduction](#introduction)
2. [Disclaimer](#disclaimer)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Methods](#methods)
6. [Conclusion](#conclusion)

## Introduction

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

### **spotify.getAlbum(id, queryStringParams)**

Get Spotify catalog information for a single album.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| id                | string | The Spotify ID of the album                        |
| queryStringParams | object | Optional query string parameters for this endpoint |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/get-an-album" target="_blank">Spotify Web API documentation</a>
for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with album data or error information.

```javascript
const albumId = 'album-id';

spotify
  .getAlbum(albumId, { market: 'GB' })
  .then(albumData => {
    // Handle album data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getSeveralAlbums(queryStringParams)**

Get Spotify catalog information for multiple albums identified by their Spotify IDs.

#### Parameters

| parameter         | type   | description                                |
| ----------------- | ------ | ------------------------------------------ |
| queryStringParams | object | Query string parameters for this endpoint. |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/get-multiple-albums" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with a collection of album data or error information.

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

### **spotify.getAlbumTracks(id, queryStringParams)**

Get Spotify catalog information about an album's tracks.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| id                | string | The Spotify ID of the album                        |
| queryStringParams | object | Optional query string parameters for this endpoint |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/get-an-albums-tracks" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with album tracks or error information.

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

### **spotify.getArtist(id)**

Get Spotify catalog information for a single artist.

#### Parameters

| parameter | type   | description                  |
| --------- | ------ | ---------------------------- |
| id        | string | The Spotify ID of the artist |

#### Returns

A Promise that resolves with artist data or error information.

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

### **spotify.getSeveralArtists(queryStringParams)**

Get Spotify catalog information for multiple artists identified by their Spotify IDs.

#### Parameters

| parameter         | type   | description                               |
| ----------------- | ------ | ----------------------------------------- |
| queryStringParams | object | Query string parameters for this endpoint |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/get-multiple-artists" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with a collection of artist data or error information.

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

### **spotify.getArtistsAlbums(id, queryStringParams)**

Get Spotify catalog information about an artist's albums.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| id                | string | The Spotify ID of the artist                       |
| queryStringParams | object | Optional query string parameters for this endpoint |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with an artist's album data or error information.

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

### **spotify.getArtistsTopTracks(id, queryStringParams)**

Get Spotify catalog information about an artist's top tracks.

#### Parameters

| parameter         | type   | description                               |
| ----------------- | ------ | ----------------------------------------- |
| id                | string | The Spotify ID of the artist              |
| queryStringParams | object | Query string parameters for this endpoint |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with an artist's top tracks or error information.

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

### **spotify.getArtistsRelatedArtists(id, queryStringParams)**

Get Spotify catalog information about artists related to a given artist.

#### Parameters

| parameter | type   | description                  |
| --------- | ------ | ---------------------------- |
| id        | string | The Spotify ID of the artist |

#### Returns

A Promise that resolves with a collection of related artist data or error information.

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

### **spotify.getPlaylist(id, queryStringParams)**

Get a playlist owned by a Spotify user.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| id                | string | The Spotify ID of the playlist.                    |
| queryStringParams | object | Optional query string parameters for this endpoint |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/get-playlist" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with playlist data or error information.

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

### **spotify.getFeaturedPlaylists(queryStringParams)**

Get a list of Spotify featured playlists.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| queryStringParams | object | Optional query string parameters for this endpoint |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/get-featured-playlists" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with a collection of featured playlist data or error information.

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

### **spotify.getCategoryPlaylists(id, queryStringParams)**

Get a list of Spotify playlists tagged with a particular category.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| id                | string | The Spotify category ID.                           |
| queryStringParams | object | Optional query string parameters for this endpoint |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/get-a-categories-playlists" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with a collection of category-specific playlist data or error information.

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

### **spotify.getPlaylistCoverImage(id)**

Get the current image associated with a specific playlist.

#### Parameters

| parameter | type   | description                     |
| --------- | ------ | ------------------------------- |
| id        | string | The Spotify ID of the playlist. |

#### Returns

A Promise that resolves with playlist cover image data or error information.

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

### **spotify.search(queryStringParams)**

Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string.

#### Parameters

| parameter         | type   | description                               |
| ----------------- | ------ | ----------------------------------------- |
| queryStringParams | object | Query string parameters for this endpoint |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/search" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with search results or error information.

```javascript
spotify
  .search({ q: 'Bruno Mars What I Like', type: 'track' })
  .then(results => {
    // Handle search result data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getTrack(id, queryStringParams)**

Get Spotify catalog information for a single track identified by its unique Spotify ID.

#### Parameters

| parameter         | type   | description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| id                | string | The Spotify ID for the track                       |
| queryStringParams | object | Optional query string parameters for this endpoint |

<br>

Refer to the Spotify <a href="https://developer.spotify.com/documentation/web-api/reference/get-track" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with track data or error information.

```javascript
const trackId = 'track-id';

spotify
  .getTrack(trackId, { market: 'GB' })
  .then(trackData => {
    // Handle track data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getSeveralTracks(queryStringParams)**

Get Spotify catalog information for multiple tracks based on their Spotify IDs.

#### Parameters

| parameter         | type   | description                                |
| ----------------- | ------ | ------------------------------------------ |
| queryStringParams | object | Query string parameters for this endpoint. |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/get-several-tracks" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with a collection of track data or error information.

```javascript
const trackIds = ['track-id-1', 'track-id-2'].join();

spotify
  .getSeveralTracks({ ids: trackIds })
  .then(tracksData => {
    // Handle track data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getTracksAudioFeatures(id)**

Get audio feature information for a single track identified by its unique Spotify ID.

#### Parameters

| parameter | type   | description                  |
| --------- | ------ | ---------------------------- |
| id        | string | The Spotify ID for the track |

#### Returns

A Promise that resolves with audio feature information or error information.

```javascript
const trackId = 'track-id';

spotify
  .getTracksAudioFeatures(trackId)
  .then(audioFeatures => {
    // Handle audio features data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getTracksAudioAnalysis(id)**

Get a low-level audio analysis for a track in the Spotify catalog.

#### Parameters

| parameter | type   | description                  |
| --------- | ------ | ---------------------------- |
| id        | string | The Spotify ID for the track |

#### Returns

A Promise that resolves with audio analysis information or error information.

```javascript
const trackId = 'track-id';

spotify
  .getTracksAudioAnalysis(trackId)
  .then(audioAnalysis => {
    // Handle audio analysis data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getRecommendations(queryStringParams)**

Get Spotify track recommendations based on a set of query string parameters.

#### Parameters

| parameter         | type   | description                                |
| ----------------- | ------ | ------------------------------------------ |
| queryStringParams | object | Query string parameters for this endpoint. |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/get-several-tracks" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with recommended tracks or error information.

```javascript
const queryStringParams = {
  seed_artists: 'artist-id',
  seed_genres: 'genre',
  seed_tracks: 'track-id',
};

spotify
  .getRecommendations(queryStringParams)
  .then(recommendedTracks => {
    // Handle recommended tracks data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getAvailableGenreSeeds()**

Retrieve a list of available genre seed parameter values for recommendations.

#### Returns

A Promise that resolves with available genre seed parameter values or error information.

```javascript
spotify
  .getAvailableGenreSeeds()
  .then(availableGenres => {
    // Handle available genres data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.getUsersProfile(id)**

Get public profile information about a Spotify user.

#### Parameters

| parameter | type   | description                 |
| --------- | ------ | --------------------------- |
| id        | string | The user's Spotify user ID. |

#### Returns

A Promise that resolves with a user's public profile information or error information.

```javascript
const userId = 'user-id';

spotify
  .getUsersProfile(userId)
  .then(userProfile => {
    // Handle user profile data
  })
  .catch(error => {
    // Handle error
  });
```

### **spotify.checkIfUsersFollowPlaylist(id, queryStringParams)**

Check to see if one or more Spotify users are following a specified playlist.

#### Parameters

| parameter         | type   | description                                |
| ----------------- | ------ | ------------------------------------------ |
| id                | string | The Spotify ID of the playlist.            |
| queryStringParams | object | Query string parameters for this endpoint. |

<br>

Refer to the <a href="https://developer.spotify.com/documentation/web-api/reference/check-if-user-follows-playlist" target="_blank">Spotify Web API documentation</a> for a comprehensive rundown of authorized query string parameters for this endpoint. To utilize them, format these parameters as a JavaScript object and pass them via the `queryStringParams` argument.

#### Returns

A Promise that resolves with information on whether user(s) follow the playlist or error information.

```javascript
const playlistId = 'playlist-id';
const userId = 'user-id';

spotify
  .checkIfUsersFollowPlaylist(playlistId, { ids: userId })
  .then(followStatus => {
    // Handle follow status information
  })
  .catch(error => {
    // Handle error
  });
```

## Conclusion

The SpotifyWrapper library simplifies interactions with the Spotify API, enabling efficient access to music data. Feedback is highly valued and I encourage you to report any issues you encounter while using the library. Please remember to use it exclusively on the server side due to the client_credential authentication flow. Stay tuned for upcoming additions of methods to support various types of resources in the library.
