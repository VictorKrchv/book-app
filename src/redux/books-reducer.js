const SORT_BOOKS = "SORT_BOOKS"
const SET_CHECK = "SET_CHECK"

let initialState = {
    books: [
        {
            title: "Harry Potter",
            author: 'Joanne Rowling',
            yearOfIssue: '1997',
            img: 'https://images.ua.prom.st/1037520035_w640_h640_rowling-jk-harry.jpg',
            description: 'Very intesting book',
            genres: ['Fantasy']
        },
        {
            title: "Taras Bulba",
            author: 'Nikolai Gogol',
            yearOfIssue: '1835',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Taras_bulba.jpg/220px-Taras_bulba.jpg',
            description: 'Very intesting book',
            genres: ['Historical']
        },
        {
            title: "The Little Prince",
            author: 'Antoine de Saint-Exupéry',
            yearOfIssue: '1943',
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG',
            description: 'Very intesting book',
            genres: ['Fantasy']
        },
        {
            title: "Harry Potter",
            author: 'Joanne Rowling',
            yearOfIssue: '1997',
            img: 'https://images.ua.prom.st/1037520035_w640_h640_rowling-jk-harry.jpg',
            description: 'Very intesting book',
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
    sortedBooks: []
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
                    if (genre.title === action.genre.title) {
                        genre.isChecked = !genre.isChecked
                    }
                    return genre
                })
            }
        }
        default: return state
    }
}

export const sortByGenres = () => ({
    type: SORT_BOOKS,
})

export const setIsCheck = (genre) => ({
    type: SET_CHECK, genre
})




export default booksReducer;