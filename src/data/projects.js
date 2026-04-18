export const projects = [
  {
    id: 'audio-question-detector',
    title: 'Audio Question Detector',
    subtitle: 'Desktop App · Python · AI',
    description:
      'Кросплатформний десктопний додаток, що в реальному часі аналізує системний звук (або мікрофон) для виявлення питань під час дзвінків чи співбесід. Використовує WebRTC VAD для детекції голосу, звертається до Groq Whisper API (large-v3) для розпізнавання тексту та LLaMA 3.3 (70B) для миттєвої генерації відповіді. Має кастомний "Stealth" оверлей режим (невидимий для захоплення екрана), оптимізовану конвеєрну обробку аудіо без затримок та вбудовану памʼять контексту розмови.',
    skillsDemonstrated: [
      'Захоплення та обробка аудіо-потоків у реальному часі за допомогою sounddevice / NumPy',
      'Використання Machine Learning для Voice Activity Detection (WebRTC VAD)',
      'Інтеграція високошвидкісних LLM та Speech-to-Text API від Groq (Whisper + LLaMA 3.3 70B)',
      'Розробка кросплатформного GUI за допомогою PyQt5 з підтримкою кастомних тем та глобальних гарячих клавіш',
      'ОС-специфічні абстракції (Stealth overlay через SetWindowDisplayAffinity для Windows та NSWindow.sharingType для macOS)',
    ],
    techBadges: [
      { name: 'Python', color: '#3776AB' },
      { name: 'PyQt5', color: '#41CD52' },
      { name: 'Groq API', color: '#F55036' },
      { name: 'LLaMA 3', color: '#0459FF' },
      { name: 'WebRTC', color: '#333333' },
    ],
    link: 'https://github.com/Alkaness/audio_question_detector',
  },
  {
    id: 'starosta-bot',
    title: 'StarostaBot',
    subtitle: 'Discord Community Bot · Rust',
    description:
      'Продакшн Discord бот для мого серверу з друзями, написаний повністю на Rust. Має повну систему XP та рівнів з логарифмічною формулою масштабування, чіп-економіку з казино та блекджек міні-іграми, канали ідей/пропозицій де повідомлення користувачів стають вотабельними ембедами з флоу схвалення адміністраторами, відстеження днів народження з автоматичним призначенням ролей та серверними оголошеннями, інструменти модерації (мʼют, очищення, фільтр заборонених слів), а також CI/CD пайплайн через GitHub Actions.',
    skillsDemonstrated: [
      'Системне програмування на Rust (ownership, lifetimes, async з Tokio)',
      'Подієво-орієнтована архітектура (Discord gateway events → handlers → state mutations)',
      'Проєктування персистентного стану з mutex-guarded in-memory кешуванням + flat-file JSON storage',
      'Побудова slash-command інтерфейсів з Poise фреймворком (modals, embeds, autocomplete)',
      'Імплементація фонових циклів завдань з tokio::select! (XP ticks, birthday announcements, daily DM backups)',
      'Налаштування GitHub Actions CI: cargo check, cargo fmt, cargo clippy -D warnings, release build',
      'Деплой на Discloud з декларативним конфіг-файлом',
    ],
    techBadges: [
      { name: 'Rust', color: '#CE412B' },
      { name: 'Tokio', color: '#CE412B' },
      { name: 'Poise', color: '#CE412B' },
      { name: 'Serenity', color: '#CE412B' },
      { name: 'Serde', color: '#CE412B' },
      { name: 'GitHub Actions', color: '#2088FF' },
      { name: 'Discloud', color: '#5865F2' },
    ],
    link: 'https://github.com/Alkaness/discord-starosta-bot',
  },
  {
    id: 'family-tree-bot',
    title: 'Сімейне дерево',
    subtitle: 'Website & Telegram Bot · Node.js',
    description:
      'Вебсайт для відображення родинних дерев членів BEST Lviv, який бере дані з нашої бази даних. Включає в себе Telegram-бота, через який люди, що є в базі даних Інфобука, можуть автоматично завантажувати свої фотографії. Фото обробляються через Sharp (макс 1080×1080, до 1 МБ) та завантажуються в Google Drive, після чого бот відправляє POST вебхук для миттєвого оновлення фотографії на сайті.',
    skillsDemonstrated: [
      'Інтеграція Google Drive API з Service Account автентифікацією (JSON key + base64 env var pattern для Docker/cloud деплоїв)',
      'MongoDB native driver: пошук по колекції, upsert у окрему photos колекцію',
      'Пайплайн обробки зображень з Sharp (resize, конвертація формату, тюнінг якості під бюджет розміру файлу)',
      'Telegraf conversation flow: stateful multi-step обробка повідомлень (/start → identity lookup → photo prompt → upload → notify)',
      'Дизайн вебхуків: тригер downstream cache invalidation з Bearer token auth',
      'Структуроване логування з Pino',
      'Environment-variable–driven конфігурація для гнучкого локального/продакшн деплою',
    ],
    techBadges: [
      { name: 'Node.js', color: '#68A063' },
      { name: 'Telegraf', color: '#0088CC' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Google Drive API', color: '#4285F4' },
      { name: 'Sharp', color: '#99CC00' },
      { name: 'Pino', color: '#68A063' },
    ],
    links: [
      { url: 'https://github.com/BESTLviv/best-lviv-tree', label: 'GitHub (Сайт)' },
      { url: 'https://github.com/BESTLviv/best-lviv-tree-bot', label: 'GitHub (Бот)' }
    ],
  },

];
