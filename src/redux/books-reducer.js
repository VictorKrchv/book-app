const SORT_BOOKS = "SORT_BOOKS"
const SET_CHECK = "SET_CHECK"
const CLEAR_CHECKS = "CLEAR_CHECKS"
const SET_CURRENT_BOOK = "SET_CURRENT_BOOK"

let initialState = {
    books: [
        {   
            id: 1,
            title: "Harry Potter",
            author: 'Joanne Rowling',
            published: '1997',
            img: 'https://images.ua.prom.st/1037520035_w640_h640_rowling-jk-harry.jpg',
            description: `Austen's finest comedy of manners portrays life in the genteel rural society of the early 1800s, and tells of the initial misunderstandings (and mutual enlightenment) between lively and quick witted Elizabeth Bennet and the haughty Mr. Darcy.`,
            genres: ['Fantasy']
        },
        {
            id: 2,
            title: "Taras Bulba",
            author: 'Nikolai Gogol',
            published: '1835',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Taras_bulba.jpg/220px-Taras_bulba.jpg',
            description: `Austen's finest comedy of manners portrays life in the genteel rural society of the early 1800s, and tells of the initial misunderstandings (and mutual enlightenment) between lively and quick witted Elizabeth Bennet and the haughty Mr. Darcy.`,
            genres: ['Historical']
        },
        {
            id: 3,
            title: "The Little Prince",
            author: 'Antoine de Saint-Exupéry',
            published: '1943',
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG',
            description: `Austen's finest comedy of manners portrays life in the genteel rural society of the early 1800s, and tells of the initial misunderstandings (and mutual enlightenment) between lively and quick witted Elizabeth Bennet and the haughty Mr. Darcy.`,
            genres: ['Fantasy']
        },
        {
            id: 4,
            title: "Harry Potter",
            author: 'Joanne Rowling',
            published: '1997',
            img: 'https://images.ua.prom.st/1037520035_w640_h640_rowling-jk-harry.jpg',
            description: `Austen's finest comedy of manners portrays life in the genteel rural society of the early 1800s, and tells of the initial misunderstandings (and mutual enlightenment) between lively and quick witted Elizabeth Bennet and the haughty Mr. Darcy.`,
            genres: ['Fantasy', 'Historical']
        }
    ],
    genres: [
        { title: "Romance", isChecked: false },
        { title: "Action & Adventure", isChecked: false },
        { title: "Mystery & Thriller", isChecked: false },
        { title: "Children's", isChecked: false },
        { title: "Historical", isChecked: false },
        { title: "Fantasy", isChecked: false },
    ],
    sortedBooks: [],
    currentBook: {},
}


const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BOOKS: {

            let filters = state.genres.filter(genre => {
                return genre.isChecked
            }).map(genre => {
                return genre.title
            })

            if (filters.length === 0) {
                return {
                    ...state,
                    sortedBooks: state.books,
                }
            }
            return {
                ...state,
                sortedBooks: state.books.filter(book => {
                    return !filters.some(filter => {
                        return !book.genres.includes(filter)
                    })
                })
            }

        }
        case SET_CHECK: {
            return {
                ...state,
                genres: state.genres.map(genre => {
                    if (genre.title === action.title) {
                        genre.isChecked = !genre.isChecked
                    }
                    return genre
                })
            }
        }
        case CLEAR_CHECKS: {
            return {
                ...state,
                genres: state.genres.map(genre => {
                    genre.isChecked = false
                    return genre
                })
            }
        }
        case SET_CURRENT_BOOK: {
            return {
                ...state,
                currentBook: state.books.find(book => {
                    return book.id.toString() === action.id
                })
            }
        }

        default: return state
    }
}

export const sortByGenres = () => ({
    type: SORT_BOOKS,
})

export const setIsCheck = (title) => ({
    type: SET_CHECK, title
})

export const clearIsCheck = () => ({
    type: CLEAR_CHECKS,
})

export const setCurrentBook = (id) => ({
    type: SET_CURRENT_BOOK, id
})



export default booksReducer;