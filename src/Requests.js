const key = '5e575af2618bdd3249f50223a6b65078'

const requests = {
    requestPopular: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
        params: {language: 'en-US', page: '1'},
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTU3NWFmMjYxOGJkZDMyNDlmNTAyMjNhNmI2NTA3OCIsInN1YiI6IjY0OGFmYTYxMDc2Y2U4MDBlNzQyYzNlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TCbM7NWQaNHHzsFPPu-00uma65p_3-p_J0Qjnpe_VaQ`
        }
    },
    requestTopRated: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        params: {language: 'en-US', page: '1'},
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTU3NWFmMjYxOGJkZDMyNDlmNTAyMjNhNmI2NTA3OCIsInN1YiI6IjY0OGFmYTYxMDc2Y2U4MDBlNzQyYzNlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TCbM7NWQaNHHzsFPPu-00uma65p_3-p_J0Qjnpe_VaQ'
        }
    },
    requestUpcoming: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        params: {language: 'en-US', page: '1'},
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTU3NWFmMjYxOGJkZDMyNDlmNTAyMjNhNmI2NTA3OCIsInN1YiI6IjY0OGFmYTYxMDc2Y2U4MDBlNzQyYzNlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TCbM7NWQaNHHzsFPPu-00uma65p_3-p_J0Qjnpe_VaQ'
        }

    },
};

export default requests;