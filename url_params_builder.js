// Строим url-строку с параметрами запроса
$( document ).ready(function() {
    $('.params').click(function (e) {
        e.preventDefault();
        let param = $(this).attr("href");
        let a = param.split('=');
        let key = a[0];
        let val = a[1];
        let url = window.location.href;
        let arr = url.split('?');

        if(arr.length === 1) {
            return url + '?' + key + '=' + val;
        }
        else if(arr.length === 2) {
            let params = arr[1].split('&');
            let p = {};
            let a = [];
            let strarr = [];
            $.each(params, function(index, element) {
                a = element.split('=');
                p[a[0]] = a[1];
            })
            p[key] = val;
            for(let o in p) {
                strarr.push(o + '=' + p[o]);
            }
            let str = strarr.join('&');
            url = arr[0] + '?' + str;
        }
        window.location.href = url;
    });
});
