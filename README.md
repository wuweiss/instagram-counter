# instagram-counter

Get count of followers for an instagram account

## useful tools
- [access token debugger](https://developers.facebook.com/tools/debug/accesstoken/)

## Getting started:
You need a lot of stuff...

- An Instagram Business Account or Instagram Creator Account
- A Facebook Page connected to that account
- A Facebook Developer account that can perform Tasks on that Page
- A registered Facebook App with Basic settings configured

## Facebook app

- create facebook app
- create facebook login app
- create instagram graph api app
  - set Valid OAuth Redirect URIs in facebook login app

- [instagram api getting started](https://developers.facebook.com/docs/instagram-api/getting-started)
- [Create login page](https://developers.facebook.com/docs/facebook-login/web)

  - the user which acces token you use has probably be an
    administrator for the app and the facebook page (not sure).
  - ask for the right permissions to get followers count
    (i.e. pages_read_engagement, instagram_basic)
  - this code could be placed in a simple web page, just for the
    purpose to get the short lived access token

  ```
  FB.login(function(response) {
   // handle the response
     console.log('now logged in');
     }, {scope: 'public_profile,email,instagram_basic,pages_show_list,business_management'});
  }
  ```
  - get short lived access token after login for specific access
  rights (fields) i.e. (pages_read_engagement, instagram_basic). The
  token can be printed in the console.

- get long lived token from short lived token
  - [access-tokens refreshing](https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing)
  - [using-graph-api common-scenarios](https://developers.facebook.com/docs/graph-api/using-graph-api/common-scenarios)

- get facebook id for graphql queries of followers
  - i.e. https://www.instagram.com/<myUserName>/?__a=1
  - look for fbid

- IG User (Instagram User) queries
  - [instagram user reference](https://developers.facebook.com/docs/instagram-api/reference/user/)
  - somehow you don't use the business_discovery query but the IG User
    query `GET /{ig-user-id}?fields={fields}`
