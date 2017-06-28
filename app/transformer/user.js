import jwtDecode from 'jwt-decode';


export default token => ({ token, user:  jwtDecode(token).data });
