import email from 'emailjs';

import { mailCredentials } from '../../config/keys';


const smtpServer  = email.server.connect(mailCredentials);
const mailHandler = {
    sendToken: (host, tokenToSend, recipient) => {
        smtpServer.send({
            text:    'Hello!\nAccess your account here: https://'
            + host.hostname + ':' + host.port + '/?token=' + tokenToSend,
            from:    mailCredentials.user,
            to:      recipient,
            subject: 'Login to Exchange Service',
        }, function(err, message) {
            if(err) { console.error(err); }
        });
    },
};


export default mailHandler;
