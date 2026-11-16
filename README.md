# MJWatch Android App Links

Deployed from this directory to https://mjsasha.github.io/ through the public
MJSasha/mjsasha.github.io repository. `/.well-known/assetlinks.json` binds the
existing release signing certificate to mobile/TV packages. Manifests restrict
handling to `/mj-watch/join/`.

Installed apps open an HTTPS invitation directly. The fallback page offers an
explicit Open action and the stable Android APK; after installation the same
page can open the retained invitation. Registration and password entry happen
only in MJWatch. There are no registration forms, analytics, remote scripts,
auto-redirects or requests containing invitation data. Fields stay in the URL
fragment; the page uses no-referrer and connect-src none.

Keep the association in sync with scripts/test-signing-cert.sha256 only during
an explicitly planned signing-key migration.
