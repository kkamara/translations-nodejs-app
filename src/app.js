import express from 'express';
import path from 'path';
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware';
import indexRouter from './routes/index.js';
import { setLanguage } from './middleware/setLanguageMiddleware.js';

i18next
  .use(Backend)                     // Connects the file system backend
  .use(middleware.LanguageDetector) // Enables automatic language detection
  .init({
    ns: [
      "translation",
      "business",
    ],
    defaultNs: "translation",
    backend: {
      loadPath: path.join(process.cwd(), 'src/locales', '{{lng}}', '{{ns}}.json'), // Path to translation files
    },
    detection: {
      order: ['querystring', 'cookie'], // Priority: URL query string first, then cookies
      caches: ['cookie'],               // Cache detected language in cookies
    },
    fallbackLng: 'en',                   // Default language when no language is detected
    preload: ['en', 'ru'],               // Preload these languages at startup
  });

const app = express();

app.use(middleware.handle(i18next));
app.use(setLanguage);

const PORT = 3000;
// Set up views and view engine
app.set('views', path.join(process.cwd(), 'src/views'));
app.set('view engine', 'pug');
// Define routes
app.use('/', indexRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});