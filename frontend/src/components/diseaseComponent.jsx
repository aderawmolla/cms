import React from 'react'
export default function DiseaseComponent(props){
 return(
    <tr class="text-gray-500">
    <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">HIV/AIDS</th>
    <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">35</td>
    <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
       <div class="flex items-center">
          <span class="mr-2 text-xs font-medium">30%</span>
          <div class="relative w-full">
             <div class="w-full bg-gray-200 rounded-sm h-2">
                <div class="bg-cyan-600 h-2 rounded-sm" style={{width:"30"}}></div>
             </div>
          </div>
       </div>
    </td>
 </tr>
 );


}