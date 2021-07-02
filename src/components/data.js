export const productData = [{
            title: "Sweet Shirt",
            price: 30,
            discount: 50, //discount will be zero if no discount is offered
            compareAtPrice: 20,
            costPerItem: 25,
            chargeTax: false,
            stockKeepingUnit: "ISBG8454",
            barcode: "AJLDHIU453",
            trackQuantity: true,
            sellOutofStock: false,
            availableQuantity: 9,
            physicalProduct: true,
            images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
            weight: "0.30",
            country: "Pakistan",
            customDate: true, //Will be used similar to custom writing.No relation to delivery date
            customWriting: 'Signature', //If empty then custom writting option will be disable and if not empty then we will take text input as text in string
            reviews: [{
                    id: '1',
                    username: 'Umar',
                    rating: 3,
                    feedback: 'This is a very very mandane product'
                },
                {
                    id: '1',
                    username: 'Umar',
                    rating: 2,
                    feedback: 'I am very very disappointed'
                },
            ],
            variants: [{
                    id: 1,
                    selectedOption: "Size",
                    tags: [
                        { id: 1, text: "SM" },
                        { id: 2, text: "M" },
                        { id: 3, text: "L" },
                        { id: 4, text: "XL" },
                        { id: 5, text: "XXL" }

                    ]
                },
                {
                    id: 2,
                    selectedOption: "Color",
                    tags: [
                        { id: 1, text: "#0CF7F7" },
                        { id: 2, text: "#f4d6c6" }
                    ]
                },
                {
                    id: 3,
                    selectedOption: "Material",
                    tags: [
                        { id: 1, text: 'Leatherate' },
                        { id: 2, text: 'Cotton' }
                    ]
                }
            ],
            description: "<h3>Material:</h3><ul><li>Wool</li><li>Cotton</li></ul><h3>Quality:</h3><p>This is a <strong>high</strong> quality product that will make you feel comfortable and <strong>attractive.</strong></p>"
        },
        {
            title: "chair for sale",
            price: 45,
            compareAtPrice: 23,
            costPerItem: 60,
            chargeTax: false,
            images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
            stockKeepingUnit: "no number",
            barcode: "ISUN0945",
            trackQuantity: false,
            sellOutofStock: true,
            availableQuantity: 1,
            physicalProduct: true,
            weight: "75",
            country: "Daska",
            variants: [{
                    id: 1,
                    selectedOption: "Title",
                    tags: [
                        { id: 1, text: "Night", image: '' },
                        { id: 2, text: "Day" }
                    ]
                },
                {
                    id: 2,
                    selectedOption: "Color",
                    tags: [
                        { id: 1, text: "Blue" },
                        { id: 2, text: "Green" }
                    ]
                },
                {
                    id: 3,
                    selectedOption: "Style",
                    tags: [
                        { id: 1, text: "Rock" },
                        { id: 2, text: "Classical" }
                    ]
                }
            ],
            description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
            imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
        },
        {
            title: "Books for sale",
            price: 35,
            compareAtPrice: 23,
            costPerItem: 60,
            chargeTax: false,
            images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
            stockKeepingUnit: "no number",
            barcode: "ISUN0945",
            trackQuantity: false,
            sellOutofStock: true,
            availableQuantity: 1,
            physicalProduct: true,
            weight: "75",
            country: "Daska",
            variants: [{
                    id: 1,
                    selectedOption: "Title",
                    tags: [
                        { id: 1, text: "Night" },
                        { id: 2, text: "Day" }
                    ]
                },
                {
                    id: 2,
                    selectedOption: "Color",
                    tags: [
                        { id: 1, text: "Blue" },
                        { id: 2, text: "Green" }
                    ]
                },
                {
                    id: 3,
                    selectedOption: "Style",
                    tags: [
                        { id: 1, text: "Rock" },
                        { id: 2, text: "Classical" }
                    ]
                }
            ],
            description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
            imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
        },
        {
            title: "Cap for sale",
            price: 15,
            compareAtPrice: 23,
            costPerItem: 60,
            chargeTax: false,
            images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
            stockKeepingUnit: "no number",
            barcode: "ISUN0945",
            trackQuantity: false,
            sellOutofStock: true,
            availableQuantity: 1,
            physicalProduct: true,
            weight: "75",
            country: "Daska",
            variants: [{
                    id: 1,
                    selectedOption: "Title",
                    tags: [
                        { id: 1, text: "Night" },
                        { id: 2, text: "Day" }
                    ]
                },
                {
                    id: 2,
                    selectedOption: "Color",
                    tags: [
                        { id: 1, text: "Blue" },
                        { id: 2, text: "Green" }
                    ]
                },
                {
                    id: 3,
                    selectedOption: "Style",
                    tags: [
                        { id: 1, text: "Rock" },
                        { id: 2, text: "Classical" }
                    ]
                }
            ],
            description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
            imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
        },
        {
            title: "Cap for sale",
            price: 15,
            compareAtPrice: 23,
            costPerItem: 60,
            chargeTax: false,
            images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
            stockKeepingUnit: "no number",
            barcode: "ISUN0945",
            trackQuantity: false,
            sellOutofStock: true,
            availableQuantity: 1,
            physicalProduct: true,
            weight: "75",
            country: "Daska",
            variants: [{
                    id: 1,
                    selectedOption: "Title",
                    tags: [
                        { id: 1, text: "Night" },
                        { id: 2, text: "Day" }
                    ]
                },
                {
                    id: 2,
                    selectedOption: "Color",
                    tags: [
                        { id: 1, text: "Blue" },
                        { id: 2, text: "Green" }
                    ]
                },
                {
                    id: 3,
                    selectedOption: "Style",
                    tags: [
                        { id: 1, text: "Rock" },
                        { id: 2, text: "Classical" }
                    ]
                }
            ],
            description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
            imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
        },
        {
            title: "Cap for sale",
            price: 15,
            compareAtPrice: 23,
            costPerItem: 60,
            chargeTax: false,
            images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
            stockKeepingUnit: "no number",
            barcode: "ISUN0945",
            trackQuantity: false,
            sellOutofStock: true,
            availableQuantity: 1,
            physicalProduct: true,
            weight: "75",
            country: "Daska",
            variants: [{
                    id: 1,
                    selectedOption: "Title",
                    tags: [
                        { id: 1, text: "Night" },
                        { id: 2, text: "Day" }
                    ]
                },
                {
                    id: 2,
                    selectedOption: "Color",
                    tags: [
                        { id: 1, text: "Blue" },
                        { id: 2, text: "Green" }
                    ]
                },
                {
                    id: 3,
                    selectedOption: "Style",
                    tags: [
                        { id: 1, text: "Rock" },
                        { id: 2, text: "Classical" }
                    ]
                }
            ],
            description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
            imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
        },
        {
            title: "Cap for sale",
            price: 15,
            compareAtPrice: 23,
            costPerItem: 60,
            chargeTax: false,
            images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
            stockKeepingUnit: "no number",
            barcode: "ISUN0945",
            trackQuantity: false,
            sellOutofStock: true,
            availableQuantity: 1,
            physicalProduct: true,
            weight: "75",
            country: "Daska",
            variants: [{
                    id: 1,
                    selectedOption: "Title",
                    tags: [
                        { id: 1, text: "Night" },
                        { id: 2, text: "Day" }
                    ]
                },
                {
                    id: 2,
                    selectedOption: "Color",
                    tags: [
                        { id: 1, text: "Blue" },
                        { id: 2, text: "Green" }
                    ]
                },
                {
                    id: 3,
                    selectedOption: "Style",
                    tags: [
                        { id: 1, text: "Rock" },
                        { id: 2, text: "Classical" }
                    ]
                }
            ],
            description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
            imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
        },
        {
            title: "Cap for sale",
            price: 89,
            compareAtPrice: 23,
            costPerItem: 60,
            chargeTax: false,
            images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
            stockKeepingUnit: "no number",
            barcode: "ISUN0945",
            trackQuantity: false,
            sellOutofStock: true,
            availableQuantity: 1,
            physicalProduct: true,
            weight: "75",
            country: "Daska",
            variants: [{
                    id: 1,
                    selectedOption: "Title",
                    tags: [
                        { id: 1, text: "Night" },
                        { id: 2, text: "Day" }
                    ]
                },
                {
                    id: 2,
                    selectedOption: "Color",
                    tags: [
                        { id: 1, text: "Blue" },
                        { id: 2, text: "Green" }
                    ]
                },
                {
                    id: 3,
                    selectedOption: "Style",
                    tags: [
                        { id: 1, text: "Rock" },
                        { id: 2, text: "Classical" }
                    ]
                }
            ],
            description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
            imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
        },
        {
            title: "Cap for sale",
            price: 75,
            compareAtPrice: 23,
            costPerItem: 60,
            chargeTax: false,
            images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
            stockKeepingUnit: "no number",
            barcode: "ISUN0945",
            trackQuantity: false,
            sellOutofStock: true,
            availableQuantity: 1,
            physicalProduct: true,
            weight: "75",
            country: "Daska",
            variants: [{
                    id: 1,
                    selectedOption: "Title",
                    tags: [
                        { id: 1, text: "Night" },
                        { id: 2, text: "Day" }
                    ]
                },
                {
                    id: 2,
                    selectedOption: "Color",
                    tags: [
                        { id: 1, text: "Blue" },
                        { id: 2, text: "Green" }
                    ]
                },
                {
                    id: 3,
                    selectedOption: "Style",
                    tags: [
                        { id: 1, text: "Rock" },
                        { id: 2, text: "Classical" }
                    ]
                }
            ],
            description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
            imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
        },
        {
            title: "Cap for sale",
            price: 55,
            compareAtPrice: 23,
            costPerItem: 60,
            chargeTax: false,
            images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
            stockKeepingUnit: "no number",
            barcode: "ISUN0945",
            trackQuantity: false,
            sellOutofStock: true,
            availableQuantity: 1,
            physicalProduct: true,
            weight: "75",
            country: "Daska",
            variants: [{
                    id: 1,
                    selectedOption: "Title",
                    tags: [
                        { id: 1, text: "Night" },
                        { id: 2, text: "Day" }
                    ]
                },
                {
                    id: 2,
                    selectedOption: "Color",
                    tags: [
                        { id: 1, text: "Blue" },
                        { id: 2, text: "Green" }
                    ]
                },
                {
                    id: 3,
                    selectedOption: "Style",
                    tags: [
                        { id: 1, text: "Rock" },
                        { id: 2, text: "Classical" }
                    ]
                }
            ],
            description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
            imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
        }
    ]
    // Data base on collections
const appData = [{
        collection: 'Personalized',
        menu: [{
                title: "PERSONALIZED BOOKS",
                items: [
                    "Ultimate Birthday Book",
                    "Custom Birthday Book",
                    "Special Day Book",
                    "Anniversary Book",
                    "Sports History Books"
                ]
            },
            {
                title: "CUSTOM REPRINTS",
                items: [
                    "Front Page Reprint",
                    "Inside Page Reprint",
                    "Front Page Puzzle",
                    "Anniversary Book",
                ]
            }
        ],
    },
    {
        collection: 'Times Goods',
        menu: [{
                title: "BRANDED GOODS", // category 
                items: [
                    "Accessories", // sub category
                    "Drinkware",
                    "Maps",
                    "Puzzles & Games",
                    "Stationery"
                ]
            },
            {
                title: "BRANDING CLOTHING",
                items: [
                    "Men's",
                    "Women's",
                    "Babies & Kids",
                ]
            },
            {
                title: "COLLECTIONS",
                items: [
                    "Cooking",
                    "The 1619 Projects",
                    "Early Edition",
                    "Local Edition",
                    "Modern Love",
                    ' "The Daily" '
                ]
            },
            {
                title: "",
                items: [
                    '"The Truth"',
                    "Crossword Gifts",
                    "Travel Gifts",
                    "Women's Rights"
                ]
            },

        ],
    },
    {
        collection: "Wall Art",
        menu: [{
                title: "PHOTOGRAPHY",
                items: [
                    "Best Sellers",
                    "Historical",
                    "New York",
                    "Arial",
                    "Politics",
                    "Space"
                ]
            },
            {
                title: "",
                items: [
                    "Sports",
                    "Travel"
                ]
            },
            {
                title: "PRINTS",
                items: [
                    "Illustrations",
                    "Maps",
                    "Posters"
                ]
            },
            {
                title: "PERSONALIZED",
                items: [
                    "Front Page Reprint",
                    "Inside Page Reprint",
                    "Crossword Puzzle Reprint",
                    "Choose any Times Photo",
                ]
            },
        ]
    },
    {
        collection: "Books",
        menu: [{
                title: "CATEGORIES",
                items: [
                    "Crosswords",
                    "Travel",
                    "Books From the Times"
                ]
            },
            {
                title: "PERSONALIZED",
                items: [
                    "Ultimate Birthday Book",
                    "Custom Birthday Book",
                    "History Books",
                    "Sports History Books"
                ]
            },
            {
                title: "PRINTS",
                items: [
                    "Illustrations",
                    "Maps",
                    "Posters"
                ]
            },
            {
                title: "PERSONALIZED",
                items: [
                    "Front Page Reprint",
                    "Inside Page Reprint",
                    "Crossword Puzzle Reprint",
                    "Choose any Times Photo",
                ]
            },
        ]
    }
];


// export const productDat =

//     [
//         { 
//             collection:'',
//             subCollection:'',

//         title: "Sweet Shirt",
//         price: 30,
//         compareAtPrice: 20,
//         costPerItem: 25,
//         chargeTax: false,
//         stockKeepingUnit: "ISBG8454",
//         barcode: "AJLDHIU453",
//         trackQuantity: true,
//         sellOutofStock: true,
//         availableQuantity: 50,
//         physicalProduct: true,
//             images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//         weight: "0.30",
//         country: "Pakistan",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "bottom" },
//                         { id: 3, text: "blue" }]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "#7e2093" },
//                         { id: 2, text: "#12ddec" }]
//                 },
//                 {
//                     id: 3, selectedOption: "Material",
//                     tags: [
//                         { id: 1, text: "v" },
//                         { id: 2, text: "h" }]
//                 }],
//             description: "<h3>Material:</h3><ul><li>Wool</li><li>Cotton</li></ul><h3>Quality:</h3><p>This is a <strong>high</strong> quality product that will make you feel comfortable and <strong>attractive.</strong></p>"
//         },

//         {
//             title: "chair for sale",
//             price: 45,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",    
//                     tags: [
//                         { id: 1, text: "Night" , image:''},
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Books for sale",
//             price: 35,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 15,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 15,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 15,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 15,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 89,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 75,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 55,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://i.pinimg.com/originals/63/74/aa/6374aac5eec003031839bca8a07cc297.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         }
//     ];