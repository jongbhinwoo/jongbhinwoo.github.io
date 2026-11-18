# 개인 연구 홈페이지

Astro 6 정적 사이트 → GitHub Pages (`https://jongbhinwoo.github.io`, 저장소 `jongbhinwoo/jongbhinwoo.github.io`). 영어만.

## 파일

| 파일 | 내용 |
|---|---|
| `src/data/site.ts` | 이름·소속·링크·소개 문구·관심 분야·학력·연구 경력·조교·과제·장학금·병역. `photo`에 `public/` 아래 경로를 넣으면 사진이 나온다 |
| `src/data/publications.ts` | 논문 목록. C/J/P 번호, 1저자 필터, BibTeX는 여기서 자동 생성 |
| `public/pubs/` | 논문 대표 그림 (`.webp`, 가로 960px) |
| `src/pages/cv.astro` | CV (`/cv/`). 홈페이지와 같은 데이터에서 만든다 |
| `public/cv.pdf` | `npm run cv`로 생성. 홈페이지 CV 버튼이 가리킨다 |
| `src/pages/index.astro` | 페이지 구성 |
| `src/styles/global.css` | 스타일 (라이트/다크) |

## 논문 추가

`publications.ts`에 항목 하나를 넣는다.
- `type`: `conference` / `journal` / `preprint`
- `authors`: 논문에 인쇄된 표기 그대로. 공동 1저자는 이름 끝에 `*`
- `date`: 게재일 또는 arXiv 공개일 (정렬·번호 기준)
- `doi`, `arxiv`를 넣으면 Paper·arXiv 링크가 생긴다. 코드·프로젝트 페이지는 `links`에 넣는다

대표 그림은 arXiv 소스의 teaser PDF를 변환한다.

```sh
pdftoppm -png -r 220 -singlefile teaser.pdf out
cwebp -q 82 -resize 960 0 out.png -o public/pubs/<name>.webp
```

## 규칙

- 채택되면 `type`·`venue`·`venueFull`·`doi`를 고친다.

## 실행·배포

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
npm run cv       # public/cv.pdf 재생성 (Chrome 필요). site.ts나 publications.ts를 고친 뒤 실행하고 PDF도 커밋
```

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 빌드해서 Pages에 배포한다. 저장소 Settings → Pages → Source는 "GitHub Actions"로 둔다.
