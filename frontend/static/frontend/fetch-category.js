
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


    page_no = 1

    function getByCategories() {
    fetch(`/rss/newsCategory/${category}`, {
        method : "POST",
        body : JSON.stringify({
            "page_no" : page_no
        })
    })
        .then(response => response.json())
        .then(data => {
            
            if (!data['next']) {
                document.querySelector("#more_btn").style.display = 'none';
            }
            
            info = data['feed']
            for ( var i = 0; i < info.length; i ++) { 
              
      
            if (page_no == 1 && i < 4) {
                
                home_head = document.querySelector("#home2-head")
                home_head.innerHTML += `
                <div class="mvp-widget-feat1-bot-story left relative">
                <a href="${info[i]['link']}" rel="nofollow">
                    <div class="mvp-widget-feat1-bot-img left relative">
                        <img width="400" height="240"
                            src="${info[i]['img']}"
                            class="mvp-reg-img lazy wp-post-image" alt="${info[i]['title']}" loading="lazy"
                            srcset="${info[i]['img']} 400w, ${info[i]['img']} 600w, ${info[i]['img']} 300w, ${info[i]['img']} 768w, ${info[i]['img']} 590w, ${info[i]['img']} 1000w"
                            sizes="(max-width: 400px) 100vw, 400px" /> <img width="80"
                            height="80"
                            src="${info[i]['img']}"
                            class="mvp-mob-img lazy wp-post-image" alt="${info[i]['title']}" loading="lazy"
                            srcset="${info[i]['img']} 80w, ${info[i]['img']} 300w, ${info[i]['img']} 100w, ${info[i]['img']} 150w"
                            sizes="(max-width: 80px) 100vw, 80px" />
                    </div>
                </a>
                <!--mvp-widget-feat1-bot-img-->
                <div class="mvp-widget-feat1-bot-text left relative">
                    <div class="mvp-cat-date-wrap left relative">
                    <a href="/category/${info[i]['category']}" rel="bookmark">
                    <span
                        class="mvp-cd-cat left relative">${info[i]['category']}</span></a>
                <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                    </div>
                    <!--mvp-cat-date-wrap-->
                    <a href="${info[i]['link']}" rel="nofollow">
                        <h2>${info[i]['title']}</h2>
                    </a>
                </div>
                <!--mvp-widget-feat1-bot-text-->
            </div>
       
            ` 
            }
            else { 
                page_no += 1
                home_head = document.querySelector("#home-bottom")
              
                home_head.innerHTML += `
                <li class="mvp-blog-story-wrap left relative infinite-post">
                    <div class="mvp-blog-story-out relative">
                        <a href="${info[i]['link']}" rel="nofollow">
                            <div class="mvp-blog-story-img left relative">
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
                            </div>
                        </a>
                        <!--mvp-blog-story-img-->
                        <div class="mvp-blog-story-in">
                            <div class="mvp-blog-story-text left relative">
                                <div class="mvp-cat-date-wrap left relative">
                                    <a href="/category/${info[i]['category']}" rel="bookmark">
                                        <span
                                            class="mvp-cd-cat left relative">${info[i]['category']}</span></a>
                                    <a href="/source/${info[i]['source']}"><span class="mvp-cd-date left relative">${info[i]['source']}</span></a>
                                    <span class="mvp-cd-date left relative">${updateDate(info[i]['pub_date'])}</span>
                                </div>
                                <!--mvp-cat-date-wrap-->
                                <a href="${info[i]['link']}" rel="nofollow">
                                    <h2>${info[i]['title']}</h2>
                                
                                </a>
                            </div>
                            <!--mvp-blog-story-text-->
                        </div>
                        <!--mvp-blog-story-in-->
                    </div>
                    <!--mvp-blog-story-out-->
                    <!-- </a> -->
                </li>
                <!--mvp-blog-story-wrap-->
            
                `
                }
                }
                page_no += 1
        })
    }
    getByCategories()
    // 