var models = [
    {
        name: 'Yönetim Bilişim Sistemleri Nedir?',
        image: '/web/css/img/slider1.jpg',

    },
    {
        name: 'Ne Diyorlar? Nasıl Bakıyoruz?',
        image: '/web/css/img/slider2.jpg',

    },
    {
        name: 'Teknolojiye Adapte Olmaya Hazır mısın? ',
        image: '/web/css/img/slider3.jpg',

    },
    {
        name: 'İş Zekasında Veri Analiz Araçları',
        image: '/web/css/img/slider4.jpg',

    },
    {
        name: 'Denizbank Şirketinde İlk Staj Deneyimim',
        image: '/web/css/img/slider5.jpg',

    }
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
    duration: '1000',
    random: false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
})


function init(settings) {

    var prev;
    interval = setInterval(function () {

        if (settings.random) {
            // random index
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            prev = index;
        } else {
            // artan index
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    }, settings.duration)


}



function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);
}



