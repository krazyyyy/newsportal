    function updateDate(elem) {
        elem = elem.replace("+0100", "")
        elem = elem.replace("+0200", "")
        elem = elem.replace("+0000", "")
        elem = elem.replace("000Z", "")
        elem = elem.replace("Mon", "")
        elem = elem.replace("Tue", "")
        elem = elem.replace("Wed", "")
        elem = elem.replace("Thu", "")
        elem = elem.replace("Fri", "")
        elem = elem.replace("Sun", "")
        elem = elem.replace("Sat", "")
        elem = elem.replace("Jan", "1")
        elem = elem.replace("Feb", "2")
        elem = elem.replace("Apr", "3")
        elem = elem.replace("Mar", "4")
        elem = elem.replace("May", "5")
        elem = elem.replace("Jun", "6")
        elem = elem.replace("Jul", "7")
        elem = elem.replace("Aug", "8")
        elem = elem.replace("Sep", "9")
        elem = elem.replace("Oct", "10")
        elem = elem.replace("Nov", "11")
        elem = elem.replace("Dec", "12")
        elem = elem.replaceAll(" ", "/")
        elem = elem.replace("/01:", " 01:")
        elem = elem.replace("/02:", " 02:")
        elem = elem.replace("/03:", " 03:")
        elem = elem.replace("/04:", " 04:")
        elem = elem.replace("/05:", " 05:")
        elem = elem.replace("/06:", " 06:")
        elem = elem.replace("/07:", " 07:")
        elem = elem.replace("/08:", " 08:")
        elem = elem.replace("/09:", " 09:")
        elem = elem.replace("/10:", " 10:")
        elem = elem.replace("/11:", " 11:")
        elem = elem.replace("/12:", " 12:")
        elem = elem.replace("/13:", " 13:")
        elem = elem.replace("/14:", " 14:")
        elem = elem.replace("/15:", " 15:")
        elem = elem.replace("/16:", " 16:")
        elem = elem.replace("/17:", " 17:")
        elem = elem.replace("/18:", " 18:")
        elem = elem.replace("/19:", " 19:")
        elem = elem.replace("/20:", " 20:")
        elem = elem.replace("/21:", " 21:")
        elem = elem.replace("/22:", " 22:")
        elem = elem.replace("/23:", " 23:")
        elem = elem.replace("/24:", " 24:")
        elem = elem.slice(2, -1)

        return elem
    }


    fetch(`rss/getNewsCategory/5/Lifestyle`)
        .then(response => response.json())
        .then(data => {
            info = data['feed']
            show_one = document.querySelector("#show-section-one")
            show_two = document.querySelector("#show-section-two")
            for (var i = 0; i < info.length; i++) {
                if (i == 0) {
                    show_one.innerHTML += `
           
                    <div class="mvp-widget-dark-feat left relative">
                        <div class="mvp-widget-dark-feat-img left relative">
                        <a href="${info[i]['link']}" rel="nofolkow">
                            <img width="1000" height="600"
                                src="${info[i]['img']}"
                                class="mvp-reg-img lazy wp-post-image" alt="${info[i]['title']}" loading="lazy"
                                srcset="${info[i]['img']} 1000w, ${info[i]['img']} 600w, ${info[i]['img']} 300w, ${info[i]['img']} 768w, ${info[i]['img']} 590w, ${info[i]['img']} 400w"
                                sizes="(max-width: 1000px) 100vw, 1000px" /> <img
                                width="400" height="240"
                                src="${info[i]['img']}"
                                class="mvp-mob-img lazy wp-post-image" alt="" loading="lazy"
                                srcset="${info[i]['img']} 400w, ${info[i]['img']} 600w, ${info[i]['img']} 300w, ${info[i]['img']} 768w, ${info[i]['img']} 590w, ${info[i]['img']} 1000w"
                                sizes="(max-width: 400px) 100vw, 400px" />
                            </a>
                            <div class="mvp-vid-box-wrap mvp-vid-marg">
                                <i class="fa fa-2 fa-camera" aria-hidden="true"></i>
                            </div>
                            <!--mvp-vid-box-wrap-->
                        </div>
                        <!--mvp-widget-dark-feat-img-->
                        <div class="mvp-widget-dark-feat-text left relative">
                            <div class="mvp-cat-date-wrap left relative">
                                <span
                                    class="mvp-cd-cat left relative">${info[i]['category']}</span>
                                    <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                    <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                            </div>
                            <!--mvp-cat-date-wrap-->
                             <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                        </div>
                        <!--mvp-widget-dark-feat-text-->
                    </div>
                    <!--mvp-widget-dark-feat-->
                
                `
                } else {
                    show_two.innerHTML += `
            
                <div class="mvp-widget-dark-sub left relative">
                    <div class="mvp-widget-dark-sub-out right relative">
                        <div class="mvp-widget-dark-sub-img left relative">
                        <a href="${info[i]['link']}" rel="nofollow">
                            <img width="400" height="240"
                                src="${info[i]['img']}"
                                class="mvp-reg-img lazy wp-post-image" alt="${info[i]['title']}"
                                loading="lazy"
                                srcset="${info[i]['img']} 400w, ${info[i]['img']} 600w, ${info[i]['img']} 300w, ${info[i]['img']} 768w, ${info[i]['img']} 590w, ${info[i]['img']} 1000w"
                                sizes="(max-width: 400px) 100vw, 400px" /> <img
                                width="80" height="80"
                                src="${info[i]['img']}"
                                class="mvp-mob-img lazy wp-post-image" alt="${info[i]['title']}"
                                loading="lazy"
                                srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                sizes="(max-width: 80px) 100vw, 80px" />
                            </a>
                            <div
                                class="mvp-vid-box-wrap mvp-vid-box-small mvp-vid-marg-small">
                                <i class="fa fa-2 fa-camera" aria-hidden="true"></i>
                            </div>
                            <!--mvp-vid-box-wrap-->
                        </div>
                        <!--mvp-widget-dark-sub-img-->
                        <div class="mvp-widget-dark-sub-in">
                            <div class="mvp-widget-dark-sub-text left relative">
                                <div class="mvp-cat-date-wrap left relative">
                                    <span
                                        class="mvp-cd-cat left relative">${info[i]['category']}</span>
                                        <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                        <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                </div>
                                <!--mvp-cat-date-wrap-->
                                 <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                            </div>
                            <!--mvp-widget-dark-sub-text-->
                        </div>
                        <!--mvp-widget-dark-sub-in-->
                    </div>
                    <!--mvp-widget-dark-sub-out-->
                </div>
                <!--mvp-widget-dark-sub-->
   
            `
                }
            }
        })

    fetch(`rss/getNewsCategory/7/biznis`)
        .then(response => response.json())
        .then(data => {
            info = data['feed']
            bz_one = document.querySelector("#biznis-section-one")
            bz_two = document.querySelector("#biznis-section-two")
            bz_three = document.querySelector("#biznis-section-three")
            for (var i = 0; i < info.length; i++) {
                if (i < 1) {
                    bz_one.innerHTML += `
                   <div class="mvp-widget-feat2-left-cont left relative">
                        <div class="mvp-feat1-feat-img left relative">
                        <a href="${info[i]['link']}" rel="nofollow">
                            <img width="560" height="600"
                                src="${info[i]['img']}"
                                class="attachment-mvp-port-thumb size-mvp-port-thumb wp-post-image"
                                alt="${info[i]['title']}" loading="lazy" />
                            </a>
                            <div class="mvp-vid-box-wrap mvp-vid-marg">
                                <i class="fa fa-2 fa-camera" aria-hidden="true"></i>
                            </div>
                            <!--mvp-vid-box-wrap-->
                        </div>
                        <!--mvp-feat1-feat-img-->
                        <div class="mvp-feat1-feat-text left relative">
                            <div class="mvp-cat-date-wrap left relative">
                                <a href="/category/${info[i]['category']}"> <span class="mvp-cd-cat left relative">${info[i]['category']}</span></a>
                                <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                            </div>
                            <!--mvp-cat-date-wrap-->
                            <a href="${info[i]['link']}" rel="nofollow">
                            <h2>${info[i]['title']}</h2></a>
                        </div>
                        <!--mvp-feat1-feat-text-->
                    </div>
                    <!--mvp-widget-feat2-left-cont-->
           
                `
                } else if (i > 1 && i < 4) {
                    bz_two.innerHTML += `
              
                    <div class="mvp-widget-feat2-right-cont left relative">
                        <div class="mvp-widget-feat2-right-img left relative">
                        <a href="${info[i]['link']}" rel="nofollow">
                            <img width="400" height="240"
                                src="${info[i]['img']}"
                                class="mvp-reg-img lazy wp-post-image" alt="${info[i]['title']}"
                                loading="lazy"
                                srcset="${info[i]['img']} 400w, ${info[i]['img']} 600w, ${info[i]['img']} 300w, ${info[i]['img']} 768w, ${info[i]['img']} 590w, ${info[i]['img']} 1000w"
                                sizes="(max-width: 400px) 100vw, 400px" /> <img
                                width="80" height="80"
                                src="${info[i]['img']}"
                                class="mvp-mob-img lazy wp-post-image" alt="${info[i]['title']}"
                                loading="lazy"
                                srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                sizes="(max-width: 80px) 100vw, 80px" />
                            </a>
                        </div>
                        <!--mvp-widget-feat2-right-img-->
                        <div class="mvp-widget-feat2-right-text left relative">
                            <div class="mvp-cat-date-wrap left relative">
                                <a href="/category/${info[i]['category']}"> <span class="mvp-cd-cat left relative">${info[i]['category']}</span></a>
                                <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                            </div>
                            <!--mvp-cat-date-wrap-->
                             <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                        </div>
                        <!--mvp-widget-feat2-right-text-->
                    </div>
                    <!--mvp-widget-feat2-right-cont-->
            
                `
                } else {
                    bz_three.innerHTML += `
      
                    <div class="mvp-feat1-list-cont left relative">
                        <div class="mvp-feat1-list-out relative">
                            <div class="mvp-feat1-list-img left relative">
                            <a href="${info[i]['link']}" rel="nofollow">
                                <img width="80" height="80"
                                    src="${info[i]['img']}"
                                    class="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image"
                                    alt="${info[i]['title']}" loading="lazy"
                                    srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                    sizes="(max-width: 80px) 100vw, 80px" />
                                </a>
                            </div>
                            <!--mvp-feat1-list-img-->
                            <div class="mvp-feat1-list-in">
                                <div class="mvp-feat1-list-text">
                                    <div class="mvp-cat-date-wrap left relative">
                                        <a href="/category/${info[i]['category']}"> <span class="mvp-cd-cat left relative">${info[i]['category']}</span></a>
                                        <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                        <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                    </div>
                                    <!--mvp-cat-date-wrap-->
                                     <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                                </div>
                                <!--mvp-feat1-list-text-->
                            </div>
                            <!--mvp-feat1-list-in-->
                        </div>
                        <!--mvp-feat1-list-out-->
                    </div>
                    <!--mvp-feat1-list-cont-->
            
                `

                }
            }
        })

    fetch(`rss/getNewsCategory/6/Tehnologija`)
        .then(response => response.json())
        .then(data => {
            info = data['feed']
            tech_one = document.querySelector("#Tehnologija-one-section")
            tech_two = document.querySelector("#Tehnologija-two-section")
            tech_three = document.querySelector("#Tehnologija-three-section")
            for (var i = 0; i < info.length; i++) {
                if (i < 1) {
                    tech_one.innerHTML += `
            
                        <div class="mvp-widget-feat2-left-cont left relative">
                            <div class="mvp-feat1-feat-img left relative">
                            <a href="${info[i]['link']}" rel="nofollow">
                                <img width="560" height="600"
                                    src="${info[i]['img']}"
                                    class="attachment-mvp-port-thumb size-mvp-port-thumb wp-post-image"
                                    alt="${info[i]['title']}" loading="lazy" />
                                </a>
                            </div>
                            <!--mvp-feat1-feat-img-->
                            <div class="mvp-feat1-feat-text left relative">
                                <div class="mvp-cat-date-wrap left relative">
                                    <span
                                        class="mvp-cd-cat left relative">${info[i]['category']}</span>
                                        <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                        <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                </div>
                                <!--mvp-cat-date-wrap-->
                                 <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                                
                            </div>
                            <!--mvp-feat1-feat-text-->
                        </div>
                        <!--mvp-widget-feat2-left-cont-->
                  
                `
                } else if (i > 1 && i < 4) {
                    tech_two.innerHTML += `
               
                            <div class="mvp-widget-feat2-right-cont left relative">
                                <div class="mvp-widget-feat2-right-img left relative">
                                <a href="${info[i]['link']}" rel="nofollow">
                                    <img width="400" height="240"
                                        src="${info[i]['img']}"
                                        class="mvp-reg-img lazy wp-post-image" alt="${info[i]['title']}"
                                        loading="lazy"
                                        srcset="${info[i]['img']} 400w, ${info[i]['img']} 600w, ${info[i]['img']} 300w, ${info[i]['img']} 768w, ${info[i]['img']} 590w, ${info[i]['img']} 1000w"
                                        sizes="(max-width: 400px) 100vw, 400px" /> <img
                                        width="80" height="80"
                                        src="${info[i]['img']}"
                                        class="mvp-mob-img lazy wp-post-image" alt="${info[i]['title']}"
                                        loading="lazy"
                                        srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                        sizes="(max-width: 80px) 100vw, 80px" />
                                    </a>
                                    <div class="mvp-vid-box-wrap mvp-vid-box-mid">
                                        <i class="fa fa-2 fa-camera" aria-hidden="true"></i>
                                    </div>
                                    <!--mvp-vid-box-wrap-->
                                </div>
                                <!--mvp-widget-feat2-right-img-->
                                <div class="mvp-widget-feat2-right-text left relative">
                                    <div class="mvp-cat-date-wrap left relative">
                                        <span
                                            class="mvp-cd-cat left relative">${info[i]['category']}</span>
                                            <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                            <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                    </div>
                                    <!--mvp-cat-date-wrap-->
                                    <h2>${info[i]['title']}
                                    </h2>
                                </div>
                                <!--mvp-widget-feat2-right-text-->
                            </div>
                            <!--mvp-widget-feat2-right-cont-->
               
                    `
                } else {
                    tech_three.innerHTML += `

                        <div class="mvp-feat1-list-cont left relative">
                            <div class="mvp-feat1-list-out relative">
                                <div class="mvp-feat1-list-img left relative">
                                <a href="${info[i]['link']}" rel="nofollow">
                                    <img width="80" height="80"
                                        src="${info[i]['img']}"
                                        class="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image"
                                        alt="${info[i]['title']}" loading="lazy"
                                        srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                        sizes="(max-width: 80px) 100vw, 80px" />
                                </a>
                                </div>
                                <!--mvp-feat1-list-img-->
                                <div class="mvp-feat1-list-in">
                                    <div class="mvp-feat1-list-text">
                                        <div class="mvp-cat-date-wrap left relative">
                                            <a href="/category/${info[i]['category']}"> <span class="mvp-cd-cat left relative">${info[i]['category']}</span></a>
                                            <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                            <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                        </div>
                                        <!--mvp-cat-date-wrap-->
                                         <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                                    </div>
                                    <!--mvp-feat1-list-text-->
                                </div>
                                <!--mvp-feat1-list-in-->
                            </div>
                            <!--mvp-feat1-list-out-->
                        </div>
                        <!--mvp-feat1-list-cont-->
                    
                    `
                }
            }
        })
    fetch(`rss/getNewsCategory/12/vijesti`)
        .then(response => response.json())
        .then(data => {
            info = data['feed']
            lat_one = document.querySelector("#latest-one")
            lat_two = document.querySelector("#latest-two")
            lat_three = document.querySelector("#latest-three")
            for (var i = 0; i < info.length; i++) {
                if (i < 1) {
                    lat_one.innerHTML += `
        
                        <div class="mvp-feat5-mid-main left relative">
                            <div class="mvp-feat5-mid-main-img left relative">
                                <img width="590" height="354"
                                    src="${info[i]['img']}"
                                    class="mvp-reg-img wp-post-image" alt="${info[i]['title']}" loading="lazy"
                                    srcset="${info[i]['img']} 590w, ${info[i]['img']} 600w, ${info[i]['img']} 300w, ${info[i]['img']} 768w, ${info[i]['img']} 1024w, ${info[i]['img']} 1000w, ${info[i]['img']} 400w, ${info[i]['img']} 1600w"
                                    sizes="(max-width: 590px) 100vw, 590px" /> <img width="560"
                                    height="600"
                                    src="${info[i]['img']}"
                                    class="mvp-mob-img wp-post-image" alt="${info[i]['title']}" loading="lazy" />
                                <div class="mvp-vid-box-wrap mvp-vid-marg">
                                    <i class="fa fa-2 fa-camera" aria-hidden="true"></i>
                                </div>
                                <!--mvp-vid-box-wrap-->
                            </div>
                            <!--mvp-feat5-mid-main-img-->
                            <div class="mvp-feat5-mid-main-text left relative">
                                <div class="mvp-cat-date-wrap left relative">
                                    <a href="/category/${info[i]['category']}"> <span class="mvp-cd-cat left relative">${info[i]['category']}</span></a>
                                    <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                    <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                </div>
                                <!--mvp-cat-date-wrap-->
                                 <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                                 
                                
                            </div>
                            <!--mvp-feat5-mid-main-text-->
                        </div>
                        <!--mvp-feat5-mid-main-->
                    `
                } else if (i > 1 && i < 5) {
                    lat_two.innerHTML += `
                    
                        <div class="mvp-feat5-mid-sub-story left relative">
                            <div class="mvp-feat5-mid-sub-out right relative">
                                <div class="mvp-feat5-mid-sub-img left relative">
                                <a href="${info[i]['link']}" rel="nofollow">
                                    <img width="400" height="240"
                                        src="${info[i]['img']}"
                                        class="mvp-reg-img wp-post-image" alt="${info[i]['title']}"
                                        loading="lazy"
                                        srcset="${info[i]['img']} 400w, ${info[i]['img']} 600w, ${info[i]['img']} 300w, ${info[i]['img']} 768w, ${info[i]['img']} 590w, ${info[i]['img']} 1000w"
                                        sizes="(max-width: 400px) 100vw, 400px" /> <img
                                        width="80" height="80"
                                        src="${info[i]['img']}"
                                        class="mvp-mob-img wp-post-image" alt="${info[i]['title']}"
                                        loading="lazy"
                                        srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                        sizes="(max-width: 80px) 100vw, 80px" />
                                    </a>
                                </div>
                                <!--mvp-feat5-mid-sub-img-->
                                <div class="mvp-feat5-mid-sub-in">
                                    <div class="mvp-feat5-mid-sub-text left relative">
                                        <div class="mvp-cat-date-wrap left relative">
                                            <a rel="bookmark href="/category/${info[i]['category']}"><span class="mvp-cd-cat left relative">${info[i]['category']}</span></a>
                                            <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                            <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                        </div>
                                        <!--mvp-cat-date-wrap-->
                                        <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                                    </div>
                                    <!--mvp-feat5-mid-sub-text-->
                                </div>
                                <!--mvp-feat5-mid-sub-in-->
                            </div>
                            <!--mvp-feat5-mid-sub-out-->
                        </div>
                        <!--mvp-feat5-mid-sub-story-->
                
                    `
                }
                else {
                    lat_three.innerHTML += `
                    
                    <div class="mvp-feat1-list-cont left relative">
                        <div class="mvp-feat1-list-out relative">
                            <div class="mvp-feat1-list-img left relative">
                            <a href="${info[i]['link']}" rel="nofollow">
                                <img width="80" height="80"
                                    src="${info[i]['img']}"
                                    class="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image"
                                    alt="${info[i]['title']}" loading="lazy"
                                    srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                    sizes="(max-width: 80px) 100vw, 80px" />
                                </a>
                            </div>
                            <!--mvp-feat1-list-img-->
                            <div class="mvp-feat1-list-in">
                                <div class="mvp-feat1-list-text">
                                    <div class="mvp-cat-date-wrap left relative">
                                        <a href="/category/${info[i]['category']}"> <span class="mvp-cd-cat left relative">${info[i]['category']}</span></a>
                                        <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                        <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                    </div>
                                    <!--mvp-cat-date-wrap-->
                                     <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                                </div>
                                <!--mvp-feat1-list-text-->
                            </div>
                            <!--mvp-feat1-list-in-->
                        </div>
                        <!--mvp-feat1-list-out-->
                    </div>
                    <!--mvp-feat1-list-cont-->
       
                        
                    `
                }
            }
        })

  
    fetch(`rss/getNewsCategory/6/sport`)
        .then(response => response.json())
        .then(data => {
            info = data['feed']
            sport_head = document.querySelector("#sport-head")
            sport_bottom = document.querySelector("#sport-bottom")
            for (var i = 0; i < info.length; i++) {
                if (i < 2) {

                    sport_head.innerHTML += `
                
                        <div class="mvp-widget-feat1-top-story left relative">
                        <a href="${info[i]['link']}" rel="nofollow">    
                            <div class="mvp-widget-feat1-top-img left relative">
                            <img width="590" height="354"
                                src="${info[i]['img']}"
                                class="mvp-reg-img wp-post-image" alt="${info[i]['title']}" loading="lazy"
                                srcset="${info[i]['img']} 590w, ${info[i]['img']} 600w, ${info[i]['img']} 300w, ${info[i]['img']} 768w, ${info[i]['img']} 1024w, ${info[i]['img']} 1000w, ${info[i]['img']} 400w, ${info[i]['img']} 1600w"
                                sizes="(max-width: 590px) 100vw, 590px" /> <img width="560"
                                height="600"
                                src="${info[i]['img']}"
                                class="mvp-mob-img wp-post-image" alt="${info[i]['title']}" loading="lazy" />
                                </div>
                                </a>
                    
                            <div class="mvp-widget-feat1-top-text left relative">
                                <div class="mvp-cat-date-wrap left relative">

                                    <a href="/category/${info[i]['category']}"><span class="mvp-cd-cat left relative">${info[i]['category']} </span></a>
                                    <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative"> ${info[i]['source']}</span></a>
                                    <span class="mvp-cd-date left relative"> ${updateDate(info[i]['pub_date'])}</span>
                                </div>
                                <!--mvp-cat-date-wrap-->
                                 <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                            </div>
                            <!--mvp-widget-feat1-top-text-->
                        </div>
                        <!--mvp-widget-feat1-top-story-->
           
                    
                    `
                } else {
                    sport_bottom.innerHTML += `
                    <div class="mvp-widget-feat1-bot-story left relative">
                        <div class="mvp-widget-feat1-bot-img left relative">
                        <a href="${info[i]['link']}" rel="nofollow">
                    
                        <img width="400" height="240"
                            src="${info[i]['img']}"
                            class="attachment-mvp-mid-thumb size-mvp-mid-thumb wp-post-image"
                            alt="${info[i]['title']}" loading="lazy"
                            srcset="${info[i]['img']} 400w, ${info[i]['img']} 600w, ${info[i]['img']} 300w, ${info[i]['img']} 768w, ${info[i]['img']} 590w, ${info[i]['img']} 1000w"
                            sizes="(max-width: 400px) 100vw, 400px" />
                        </a>
                            <div class="mvp-vid-box-wrap mvp-vid-box-mid">
                                <i class="fa fa-2 fa-camera" aria-hidden="true"></i>
                            </div>
                            <!--mvp-vid-box-wrap-->
                        </div>
                        <!--mvp-widget-feat1-bot-img-->
                        <div class="mvp-widget-feat1-bot-text left relative">
                            <div class="mvp-cat-date-wrap left relative">
                            <a href="/category/${info[i]['category']}"><span class="mvp-cd-cat left relative">${info[i]['category']} </span></a>
                            <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative"> ${info[i]['source']}</span></a>
                                <span class="mvp-cd-date left relative"> ${updateDate(info[i]['pub_date'])}</span>
                            </div>
                            <!--mvp-cat-date-wrap-->
                             <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                        </div>
                        <!--mvp-widget-feat1-bot-text-->
                    </div>
                    <!--mvp-widget-feat1-bot-story-->
     `
                }
            }
        })



    fetch(`rss/getNewsCategory/32/Vijesti`)
        .then(response => response.json())
        .then(data => {
            info = data['feed']
            footer_news = document.querySelector("#footer-news-vijesti")
            footer_news_two = document.querySelector("#footer-news-vijesti-two")
            for (var i = 12; i < info.length; i++) {
                if (i < 24) {
                footer_news.innerHTML += `
            <li class="mvp-blog-story-wrap left relative infinite-post">
                <a href="${info[i]['link']}" rel="bookmark">
                    <div class="mvp-blog-story-out relative">
                        <div class="mvp-blog-story-img left relative">
                            <img width="400" height="240"
                                src="${info[i]['img']}"
                                class="mvp-reg-img lazy wp-post-image" alt="${info[i]['title']}"
                                loading="lazy"
                                srcset="${info[i]['img']} 400w, ${info[i]['img']} 600w, ${info[i]['img']}, ${info[i]['img']} 768w, h${info[i]['img']} 590w, ${info[i]['img']} 1000w"
                                sizes="(max-width: 400px) 100vw, 400px" /> <img
                                width="80" height="80"
                                src="${info[i]['img']}"
                                class="mvp-mob-img lazy wp-post-image" alt="${info[i]['title']}"
                                loading="lazy"
                                srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                sizes="(max-width: 80px) 100vw, 80px" />
                        </div>
                        <!--mvp-blog-story-img-->
                        <div class="mvp-blog-story-in">
                            <div class="mvp-blog-story-text left relative">
                                <div class="mvp-cat-date-wrap left relative">
                                    <span
                                        class="mvp-cd-cat left relative">${info[i]['category']}</span>
                                        <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                        <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                </div>
                                <!--mvp-cat-date-wrap-->
                                 <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                                 </div>
                            <!--mvp-blog-story-text-->
                        </div>
                        <!--mvp-blog-story-in-->
                    </div>
                    <!--mvp-blog-story-out-->
                </a>
            </li>
`
                }
            else {
                footer_news_two.innerHTML += `
                <div class="mvp-feat1-list-cont left relative">
                <div class="mvp-feat1-list-out relative">
                    <a href="#" rel="bookmark">
                        <div class="mvp-feat1-list-img left relative">
                            <img width="80" height="80"
                                src="${info[i]['img']}"
                                class="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image"
                                alt="${info[i]['title']}" loading="lazy"
                                srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                sizes="(max-width: 80px) 100vw, 80px" />
                        </div>
                    </a>
                    <!--mvp-feat1-list-img-->
                    <div class="mvp-feat1-list-in">
                        <div class="mvp-feat1-list-text">
                            <div class="mvp-cat-date-wrap left relative">
                                <a href="/category/${info[i]['category']}">
                                    <span
                                        class="mvp-cd-cat left relative">${info[i]['category']}
                                        </span></a>
                                <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                            </div>
                            <!--mvp-cat-date-wrap-->
                            <a href="${info[i]['link']}" rel="nofollow">
                                <h2>${info[i]['title']}</h2>
                            </a>
                        </div>
                        <!--mvp-feat1-list-text-->
                    </div>
                    <!--mvp-feat1-list-in-->
                </div>
                <!--mvp-feat1-list-out-->
            </div>
                `
            }

            }
        })
    fetch(`rss/getNewsCategory/25/Sport`)
        .then(response => response.json())
        .then(data => {
            info = data['feed']
            footer_news = document.querySelector("#footer-news-sport")
            footer_news_two = document.querySelector("#footer-news-sport-two")
            for (var i = 5; i < info.length; i++) {
                if (i < 17) {
                footer_news.innerHTML += `
            <li class="mvp-blog-story-wrap left relative infinite-post">
                <a href="${info[i]['link']}" rel="bookmark">
                    <div class="mvp-blog-story-out relative">
                        <div class="mvp-blog-story-img left relative">
                            <img width="400" height="240"
                                src="${info[i]['img']}"
                                class="mvp-reg-img lazy wp-post-image" alt="${info[i]['title']}"
                                loading="lazy"
                                srcset="${info[i]['img']} 400w, ${info[i]['img']} 600w, ${info[i]['img']}, ${info[i]['img']} 768w, h${info[i]['img']} 590w, ${info[i]['img']} 1000w"
                                sizes="(max-width: 400px) 100vw, 400px" /> <img
                                width="80" height="80"
                                src="${info[i]['img']}"
                                class="mvp-mob-img lazy wp-post-image" alt="${info[i]['title']}"
                                loading="lazy"
                                srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                sizes="(max-width: 80px) 100vw, 80px" />
                        </div>
                        <!--mvp-blog-story-img-->
                        <div class="mvp-blog-story-in">
                            <div class="mvp-blog-story-text left relative">
                                <div class="mvp-cat-date-wrap left relative">
                                    <span
                                        class="mvp-cd-cat left relative">${info[i]['category']}</span>
                                        <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                        <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                </div>
                                <!--mvp-cat-date-wrap-->
                                 <a href="${info[i]['link']}" rel="nofollow"><h2>${info[i]['title']}</h2></a>
                                 </div>
                            <!--mvp-blog-story-text-->
                        </div>
                        <!--mvp-blog-story-in-->
                    </div>
                    <!--mvp-blog-story-out-->
                </a>
            </li>
`
                }
            else {
                footer_news_two.innerHTML += `
                <div class="mvp-feat1-list-cont left relative">
                <div class="mvp-feat1-list-out relative">
                    <a href="#" rel="bookmark">
                        <div class="mvp-feat1-list-img left relative">
                            <img width="80" height="80"
                                src="${info[i]['img']}"
                                class="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image"
                                alt="${info[i]['title']}" loading="lazy"
                                srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                sizes="(max-width: 80px) 100vw, 80px" />
                        </div>
                    </a>
                    <!--mvp-feat1-list-img-->
                    <div class="mvp-feat1-list-in">
                        <div class="mvp-feat1-list-text">
                            <div class="mvp-cat-date-wrap left relative">
                                <a href="/category/${info[i]['category']}">
                                    <span
                                        class="mvp-cd-cat left relative">${info[i]['category']}
                                        </span></a>
                                <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                            </div>
                            <!--mvp-cat-date-wrap-->
                            <a href="${info[i]['link']}" rel="nofollow">
                                <h2>${info[i]['title']}</h2>
                            </a>
                        </div>
                        <!--mvp-feat1-list-text-->
                    </div>
                    <!--mvp-feat1-list-in-->
                </div>
                <!--mvp-feat1-list-out-->
            </div>
                `
            }

            }
        })



    fetch(`/rss/randomNews/6`)
        .then(response => response.json())
        .then(data => {
            info = data['feed']
            lat_one = document.querySelector("#random-one-head")
            lat_two = document.querySelector("#random-two-head")
            for (var i = 0; i < info.length; i++) {
                if (i < 1) {
                    lat_one.innerHTML += `
                    <a href="${info[i]['link']}" rel="nofollow">
                        <div class="mvp-feat5-small-main left relative">
                            <div class="mvp-feat5-small-main-img left relative">
                                <img width="400" height="240"
                                    src="${info[i]['img']}"
                                    class="attachment-mvp-mid-thumb size-mvp-mid-thumb wp-post-image"
                                    alt="${info[i]['title']}" loading="lazy"
                                    srcset="${info[i]['img']} 400w, ${info[i]['img']} 600w, ${info[i]['img']} 300w, ${info[i]['img']} 768w, ${info[i]['img']} 590w, ${info[i]['img']} 1000w"
                                    sizes="(max-width: 400px) 100vw, 400px" />
                            </div>
                            <!--mvp-feat5-small-main-img-->
                            <div class="mvp-feat5-small-main-text left relative">
                                <div class="mvp-cat-date-wrap left relative">
                                    <a href="/category/${info[i]['category']}"> <span class="mvp-cd-cat left relative">${info[i]['category']}</span></a>
                                    <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                    <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>

                                </div>
                                <!--mvp-cat-date-wrap-->
                                <h2>${info[i]['title']}
                                </h2>
                                
                            </div>
                            <!--mvp-feat5-small-main-text-->
                        </div>
                        <!--mvp-feat5-small-main-->
                                </a>
                    `
                } else {
                    lat_two.innerHTML += `
                    <a href="${info[i]['link']}" rel="nofollow">
                        <div class="mvp-feat1-list-cont left relative">
                            <div class="mvp-feat1-list-out relative">
                                <div class="mvp-feat1-list-img left relative">
                                    <img width="80" height="80"
                                        src="${info[i]['img']}"
                                        class="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image"
                                        alt="${info[i]['title']}" loading="lazy"
                                        srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                                        sizes="(max-width: 80px) 100vw, 80px" />
                                </div>
                                <!--mvp-feat1-list-img-->
                                <div class="mvp-feat1-list-in">
                                    <div class="mvp-feat1-list-text">
                                        <div class="mvp-cat-date-wrap left relative">
                                            <a href="/category/${info[i]['category']}"> <span class="mvp-cd-cat left relative">${info[i]['category']}</span></a>
                                            <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                            <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                        </div>
                                        <!--mvp-cat-date-wrap-->
                                        <h2>${info[i]['title']}
                                        </h2>
                                    </div>
                                    <!--mvp-feat1-list-text-->
                                </div>
                                <!--mvp-feat1-list-in-->
                            </div>
                            <!--mvp-feat1-list-out-->
                        </div>
                        <!--mvp-feat1-list-cont-->
                    </a>
                    `
                }
            }
        })

    function getByCategory(cat) {
        fetch(`rss/getNewsCategory/4/${cat}`)
            .then(response => response.json())
            .then(data => {
                info = data['feed']
                home_head = document.querySelector("#news_feed_main")
                home_head.innerHTML = ""
                for (var i = 0; i < info.length; i++) {
                    home_head.innerHTML += `
            <div class="col-md-6 col-sm-6 space-30">
                        <div class="post-item ver4 overlay-v2 cat-4" style="height: 210px; overflow: hidden;">
                            <a rel="nowfollow" class="images" href="${info[i]['link']}" title="${info[i]['title']}" alt="${info[i]['title']}"><img class='img-responsive' src="${info[i]['img']}" alt="${info[i]['title']}"></a>
                         
                        </div>
                        <div>
                            <a rel="nowfollow" class="wrap dsg" href="${info[i]['link']}"><h4>${info[i]['title']}</h4></a>
                            <small class="wrap" class="date"> <a id="no-style-link" href="/source/${info[i]['source']}"> ${info[i]['source']} </a> | <a id="no-style-link" href="/category/${info[i]['category']}"> ${info[i]['category']} </a> |  ${updateDate(info[i]['pub_date'])} </small>
                        </div>
                        <!-- End item -->
                    </div>
            `
                }
            })
    }


    function randomCategory() {
        fetch(`/rss/randomNews/4`)
            .then(response => response.json())
            .then(data => {
                info = data['feed']
                home_head = document.querySelector("#news_feed_main")
                home_head = ""
                for (var i = 0; i < info.length; i++) {
                    home_head.innerHTML += `
            <div class="col-md-6 col-sm-6 space-30">
                        <div class="post-item ver4 overlay-v2 cat-4" style="height: 210px; overflow: hidden;">
                            <a rel="nowfollow" class="images" href="${info[i]['link']}" title="${info[i]['title']}" alt="${info[i]['title']}"><img class='img-responsive' src="${info[i]['img']}" alt="${info[i]['title']}"></a>
                         
                        </div>
                        <div>
                            <a rel="nowfollow" class="wrap dsg" href="${info[i]['link']}"><h4>${info[i]['title']}</h4></a>
                            <small class="wrap" class="date"> <a id="no-style-link" href="/source/${info[i]['source']}"> ${info[i]['source']} </a> | <a id="no-style-link" href="/category/${info[i]['category']}"> ${info[i]['category']} </a> |  ${updateDate(info[i]['pub_date'])}</small>
                        </div>
                        <!-- End item -->
                    </div>
            `
                }
            })
    }