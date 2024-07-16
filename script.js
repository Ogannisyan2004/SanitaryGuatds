function toggleDetails(id) {
    $('#' + id).toggle();
}

window.addEventListener('scroll', function () {
    var backToTopButton = document.getElementById('backToTopButton');
    if (window.pageYOffset > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// окно для выбора приложения
document.addEventListener('DOMContentLoaded', function () {
    var phoneLinks = document.querySelectorAll('.phone-link');
    
    phoneLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        var phoneNumber = event.currentTarget.getAttribute('data-phone');
        
        document.getElementById('viberLink').href = 'viber://chat?number=' + phoneNumber;
        document.getElementById('whatsappLink').href = 'https://wa.me/' + phoneNumber;
        document.getElementById('telegramLink').href = 'tg://resolve?phone=' + phoneNumber;
        
        $('#appModal').modal('show');
      });
    });
  
    var closeButton = document.querySelector('#appModal .close');
    closeButton.addEventListener('click', function() {
      $('#appModal').modal('hide');
    });
  });

// окно для выбора номера телефона
document.addEventListener('DOMContentLoaded', function () {
    var viberNumbers = ['79152048084', '79151225443', '79169804510'];
    var whatsappNumbers = ['79152048084', '79151225443', '79169804510'];
    var telegramNumbers = ['79152048084', '79151225443', '79169804510'];

    function openPhoneModal(app) {
        var phoneList = document.getElementById('phoneList');
        phoneList.innerHTML = '';

        var numbers;
        var appLinkPrefix;
        if (app === 'viber') {
            numbers = viberNumbers;
            appLinkPrefix = 'viber://chat?number=';
        } else if (app === 'whatsapp') {
            numbers = whatsappNumbers;
            appLinkPrefix = 'https://wa.me/';
        } else if (app === 'telegram') {
            numbers = telegramNumbers;
            appLinkPrefix = 'tg://resolve?phone=';
        }

        numbers.forEach(function (number) {
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            link.href = appLinkPrefix + number;
            link.textContent = '+' + number;
            listItem.appendChild(link);
            phoneList.appendChild(listItem);
        });

        $('#phoneModal').modal('show');
    }

    document.getElementById('viberIcon').addEventListener('click', function () {
        openPhoneModal('viber');
    });

    document.getElementById('whatsappIcon').addEventListener('click', function () {
        openPhoneModal('whatsapp');
    });

    document.getElementById('telegramIcon').addEventListener('click', function () {
        openPhoneModal('telegram');
    });

    var closeButton = document.querySelector('#phoneModal .close');
    closeButton.addEventListener('click', function() {
        $('#phoneModal').modal('hide');
    });
});


  






