import * as functions from 'firebase-functions';

function isPerfectSquare(n: number) : boolean {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}

function isFibonacci(input: number) : boolean {
    return isPerfectSquare(5*input*input + 4) || isPerfectSquare(5*input*input - 4)
}

export const fibonnaciTestAPI = functions.https.onRequest((request, response) => {
    response.send(JSON.stringify({success: isFibonacci(request.query.number)}))
});
