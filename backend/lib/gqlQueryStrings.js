export const TrendingAnimeQuery = `
	query($perPage: Int, $page: Int) {
		Page(page: $page, perPage: $perPage) {
			pageInfo {
				total
				perPage
				currentPage
				lastPage
				hasNextPage
			}
			media (sort :TRENDING_DESC, type : ANIME){
				title {
					romaji
					english
					userPreferred
				}
				bannerImage
				coverImage {
					medium
        	large
        	extraLarge
				}
				description
				episodes
				
			}
		}
	}
`;
export const favouritesAnimeQuery = `
	query($perPage: Int, $page: Int) {
		Page(page: $page, perPage: $perPage) {
			pageInfo {
				total
				perPage
				currentPage
				lastPage
				hasNextPage
			}
			media(sort: FAVOURITES_DESC, type: ANIME) {
				title {
					romaji
					english
					userPreferred
				}
				bannerImage
				coverImage {
					medium
					large
					extraLarge
				}
				description
				episodes
			}
		}
	}
`;

export const PopularAnimeQuery = `
	query($perPage: Int, $page: Int) {
		Page(page: $page, perPage: $perPage) {
			pageInfo {
				total
				perPage
				currentPage
				lastPage
				hasNextPage
			}
			media(sort : POPULARITY_DESC, type: ANIME) {
				title {
					romaji
					english
					userPreferred
				}
				bannerImage
				coverImage {
					medium
        	large
        	extraLarge
				}
				description
				episodes
				
			}
		}
	}
`;

export const searchAnimeQuery = `
	query($search: String) {
		Media (search : $search, type: ANIME, sort:POPULARITY_DESC) {
			title {
				romaji
				english
				userPreferred
			}
			season
			seasonYear
			type
			bannerImage
			coverImage{
				extraLarge
				large
			}
			description
			episodes
			status
			genres
		}
	}
`;