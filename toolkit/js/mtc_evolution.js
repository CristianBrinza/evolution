function mtc_evolution_add_route(add_route_array) {
    console.log(add_route_array);
    let add_route_div = '<div id="mtc_evolution_route">';
    for (let i = 0; i < add_route_array.length; i++) {
        console.log(`Item ${i}: ${add_route_array[i]}`);
        add_route_div +='<a href="'+add_route_array[i][1]+'">'+add_route_array[i][0]+'</a>'

        if(i<=add_route_array.length-2){
             add_route_div +='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3.5L10.25 8L5.75 12.5" stroke="black" stroke-opacity="0.4" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }
    }
    
     add_route_div +='</div>';
            const add_route_pageContent = document.querySelector(".page_content");
            add_route_pageContent.insertAdjacentHTML('afterbegin', add_route_div);
}
