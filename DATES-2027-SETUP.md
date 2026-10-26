# 2027 dates page — setup

The page (`dates-2027.html`) works straight away for marking up and for the
"Copy for the group chat" button. Connecting it to the Google Sheet is one
extra job, done once.

## The sheet already exists

**Misters 27 — Availability**

https://docs.google.com/spreadsheets/d/1NNahvuQmZ86ZSXOX6ZY7Jhk9lPj1vG8TUOQdHnYWgc4/edit

It has a "Start here" tab with these same steps on it. Two more tabs appear
by themselves once the first person sends their dates in:

| Tab | What's on it |
|---|---|
| **Availability** | One row per person, one column per date, colour-coded R/A/G |
| **Summary** | One row per date — how many are green, amber, red, and a verdict |

## Connect it — five steps

1. Open the sheet, then **Extensions → Apps Script**
2. Delete whatever is in the editor and paste in the whole of
   `misters27-apps-script.gs`
3. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Authorise it when Google asks. It will warn that the app isn't verified —
   that's normal for your own script. Advanced → Go to (project name).
5. Copy the `/exec` URL it gives you and paste it between the quotes here,
   near the bottom of `dates-2027.html`:

```js
var SHEET_ENDPOINT = '';
```

Then redeploy the site. That's it.

**Already done** — the endpoint is in place and the page is wired to it.

## If you change the script later

Editing the code is not enough on its own. Go to **Deploy → Manage
deployments**, hit the pencil, set Version to **New version**, and Deploy.
Otherwise the old code keeps running.

## Checking the access setting

The commonest failure is a deployment set to "Only myself" — it works when
you test it because you're signed in, and silently fails for everyone else.

To check properly, open the `/exec` URL in a **private/incognito window**. If
you get a line of JSON saying the collector is live, access is right. If you
get a Google sign-in page, go back and set *Who has access* to **Anyone**.

## Until it's connected

The Send button tells people to use **Copy for the group chat** instead,
which copies a tidy summary they can paste into WhatsApp. Nothing breaks.

## How it behaves

- Marks save in each person's browser as they go, so they can come back to it
- Sending again **replaces** that person's row rather than adding a duplicate,
  so the latest answer always wins
- The Summary tab rebuilds itself on every submission

## Changing the dates

The range is set near the bottom of `dates-2027.html`:

```js
var START = '2027-05-17';
var END   = '2027-09-01';
```

`FLAGGED` just below it holds the gold-outlined bank holiday weekends. If you
change the range after people have submitted, start a fresh sheet — the
columns won't line up otherwise.

## Changing who's on it

```js
var PLAYERS = ['Rob', 'Sam', 'John', 'Ferm', 'Teevo', 'Phil', 'Brett'];
```
