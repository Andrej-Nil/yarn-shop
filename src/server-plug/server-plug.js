
export default class ServerPlug {

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


