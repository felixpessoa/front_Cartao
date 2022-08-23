// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080',
  envName: 'local',
  keycloak: {
    // Url of the Identity Provider 
    issuer: 'http://localhost:8081/realms/teste',
    // URL of the SPA to redirect the user to after login 
    redirectUri: 'http://localhost:4200/',
    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß 
    clientId: 'prestador',
    responseType: 'code',
    // set the scope for the permissions the client should request 
    // The first three are defined by OIDC. 
    scope: 'openid profile email',
    // Remove the requirement of using Https to simplify the demo 
    // THIS SHOULD NOT BE USED IN PRODUCTION // USE A CERTIFICATE FOR YOUR IDP 
    // IN PRODUCTION 
    requireHttps: false,
    // at_hash is not present in JWT token 
    showDebugInformation: true,
    disableAtHashCheck: true
  }
};