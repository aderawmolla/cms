


// import React from 'react'
// export default Resolve(){
//     return( <>


//         const [searchText, setSearchText] = useState('');
//         const [searchResults, setSearchResults] = useState([]);
//         const [posts, setPosts] = useState(doctors);
//         const [loading, setLoading] = useState(false);
//         const [currentPage, setCurrentPage] = useState(1);
//         const [postsPerPage] = useState(5);
      
//         const indexOfLastPost = currentPage * postsPerPage;
//         const indexOfFirstPost = indexOfLastPost - postsPerPage;
//         const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
      
//         // Change page
//         const paginate = (pageNumber) => setCurrentPage(pageNumber);
      
//         const totalPages = Math.ceil(posts.length / postsPerPage);
      
//         const getPageNumbers = () => {
//           const pageNumbers = [];
//           const maxPageNumbers = 5; // Change this to adjust the number of page numbers to display
//           let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
//           let endPage = startPage + maxPageNumbers - 1;
      
//           if (endPage > totalPages) {
//             endPage = totalPages;
//             startPage = Math.max(1, endPage - maxPageNumbers + 1);
//             // pageNumbers.pop('...');
//           }
      
//           for (let i = startPage; i <= endPage; i++) {
//             pageNumbers.push(i);
//           }
      
//           if (startPage > 1) {
//             pageNumbers.unshift("...");
//             pageNumbers.unshift(1);
//           }
      
//           if (endPage < totalPages) {
//             pageNumbers.push("...");
//             pageNumbers.push(totalPages);
//           }
      
//           return pageNumbers;
//         };
      
        
      
//         //prev page
//         const handlePrevPage = () => {
//           if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//           }
//         };
      
//         //next page
//         const handleNextPage = () => {
//           if (currentPage < Math.ceil(posts.length / postsPerPage)) {
//             setCurrentPage(currentPage + 1);
//           }
//         };
      
      
//         const handleSearch = (e) => {
//           e.preventDefault();
//           const results = doctors.filter((doctor) => {
//             const searchQuery = searchText.toLowerCase();
//             const fullName = `${doctor.firstName} ${doctor.lastName}`.toLowerCase();
//             const id = doctor.id.toLowerCase();
            
//             return (
//               fullName.includes(searchQuery) ||
//               id.includes(searchQuery)
//             );
//           });
//           setSearchResults(results);
//         };
      
        
      
       
//         useEffect(() => {
//           console.log(searchResults)
//           console.log(posts)
//         },[searchResults])


//         ////////////////////
//         <form class="flex w-full items-center" onSubmit={handleSearch}>
//             <label for="voice-search" class="sr-only">Search</label>
//             <div class="relative w-full">
//               <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//                 <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
//               </div>
//               <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search doctors " 
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//                 required  />

//             </div>
//             <button onClick={handleSearch} type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>
//           </form>

//     </>
    
    
//     );
// }