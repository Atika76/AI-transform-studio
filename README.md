# AI Transform Studio – GitHub starter (Szakipiac)

Statikus, azonnal működő projekt GitHub Pages-hez / Netlify-hoz.

## Lépések
1) Nyisd meg `assets/ats-config.json` és állítsd be a `gumroad_url` és `form_url` mezőket.
2) Töltsd fel a repo-t GitHubra, majd Settings → Pages: forrás `main` branch, `/ (root)`.
3) Kész! A főoldal: `index.html`

## Beillesztés a Szakipiac oldaladba
- Másold át a **/assets** mappát és az `index.html` AI szekcióját, vagy használd iframe-mel:
```html
<iframe src="/ai-transform-studio/index.html" style="width:100%;height:1800px;border:0" loading="lazy"></iframe>
```

## Git parancsok
```bash
git init
git add .
git commit -m "AI Transform Studio – starter"
git branch -M main
git remote add origin https://github.com/<felhasznalo>/<repo>.git
git push -u origin main
```

## Tipp
- Cseréld a demó képeket a sajátodra: `assets/demo_before_*.jpg`, `assets/demo_after_*.jpg`.
- Logó variációk: világos/sötét PNG-k a `assets` mappában.
