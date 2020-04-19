var app = new Vue({
    el: "#myApp",
    data: {      
      subjects: [
        {
          'name': 'VueJS', 
          'topic': 'Basic of Vue js',
          'rating': 5
        },
        {
          'name': 'VueJS', 
          'topic': 'Enterprise Level App',
          'rating': 5
        },
        {
          'name': 'VueJS', 
          'topic': 'Programming Tricks',
          'rating': 3
        },
        {
          'name': 'Angular', 
          'topic': 'Basic of Angular',
          'rating': 5
        },
        {
          'name': 'Angular', 
          'topic': 'Enterprise Level App',
          'rating': 5
        },
        {
          'name': 'Angular', 
          'topic': 'Programming Tricks',
          'rating': 3
        },        
        {
          'name': 'React', 
          'topic': 'Basic of React',
          'rating': 5
        },
        {
          'name': 'React', 
          'topic': 'Enterprise Level App',
          'rating': 5
        },
        {
          'name': 'React', 
          'topic': 'Programming Tricks',
          'rating': 3
        }],        
        defaultPageSize: 4,
        defaultPageNumber: 1,
        selectedPageSize: 4,
        selectedPageNumber: 1,
        searchBy: null
    },
    methods:{      
      
      getPaginatedDataSet: function(arr, pageNo, pazeSize){
        var start = pazeSize * (pageNo - 1);
        var end = (start +  pazeSize);
        return arr.slice(start, end);
      },

      changePageNumber(pageNo){
        this.selectedPageNumber = pageNo;        
      }

    },
    computed:{      
      totalPageNumbers: function(){
        var totalPages = 0;
        if(this.filteredSubjects.length > this.defaultPageSize){                    
          totalPages = Math.floor( this.filteredSubjects.length / this.defaultPageSize) + 
                        ((parseInt(this.filteredSubjects.length % this.defaultPageSize) > 0)?1:0);          
        }          
        else if(this.filteredSubjects.length > 0){
          totalPages = 1;
        }          
        return totalPages;
      },

      filteredSubjects: function(){  
        var displaySubjects = [];              
        if(this.searchBy && this.searchBy != ''){
          displaySubjects = this.subjects.filter(sub => 
              (sub.name.toUpperCase().indexOf(this.searchBy.toUpperCase()) !== -1) || 
              (sub.topic.toUpperCase().indexOf(this.searchBy.toUpperCase()) !== -1));
          if(displaySubjects.length <= this.defaultPageSize){
            this.selectedPageNumber = this.defaultPageNumber;
          }          
        }else{
          displaySubjects = this.subjects;
        }       
        
        return displaySubjects;
      },

      displayedSubjects: function(){
        return this.getPaginatedDataSet(this.filteredSubjects, this.selectedPageNumber, this.defaultPageSize);
      }
    }
  });