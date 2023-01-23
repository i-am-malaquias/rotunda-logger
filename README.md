# rotunda-logger

This is really basic pseudo-code but I think it gets the general idea across.

I didn't want to get too fancy with it as it would just add noise to an otherwise simple exercise.

One point I do need to make is that there was no mention of a log file for mail sending but it made sense to me to have one.
It's not impossible to implement more sophisticated logic that won't require it but in real world scenarios having a log for mail
seems to make a lot of sense, especially since mail sending itself can generate errors and it makes the whole thing a lot easier to
understand, if I needed to add logic that also calculated when the last mail `"""might"""/should` have been sent it would probably
be a bit slower to read and write and maintain.
