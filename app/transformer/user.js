import jwtDecode from 'jwt-decode';

/**
 * Transform JWT String to readable object to identify user and handle auth requests
 * @param  {String} token JWT Token string
 * @return {Object}       Session object
 */
export default token => ({ token, user:  jwtDecode(token).data });
