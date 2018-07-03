import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import data_en from './locales/data_en.json';
import data_ru from './locales/data_ru.json';

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: {
                data: data_en,
                about: 'About',
                aboutTextIntro1: 'Frontend School is a school in which to learn to think.',
                aboutTextIntro2: 'This is a school in which learning takes place remotely and individually.',
                aboutTextIntro3: 'This is a school where every person learns to think creatively and programming becomes a pleasure!',
                aboutTextIntro4: 'Being engaged in training and realizing the power of information technology - we can create a world in which it will be interesting, exciting and financially beneficial to live.',
                aboutTextIntro5: 'We will help you become a professional!',
                aboutTextIntro6: 'Join us!',
                path: 'Your Path',
                feedback: 'Feedback',
                contacts: 'Contacts',
                durationTitle: 'Duration',
                nearestTitle: 'Nearest',
                programCourse: 'Course Program',
                needToKnow: 'What you need to know',
                employment: 'Percentage of employment',
                lessonsPerWeek: 'How many lessons per week',
                lessonDuration: 'Duration of one lesson',
                classesType: 'How will the classes take place',
                classesMode: 'In what mode does the course take place',
                coursePrice: 'Course Price',
                freeLesson: 'The first lesson is always free!',
                moreInfo: 'I need more information',
                enroll: 'Enroll Course',
                modalTitle: 'Hey, tell us how to contact you!',
                moreInfoCourse: 'Course',
                moreInfoName: 'Name',
                namePlaceholder: 'Enter your name*',
                emailPlaceholder: 'Enter your email*',
                phonePlaceholder: 'Enter your phone number*',
                moreInfoEmail: 'Email',
                moreInfoPhone: 'Phone',
                submitButton: 'Submit',
                downloadTextPreview: 'Also you have the opportunity to save information on the course in PDF format',
                downloadButton: 'Download PDF version',
                enrollTitle: 'Have a good trip!',
                enrollComments: 'Your wishes',
                enrollPlaceholder: 'Describe your wishes ...',
                paymentAfter: 'Payment after first lesson',
                paymentInstallments: 'You can pay in installments',
                readyToCallTitle: 'Ready to call!',
                backCallButton: 'Back Call',
                html1: 'To begin with, you must be able',
                html2: 'to make static web pages, stylize them',
                html3: 'and understand how browser renders them!',
                js1: 'After that, you can add behavior for',
                js2: 'your page (clicks, receive data, etc.)',
                js3: 'and manage both business logic and the state of your application!',
                react1: 'This library will allow you to write less code,',
                react2: 'pay attention to work with application state',
                react3: 'and implement single-page applications!',
                redux1: 'This library is an excellent addition to the React',
                redux2: 'and its study will not take much time. It will help us',
                redux3: 'create a strictly unidirectional data stream!',
                angular1: 'This framework is considered very popular',
                angular2: 'and it uses Typescript. Also support',
                angular3: 'is provided by the Google team!',
                algorithms1: 'After all the way passed, the best way',
                algorithms2: 'to increase the understanding and effectiveness of your code -',
                algorithms3: 'it is to study the most popular algorithms!',
                nextStep: 'See where to start!',
                teachers: 'For teachers',
                materials: 'Useful materials',
                pupil1Title: 'Sergey Kovalenko',
                pupil1FeedbackText: 'I took a course in React and Javascript. I liked the format of teaching. Constantly solved problems from real projects. I advise!',
                pupil2Title: 'Roman Naminas',
                pupil2FeedbackText: 'After completing the course, Javascript gained a wealth of practical experience writing applications. There was something to show the employer. Thank you for the course!',
                pupil3Title: 'Kate Derizemlya',
                pupil3FeedbackText: 'In that year I took a course in HTML / CSS. The teacher helped me a lot with finding a job. I plan to continue studying Javascript. Very grateful!',
                pupil4Title: 'Igor Zadorozhniy',
                pupil4FeedbackText: 'Remained pleasantly surprised by the courses. Passed almost everything. A lot of practice, plus an individual approach. Grateful',
                pupil5Title: 'Zoryana Matveeva',
                pupil5FeedbackText: 'I took a course on Angular 4. I liked very much that online classes and a lot of practical tasks. I feel that the level has grown. Many thanks!',
                pupil6Title: 'Yaroslav Zhuk',
                pupil6FeedbackText: 'I took a course in Algorithms and was pleased with the volume and depth of the teacher\'s knowledge and how he presented the material. I advise everyone, I was satisfied!',
                english: 'English',
                emailValidation: 'Use valid email format',
                materialsDocs: 'Documentations',
                materialsChannels: 'YouTube Channels',
                materialsBooks: 'Books',
                result1: 'Thnx a lot!',
                result2: 'Give us 10 minutes for',
                result3: 'contact you!'
            }
        },
        ru: {
            translations: {
                data: data_ru,
                about: 'Про нас',
                aboutTextIntro1: 'Frontend School - это школа, в которой учат думать.',
                aboutTextIntro2: 'Это школа, в которой обучение происходит удаленно и индивидуально.',
                aboutTextIntro3: 'Это школа, где каждый человек учится мыслить творчески и программирование становится удовольствием!',
                aboutTextIntro4: 'Занимаясь обучением и осознавая силу информационных технологий - мы можем создать мир, в котором жить будет интересно, увлекательно и финансово выгодно.',
                aboutTextIntro5: 'Мы поможем Вам стать профессионалом!',
                aboutTextIntro6: 'Присоединяйтесь!',
                path: 'Путь воина',
                feedback: 'Отзывы',
                contacts: 'Контакты',
                durationTitle: 'Продолжительность',
                nearestTitle: 'Ближайшая дата',
                programCourse: 'Программа курса',
                needToKnow: 'Что Вам нужно знать',
                employment: 'Процент занятости',
                lessonsPerWeek: 'Количество занятий в неделю',
                lessonDuration: 'Длительность одного занятия',
                classesType: 'Как будут проходить занятия',
                classesMode: 'В каком формате проходят уроки',
                coursePrice: 'Стоимость курса',
                freeLesson: 'Первый урок всегда бесплатно!',
                moreInfo: 'Больше информации',
                enroll: 'Записаться',
                modalTitle: 'Эй! Помоги нам связаться с тобой!',
                moreInfoCourse: 'Курс',
                moreInfoName: 'Имя',
                namePlaceholder: 'Введите Ваше имя*',
                emailPlaceholder: 'Введите адрес Вашей почты*',
                phonePlaceholder: 'Введите номер Вашего телефона*',
                moreInfoEmail: 'Почта',
                moreInfoPhone: 'Моб. телефон',
                submitButton: 'Отправить',
                downloadTextPreview: 'Также Вы можете загрузить информацию о курсе в PDF формате',
                downloadButton: 'Загрузить PDF версию',
                enrollTitle: 'Приятного обучения!',
                enrollComments: 'Ваши пожелания',
                enrollPlaceholder: 'Опишите Ваши пожелания ...',
                paymentAfter: 'Оплата после первого занятия',
                paymentInstallments: 'Вы можете оплатить частями',
                readyToCallTitle: 'Готов позвонить!',
                backCallButton: 'Обратный звонок',
                html1: 'Для начала ты должен уметь',
                html2: 'верстать статичные веб страницы, стилизировать их',
                html3: 'и понимать как браузер с ними работает!',
                js1: 'После этого можно добавлять поведение для',
                js2: 'своей страницы (клики, принимать данные и т.д.)',
                js3: 'и управлять как бизнес логикой, так и состоянием твоего приложения!',
                react1: 'Эта библиотека позволит тебе писать меньше кода,',
                react2: 'обратить внимание на работу с состоянием приложения',
                react3: 'и реализовывать одностраничные приложения!',
                redux1: 'Эта библиотека является отличным дополнением к Реакту',
                redux2: 'и ее изучение не займет много времени. Она поможет нам',
                redux3: 'создать строго однонаправленный поток данных!',
                angular1: 'Этот фреймворк считается очень востребованным',
                angular2: 'и в нем используется Typescript. Также поддержку',
                angular3: 'обеспечивает команда Google!',
                algorithms1: 'После всего пройденного пути, лучшим способом',
                algorithms2: 'повысить понимание и эффективность твоего кода - ',
                algorithms3: 'это изучить наиболее востребованные алгоритмы!',
                nextStep: 'Посмотри с чего начать!',
                teachers: 'Преподавателям',
                materials: 'Полезные материалы',
                pupil1Title: 'Сергей Коваленко',
                pupil1FeedbackText: 'Проходил курс по React и Javascript. Очень понравился формат преподавания. Постоянно решали задачи из реальных проектов. Советую!',
                pupil2Title: 'Роман Наминас',
                pupil2FeedbackText: 'После прохождения курса Javascript получил огромный практический опыт написания приложений. Было что показать работодателю. Спасибо за курс!',
                pupil3Title: 'Катерина Дериземля',
                pupil3FeedbackText: 'В прошлом году проходила курс по HTML/CSS. Очень помог преподаватель с трудоустройством. Планирую дальше изучать Javascript. Очень благодарна!',
                pupil4Title: 'Игорь Задорожний',
                pupil4FeedbackText: 'Остался приятно удивлен курсами. Проходил практически все. Очень много практики, а также плюсом являтся индивидуальный подход. Благодарен!',
                pupil5Title: 'Зоряна Матвеева',
                pupil5FeedbackText: 'Проходила курс по Ангуляру 4. Очень понравилось, что занятия онлайн и очень много практических задач. Чувствую, что уровень вырос. Большое спасибо!',
                pupil6Title: 'Ярослав Жук',
                pupil6FeedbackText: 'Я проходил курс по Алгоритмам и остался доволен объемом и глубиной знаний преподвателя и то как он преподносил материал. Всем советую, остался доволен!',
                english: 'Английский',
                emailValidation: 'Введите правильный формат',
                materialsDocs: 'Документации',
                materialsChannels: 'YouTube каналы',
                materialsBooks: 'Книги',
                result1: 'Благодарим!',
                result2: 'Через 10 минут мы',
                result3: 'свяжемся с Вами!'
            }
        }
    },
    fallbackLng: "en",
    debug: true,
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
        formatSeparator: ","
    },
    react: {
        wait: false,
        nsMode: 'default'
    }
});

export default i18n;