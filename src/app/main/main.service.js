'use strict';

angular.module('tshMoney')
	.service("mainService", function($http, $q)
	{	

		var tsh_api_url = "http://test-api.tsh.io/index.php" ;

		return({
                    getFirstPage: getFirstPage,
                    getPageNumber: getPageNumber,
                    getByQuery: getByQuery,
                    getResults: getResults
               });		

        function getResults(page_number, query, rating)
        {           

            var request = $http({

                        method: "get",
                        url: tsh_api_url,   
                        params: {
                            action: 'ajaxAPI',
                            page: page_number-1,
                            query: query,
                            rating: rating
                        }                            
                    });

                return(request.then(handleSuccess, handleError));
        }

		function getFirstPage()
		{
 				var request = $http({

                        method: "get",
                        url: tsh_api_url,   
                        params: {
                            action: 'ajaxAPI'
                        }                            
                    });

                return(request.then(handleSuccess, handleError));
		}


		function getPageNumber(page_number)
		{
			 	var request = $http({

                        method: "get",
                        url: tsh_api_url,                               
                        params: {
                        	action: 'ajaxAPI',
                        	page: page_number
                        }
                    });

                return(request.then(handleSuccess, handleError));
		}

		function getByQuery(query, page_number)
		{
			 	var request = $http({

                        method: "get",
                        url: tsh_api_url,                               
                        params: {
                            action: 'ajaxAPI',
                            page: page_number,
                            query: query
                        }
                    });

                return(request.then(handleSuccess, handleError));
		}

		function handleError( response ) {

                    if (
                        ! angular.isObject( response.data ) ||
                        ! response.data.message
                        ) {

                        return( $q.reject( "An unknown error occurred." ) );

                    }

                    // Otherwise, use expected error message.
                    return( $q.reject( response.data.message ) );

        }

       function handleSuccess( response ) {
       			
	                return( response.data );

        }		




	}) 