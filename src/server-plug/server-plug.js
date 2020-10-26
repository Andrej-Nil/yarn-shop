
export default class ServerPlug {
    _bannerBaseApi = './image/banners/banner';

    catalogList = [
        {
            category: 'Турецкая пряжа',
            categoryItem: [
                {label: 'Alize', href:'#!', id: 'alize'},
                {label: 'YarnArt', href:'#!', id: 'yarnArt'},
                {label: 'Nako', href:'#!', id: 'nako'},
                {label: 'Gazzal', href:'#!', id: 'gazzal'},
                {label: 'Himalaya', href:'#!', id: 'himalaya'}
            ],
            href: '#!',
            id: 'turkishYarn'
        },

        {
            category: 'Российская пряжа',
            categoryItem: [
                {label: 'Пехорский текстиль', href:'#!', id: 'pethorka'},
                {label: 'ПНК им.Кирова', href:'#!', id: 'pnkKirova'},
                {label: 'Семеновская фабрика', href:'#!', id: 'semenovskaya'},
                {label: 'Троицкая фабрика', href:'#!', id: 'troitskaya'},
            ],
            href: '#!',
            id: 'russianYarn'
        },

        {
            category: 'Итальянская пряжа',
            categoryItem: [
                {label: 'Etrofil', href:'#!', id: 'etrofil'},
                {label: 'Lana gatto', href:'#!', id: 'LanaGatto'},
                {label: 'SEAM', href:'#!', id: 'seam'},
            ],
            href: '#!',
            id: 'italianYarn'
        },

        {
            category: 'Drops',
            categoryItem: null,
            href: '#!',
            id: 'drops'
        },

        {
            category: 'Наше производство',
            categoryItem: null,
            href: '#!',
            id: 'ourProduction'
        },

        {
            category: 'Спицы',
            categoryItem: null,
            href: '#!',
            id: 'spokes'
        },

        {
            category: 'Крючки',
            categoryItem: null,
            href: '#!',
            id: 'hooks'
        },

        {
            category: 'Аксессуары',
            categoryItem: null,
            href: '#!',
            id: 'Accessories'
        },
    ];

    mobileMenuList = [
        {
            label: 'Мы находисмся', href: null, cls: 'item-icon _point', id: 'addresses',
            submenu: 'addresses',
        },

        {
            label: 'Каталог', href: null, cls: 'item-icon _catalog', id: 'catalog',
            submenu: 'catalog',
        },

        {
            label: 'Цены и скидки', href:'#!', cls: '', id: 'priceAndSale',
            submenu: null,
        },

        {
            label: 'Оплата', href:'#!', cls: '', id: 'pay',
            submenu: null,
        },

        {
            label: 'Доставка', href:'#!', cls: '', id: 'delivery',
            submenu: null,
        },

        {
            label: 'Еще', href: null , cls: '', id: 'more',
            submenu: [
                {label: 'Поступление на склад', cls: '', href: "#!", id: 'receipt', submenu: null,},
                {label: 'O нас', cls: '', href: "#!", id: 'aboutUs', submenu: null,},
                {label: 'Новости', cls: '', href: "#!", id: 'news', submenu: null,},
                {label: 'Помощь', cls: '', href: "#!", id: 'support', submenu: null,},
                {label: 'Вакансии', cls: '', href: "#!", id: 'vacancy', submenu: null,},
                {label: 'Наше производство', cls: '', href: "#!", id: 'production', submenu: null,}
            ],
        },
    ];

    banner1 = [
        {src: `${this._bannerBaseApi}-1.jpg`, cls: '_desktop', id: 'desktop' },
        {src: `${this._bannerBaseApi}-1-middle.jpg`, cls: '_middle', id: 'middle' },
        {src: `${this._bannerBaseApi}-1-small.jpg`, cls: '_small', id: 'small' },
        {src: `${this._bannerBaseApi}-1-tiny.jpg`, cls: '_tiny', id: 'tiny' },
    ];

    banner2 = [
        {src: `${this._bannerBaseApi}-2.jpg`, cls: '_desktop', id: 'desktop' },
        {src: `${this._bannerBaseApi}-2-middle.jpg`, cls: '_middle', id: 'middle' },
        {src: `${this._bannerBaseApi}-2-small.jpg`, cls: '_small', id: 'small' },
        {src: `${this._bannerBaseApi}-2-tiny.jpg`, cls: '_tiny', id: 'tiny' },
    ];

    shops = [
        {
            title: 'Оптовый склад',
            desc: 'Оптова-розничная продажа. Минимальный лот - упаковка.',
            href: '#!',
            info: [
                {
                    title: 'Время работы:',
                    item: [
                        {value: 'ПН-ПТ: с 10-00 до 17-30', id: 'MonFri' },
                        {value: 'СБ: с 10-00 до 15-30', id: 'sat'},
                        {value: 'ВС: выходной', id: 'sun'},
                    ],
                    id: 'workTime'
                },
                {
                    title: 'Телефон:',
                    item: [
                        {value: `+7 (992) 002-11-84`, id: 'phone1'},
                        {value: `+7 (992) 342-11-84`, id: 'phone2'},
                    ],
                    id: 'phones'
                },
                {
                    title: 'Адрес:',
                    item: [
                        {value: 'г.Екатерибург, 8 марта 207, стр. 6', id: 'address'}
                    ],
                    id: 'address'
                },
            ],
            id: 'mainWarehouse',
        },
        {
            title: 'Магазин "Пряжа"',
            desc: 'Розничная продажа. Минимальный лот - моток.',
            href: '#!',
            info: [
                {
                    title: 'Время работы:',
                    item: [
                        {value: 'ПН-ПТ: с 10-00 до 17-30', id: 'MonFri' },
                        {value: 'СБ-ВС: с 10-00 до 19-00', id: 'sat'},
                    ],
                    id: 'workTime'
                },
                {
                    title: 'Телефон:',
                    item: [
                        {value: `+7 (343) 240-07-70`, id: 'phone1'},
                        {value: `+7 (992) 002-11-84`, id: 'phone2'},
                    ],
                    id: 'phones'
                },
                {
                    title: 'Адрес:',
                    item: [
                        {value: 'г.Екатерибург, ул. Академика Бардина, 32, корп. 1', id: 'address'}
                    ],
                    id: 'address'
                },

            ],
            id: 'yarnShop'
        },
        {
            title: 'Магазин в "Пекине"',
            desc: 'Розничная продажа. Минимальный лот - моток.',
            href: '#!',
            info: [
                {
                    title: 'Время работы:',
                    item: [
                        {value: 'ПН-ВС: с 9-00 до 17-00', id: 'MonFri' },
                    ],
                    id: 'workTime'
                },
                {
                    title: 'Телефон:',
                    item: [
                        {value: `+7 (992) 002-99-99`, id: 'phone1'}
                    ],
                    id: 'phones'
                },
                {
                    title: 'Адрес:',
                    item: [
                        {value: 'г.Екатерибург, Ольховская ул., 2, "ТЦ ПЕКИН"', id: 'address'}
                    ],
                    id: 'address'
                },

            ],
            id: 'pekinShop'
        },
    ];

    mobileNavMain = [
        {label: 'Мы находимся', cls: 'item-icon _point', href: null, id: 'addresses',
            submenu: {title: 'Мы находимся', listItem: 'addresses',
            },
        },
        {label: 'Каталог', cls: 'item-icon _catalog', href: null, id: 'catalog', submenu: true,},
        {label: 'Цены и скидки', cls: null, href: "#!", id: 'priceAndSale', submenu: null,},
        {label: 'Распродажа', cls: null, href: "#!", id: 'sale', submenu: null,},
        {label: 'Оплата', cls: '', href: "#!", id: 'pay', submenu: null,},
        {label: 'Доставка', cls: '', href: "#!", id: 'delivery', submenu: null,},
        {label: 'Цены и скидки', cls: null, href: "#!", id: 'priceAndSale', submenu: null,},
        {label: 'Распродажа', cls: null, href: "#!", id: 'sale', submenu: null,},
        {label: 'Оплата', cls: '', href: "#!", id: 'pay', submenu: null,},
        {label: 'Доставка', cls: '', href: "#!", id: 'delivery', submenu: null,},
        {label: 'Цены и скидки', cls: null, href: "#!", id: 'priceAndSale', submenu: null,},
        {label: 'Распродажа', cls: null, href: "#!", id: 'sale', submenu: null,},
        {label: 'Оплата', cls: '', href: "#!", id: 'pay', submenu: null,},
        {label: 'Доставка', cls: '', href: "#!", id: 'delivery', submenu: null,},
        {label: 'Еще', cls: '', href: null, id: 'more', submenu: {title: 'Еще',
                listItem: [
                    {label: 'Поступление на склад', cls: '', href: "#!", id: 'receipt', submenu: null,},
                    {label: 'O нас', cls: '', href: "#!", id: 'aboutUs', submenu: null,},
                    {label: 'Новости', cls: '', href: "#!", id: 'news', submenu: null,},
                    {label: 'Помощь', cls: '', href: "#!", id: 'support', submenu: null,},
                    {label: 'Вакансии', cls: '', href: "#!", id: 'vacancy', submenu: null,},
                    {label: 'Наше производство', cls: '', href: "#!", id: 'production', submenu: null,},
                    {label: 'Наше производство', cls: '', href: "#!", id: '1', submenu: null,},
                    {label: 'Наше производство', cls: '', href: "#!", id: '2', submenu: null,},

                ],
            },},
    ];

    linkList = [
        {
            title: 'Покупателю',
            links: [
                {href: '#!', label: 'Оплата', id: 'payment'},
                {href: '#!', label: 'Цена', id: 'price'},
                {href: '#!', label: 'Скидки', id: 'discounts'},
                {href: '#!', label: 'Розничная продажа', id: 'retail'},
                {href: '#!', label: 'Доставка', id: 'delivery'},
                {href: '#!', label: 'Переводы на карту', id: 'toСard'},
                {href: '#!', label: 'Раcпродажа', id: 'sale'},
                {href: '#!', label: 'Возврат', id: 'return'},
                {href: '#!', label: 'Предложения', id: 'suggestions'},
            ],
            id: "toBuyer"
        },

        {
            title: 'Компания',
            links: [
                {href: '#!', label: 'О нас', id: 'aboutUs'},
                {href: '#!', label: 'Новости', id: 'news'},
                {href: '#!', label: 'Вакансии', id: 'vacancy'},
                {href: '#!', label: 'Наше производство', id: 'productions'},
            ],
            id: "company"
        },
        {
            title: 'Прочее',
            links: [
                {href: '#!', label: 'Сотруднечество', id: 'cooperation'},
                {href: '#!', label: 'Ваши предложения', id: 'sentence'},
                {href: '#!', label: 'Оставить отзыв', id: 'review'},
                {href: '#!', label: 'Поступление на склад', id: 'receipt'},
            ],
            id: "other"
        }
    ];
}


