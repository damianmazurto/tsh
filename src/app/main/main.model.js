'use strict';

angular.module('tshMoney')
	.factory("mainModel", ['mainService', function(mainService)	
	{	
		var tshMoneyModel = function()
		{
			this.currentPage = 1 ;
			this.query = '' ;
			this.rating = '' ;

			this.payments = [{
				payment_amount: "",
				payment_cost_rating: "",
				payment_ref: "",
				payment_supplier: ""
			}] ;

			this.pagination = {} ;
		}
		
		tshMoneyModel.prototype.load = function(pagination)
		{
			
			
			var self = this,
				promise = null ;

			/*
			switch(pagination.action)
			{
				case 'next':
				{					

					promise = mainService.getListAfterName(pagination.name, pagination.count) ;
					

				}
				break ;
				case 'prev':
				{
					promise = mainService.getListBeforeName(pagination.name, pagination.count) ;			
				}
				break ;
				case 'first': 
				{
					promise = mainService.getListFirstPage() ;
				}
				break ;
			}
			*/

			promise = mainService.getResults(this.currentPage, this.query, this.rating) ;

			promise.then(function(data)
			{
				console.log(data) ;
				
				self.pagination = data.pagination ;		
				self.payments = data.payments ;
				console.log(self) ;	
			})
			
		}


		function prepareData(data)
		{
			var listing = [] ;

			
			for(var i = 0, length = data.length ; i < length ; i += 1)
			{
				var article = {
					id: data[i].data.id,
					author: data[i].data.author,
					date: data[i].data.created_utc*1000,
					name: data[i].data.name,
					title: data[i].data.title,
					url: data[i].data.url,
					permalink: data[i].data.permalink,
					thumbnail: data[i].data.thumbnail
				}
				listing.push(article) ;
				
			}

			return listing ;
		}

		return tshMoneyModel ;

	}]) ;