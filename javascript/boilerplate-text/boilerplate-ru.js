// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Арабский',
  'bg':'Болгарский',
  'da':'Датский',
  'de':'Немецкий',
  'el':'Греческий',
  'en':'Английский',
  'es':'Испанский',
  'fr':'Французский',
  'he':'Иврит',
  'hi':'Хинди',
  'hu':'Венгерский',
'it':'Итальянский',
'ja':'Японский',
'ko':'Корейский',
'nl':'Голландский',
'pl':'Польский',
'pt':'Португальский',
'pt-br':'Португальский',
'ro':'Румынский',
'ru':'Русский',
'sv':'Шведский',
'th':'Тайский',
'tr':'Турецкий',
'uk':'Украинский',
'vi':'Вьетнамский',
'zh-hans':'Упрощенный китайский',
'zh-hant':'Традиционный китайский'
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Процесс перехода на главную страницу I18N"
s.moreResourcesOfThisType = "Больше ресурсов данного типа."
s.accessKeyN ='Ускоряющая клавиша n предназначена для пропусков при навигации по страницам. <a href="#contentstart">Пропуск для перехода на начало контента.</a>'
s.examplesInAnotherScript = "Настоящий документ содержит примеры на других языках/скриптах."
s.worldMap = "Карта мира"
s.searchI18nSite = "Поиск веб-сайта I18n" 
s.translationDisclaimer ='Данный документ является переводом. В случае каких-либо несоответствий и ошибок <a href="'+f.filename+'.en">последняя версия документа на английском языке</a> должна рассматриваться в качестве официальной. <a href="#copyright">Первоначальное авторское право</a> принадлежит W3C, как то указано ниже.'
s.translator = "Переводчик:"
s.relatedLinks = "Связанные ссылки"
s.articles = "Статьи"
s.topicIndexText = "Алфавитный указатель тематических разделов"
s.techIndexText = "Алфавитный указатель технологий"
s.gotoW3cHome = "Перейти на главную страницу W3C"
s.gotoI18nHome = "Перейти на главную страницу операций интернационализации"
s.internationalizationTitle = "Internationalization"
s.i18nActivityHomePage = "Главная страница операций интернационализации."
s.home = "Home"
s.aboutI18nActivity = "Сведения об операциях интернационализации."
s.about = "Сведения"
s.groupsThatMakeUp = "Группы, задействованные для выполнения операций интернационализации."
s.groups = "Группы"
s.topicIndexForInformation = "Алфавитный указатель тематических разделов данного веб-сайта."
s.topics = "Темы"
s.taskBasedIndex = "Алфавитный указатель технологий i18n, построенный на основе их задач."
s.techniques = "Технологии"
s.informationResources = "Информационные ресурсы о данном веб-сайте интернационализации."
s.resources = "Ресурсы"
s.newsFiltersAndFeeds = "Информация о новостных фильтрах и исходных материалах, использующихся для интернационализации W3C."
s.news = "Новости"
s.onThisPage = "на данной странице"
s.questionAlt = "Вопрос"
s.questionLink = "Вопрос"
s.question = "Вопрос"
s.backgroundAlt = "Вводная информация"
s.backgroundLink = "Вводная информация"
s.background = "Вводная информация"
s.answer = "Ответ" // heading
s.answerAlt = "Ответ"
s.answerLink = "Ответ"
s.byTheWayAlt = "Дополнительные полезные сведения"
s.byTheWayLink = "Кстати говоря"
s.byTheWay = "Кстати говоря"
s.furtherReadingAlt = "Дополнительные материалы"
s.furtherReadingLink = "Дополнительные материалы"
s.furtherReading = "Дополнительные материалы"
s.intendedAudience = "Предполагаемая аудитория:"
s.skipToAnswer = "[Перейти к ответу]"
s.tellUsWhatYouThink = "Выскажите своё мнение (по-английски)."
s.sendAComment = "Напишите нам"
s.subscribeToRSS = "Подпишитесь на ленту новостей RSS."
s.newResourcesAlt = "Уведомляет вас о новых публикациях при первом их появлении."
s.newResources = "Новые публикации"
s.homePageNewsAlt = "Все новости, показываемые на главной странице."
s.homePageNews = "Новости главной страницы"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Автор:" // followed by name of author(s)
s.previousAuthors = "Попередній автор:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Изменения внес:" // person's name appears after colon
s.translatedBy = "Переводчик:"
s.validXHTML = "Допустимый XHTML 1.0!"
s.validCSS = "Допустимый CSS!"
s.codedInUtf8 = "Кодировка UTF-8!"

s.translatedFromEnglishVer = "Перевод с английского: "+dt.enVersion+". Последнее внесение изменений в перевод: "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Примечание:</strong> Так как этот документ был переведен, изменения были внесены в <a href="'+f.filename+'.en">написанный английским языком оригинал</a>. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="Новое"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Обновленое" // same as New
s.translation_updated="Обновление перевода:" // date appears after colon 

s.aboutThisArticle="Про цю статтю" // title in the right column near the top of the page
s.aboutThisArticle="Об этой статье" // title in the right column near the top of the page
s.status_draft="Эта статья представляет собой проект, который еще не прошел публичное обозрение. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>.."
s.status_review="Эта статья в настоящее время проходит публичное обозрение. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>."
s.status_published="Эта статья рассмотрена Рабочей Группой W3C Интернационализации и прошла публичное обозрение, чтобы сделать ее как можно более точной. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>."
s.status_notreviewed="Эта статья была опубликована без публичного обозрения. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Longer answer" // heading
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
