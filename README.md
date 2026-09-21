# Duc Anh Nguyen — static portfolio

A standalone HTML, CSS, and JavaScript version of [the current portfolio](https://ducanh-nguyen.onrender.com/). It includes the two research projects, author links, project resources, CV, images, video preview, and light/dark theme. The content is in HTML and is readable without JavaScript.

## Publish on GitHub Pages

1. Create a GitHub repository. For the address `https://ducang.github.io/`, name it `ducang.github.io`. A different name, such as `portfolio`, gives you `https://ducang.github.io/portfolio/`.
2. Put the **contents of this folder** at the repository root: `index.html`, `assets/`, `.nojekyll`, and the other included files. Keep the complete `assets` folder structure. Commit and push to `main`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**. Choose **main** and **/(root)**, then **Save**.
5. Open the published URL shown on the Pages settings screen after deployment completes.

These files use relative asset paths, so the same folder works at either address. No build command, database, Python runtime, or environment variables are needed on GitHub Pages. `.nojekyll` makes GitHub publish the files without processing them as a Jekyll site.

See [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [site-creation instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Preview locally

Open `index.html` directly, or serve this folder with any static HTTP server. For example, if Python is installed, run this from this folder:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000/`. Python is only an optional local preview tool.

## Update the site

- **Bio, news, experience, education:** edit the corresponding sections in `index.html`.
- **Projects and authors:** edit each `article` in the Research & Projects section. Authors and links are written directly in HTML. Copy an article to add a project, giving it unique `id` values.
- **CV:** replace `assets/cv.pdf` with the new PDF, keeping the same filename.
- **Project media:** replace files in `assets/images/`, or update their relative paths in `index.html`.
- **Profile photo:** the current site's “DA” circle is preserved. To use a photo, replace its `div` with an `img` using the `profile-photo` class, an appropriate `alt`, and a local image path. Add `object-fit: cover` to the class in the stylesheet.
- **Appearance:** edit `assets/css/style.css`. Theme behavior is in `assets/js/theme.js`; the video preview controls are in `assets/js/preview.js`.

Commit and push updates to publish them. This is a separate static copy; edits to the Render site's admin dashboard do not automatically update this version.

## Verification

Checked in Chromium at desktop and mobile widths (320–1440 px), including light/dark themes, saved theme preferences, keyboard navigation, video playback, reduced-motion preferences, and disabled JavaScript. The CV and all eight local asset references loaded successfully from a repository-style subdirectory, with no browser errors or horizontal overflow.

## Content and link sources

Content was collected on September 21, 2026 from:

- [Duc Anh Nguyen's portfolio](https://ducanh-nguyen.onrender.com/): bio, news, experience, education, current CV, project entries, author order, and existing links.
- [Functionalization project page](https://mingrui-zhao.github.io/Functionalization/): author websites and project resources.
- [Functionalization paper](https://arxiv.org/abs/2605.18010) and [code](https://github.com/mingrui-zhao/Functionalization).
- [VETI code](https://github.com/ducang/VETI).
- [Mingrui Zhao's publications](https://mingrui-zhao.github.io/): VETI's full title, equal-contribution markers, and [public video](https://mingrui-zhao.github.io/assets/video/VETI_video.mp4).
- [Yağız Aksoy's homepage](https://yaksoy.github.io/): spelling of the author's name.

Gnanavel Premnath and Jiayi Peng remain plain text because a working personal homepage could not be verified. No placeholder paper or project-page links were added for VETI. Project images and the Functionalization animation are bundled from the existing portfolio's local `static` directory; the poster image is a frame from that animation.

Only public website files are included. The Flask application, admin interface, database settings, and private configuration are outside this static site.
