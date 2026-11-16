# MJWatch Android App Links

This directory is deployed at https://mjsasha.github.io/ through the public
MJSasha/mjsasha.github.io repository. It serves only Android's domain association.
There is no registration, download page, redirect script, analytics or network
request containing an invitation. If the app is absent, the join page stays blank.

The root `/.well-known/assetlinks.json` binds the existing release signing
certificate to the mobile/TV packages. The manifest restricts handling to
`/mj-watch/join/`. Invitation fields live in the URL fragment, which is not sent
in the HTTPS request or Referrer header. Registration happens only inside MJWatch.

Keep the public association in sync with scripts/test-signing-cert.sha256 when
an explicitly planned signing-key migration occurs.
