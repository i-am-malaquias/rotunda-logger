const ERRORS_PER_MINUTE_THRESHOLD = 10;
const ONE_MINUTE = 60 * 1000;
const maxMailInterval = ONE_MINUTE

function notifyError( error )
{
    //always log the error
    logError( error );

    //check if the last Nth errors happened in the last minute
    const currentTimestamp = Date.now();
    const nthErrorsAgoTimeStamp = getNthErrorsAgoTimestamp( ERRORS_PER_MINUTE_THRESHOLD );
    const timeElapsedBeteenErrors = currentTimestamp - nthErrorsAgoTimeStamp;
    
    if( timeElapsedBeteenErrors < ONE_MINUTE )
        return;
    
    //check if the last mail was sent more than a minute ago
    const lastMail = readLastMailTimestamp();
    const timeElapsedBetweenMails = currentTimestamp - lastMail;
    if( timeElapsedBetweenMails < maxMailInterval )
        return;

    //maybe try catch here since mail sending can fail
    sendMail( 'Too many errors' );
    logMailSent();
}