// https://www.oauth.com/playground/authorization-code-with-pkce.html

const generateCodeVerifier = (length: number = 43): string | null => {
  if (typeof window === 'undefined') return null

  let len: number = length
  if (len < 43) len = 43
  if (len > 128) len = 128

  const randomArr = window.crypto.getRandomValues(new Uint8Array(len))
  const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'

  let codeVerifier = ''

  for (const i of randomArr) {
    codeVerifier += validChars[i % len]
  }

  return codeVerifier
}
