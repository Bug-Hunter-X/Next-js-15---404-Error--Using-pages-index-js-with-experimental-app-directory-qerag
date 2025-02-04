```javascript
// app/page.js

export default function Home() {
  return (
    <div>Hello</div>
  );
}
```
Move the component from `pages/index.js` to `app/page.js` (or `app/index.js` if you need a different route).  This fixes the Next.js 15 routing issue.