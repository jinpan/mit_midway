# MIT Midway Signups

## What is this for?
This app is a simple way to collect signups at this year's fall midway without all the fuss or muss of other solutions.

## How can I use it?
To use, simply clone or download a zip file and load up index.html in your favorite browser.  Tested with firefox and
chrome; should work in other browsers too.  Please download it locally and use locally, as the wifi situation in the ice
rink may be poor.

## Can I see a demo first please?
Check out a demo of the form up at https://dl.dropboxusercontent.com/u/5570202/mit_midway-master/index.html
and results at https://dl.dropboxusercontent.com/u/5570202/mit_midway-master/results.html.

## Does the kerberos validation breach my privacy?
Nope!  The system has absolutely no idea what any of the kerberoses are.  To validate, the system simply hashes the input
and checks the hash against a data structure for any hash collisions.

## What's the catch?
Nothing!  Written with love by one of your UA Technology System Group Chairs.  Hope you have a good experience with it :)

All of the signups stay local to the machine that it is running on so we're not selling poor freshmen's email addresses
to marketers, or worse, Comcast recruitors.

## What's this fuss and muss you speak of with other solutions?
The other solutions I am considering are 1) pen/paper, 2) excel, 3) google form.

1. Pen/Paper: Handwriting can be messy, people like to disappear with pens.
2. Excel: It's cramped and ugly.  Also, no kerberos validation, which makes typos unfortunate.
3. Google form:  Wifi sometimes craps out in the ice rink.  Also, no kerberos validation :disappointed:

## This is ugly and atrocious.  I can't believe your grotesque sense of style.
Released under MIT license, feel free to make it prettier.  Feel free to send me a pull request if you'd like to share.

## I don't want to recruit for Traders@MIT.  Why are you making me recruit for Traders@MIT?
Full disclosure, I'm also co-president of Traders@MIT and partially made this app for Traders.  However, none of the code
is specific to that organization so simply do a find/replace for Traders@MIT/<your club name> on the following files/lines:

>index.html:17:                I'm interested in signing up for Traders@MIT!
>index.html:46:                    <p>You're all signed up for Traders@MIT!</p>
>results.html:17:                2014 Midway Signups for Traders@MIT

You may also want to adjust some of the magic constants in the css if elements seem misaligned.
