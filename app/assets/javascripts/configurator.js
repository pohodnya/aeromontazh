var
    brizerType = 'standart';
    climatControl = true;
    mount = false;
    hepa = true;
    ak = true;

function changeFilter(filterType) {
    tmpBrizerType = brizerType;

    if (filterType == 'hepa') {
        hepa = !hepa;
        if (hepa)
            switch (brizerType) {
                case 'base':
                    brizerType = 'baseHepa';
                    break;
                case 'baseAK':
                    brizerType = 'standart';
                    break;
                case 'lite':
                    brizerType = 'liteHepa';
                    break;
                case 'liteAK':
                    brizerType = 'liteHepaAK';
                    break;
            }
        else
            switch (brizerType) {
                case 'standart':
                    brizerType = 'baseAK';
                    break;
                case 'baseHepa':
                    brizerType = 'base';
                    break;
                case 'liteHepa':
                    brizerType = 'lite';
                    break;
                case 'liteHepaAK':
                    brizerType = 'liteAK';
                    break;
            }
        $('#aboutHepa').toggle(400);
    }
    else {
        ak = !ak;
        if (ak)
            switch (brizerType) {
                case 'base':
                    brizerType = 'baseAK';
                    break;
                case 'baseHepa':
                    brizerType = 'standart';
                    break;
                case 'lite':
                    brizerType = 'liteAK';
                    break;
                case 'liteHepa':
                    brizerType = 'liteHepaAK';
                    break;
            }
        else
            switch (brizerType) {
                case 'standart':
                    brizerType = 'baseHepa';
                    break;
                case 'baseAK':
                    brizerType = 'base';
                    break;
                case 'liteAK':
                    brizerType = 'lite';
                    break;
                case 'liteHepaAK':
                    brizerType = 'liteHepa';
                    break;
            }
        $('#aboutAk').toggle(400);
    }

    if (eval(filterType)) {
        $('#' + filterType).removeClass('black');
        $('#' + filterType + ' i').addClass('checkmark activate');
        $('#' + filterType).addClass('inverted blue active');
    }
    else {
        $('#' + filterType).removeClass('inverted blue active');
        $('#' + filterType + ' i').removeClass('checkmark activate');
        $('#' + filterType).addClass('black');
    }
    $('#' + tmpBrizerType).hide();
    $('#' + brizerType).show();
    changeDescription();
}

function changeClimat(flag) {
    if (flag != climatControl) {
        tmpBrizerType = brizerType;
        climatControl = !climatControl;
        if (climatControl) {
            $('#withoutHeater').removeClass('inverted blue active');
            $('#withoutHeater').addClass('black');
            $('#withHeater').removeClass('black');
            $('#withHeater').addClass('inverted blue heater');
            switch (brizerType) {
                case 'lite':
                    brizerType = 'base';
                    break;
                case 'liteHepa':
                    brizerType = 'baseHepa';
                    break;
                case 'liteAK':
                    brizerType = 'baseAK';
                    break;
                case 'liteHepaAK':
                    brizerType = 'standart';
                    break;
            }
            $('#aboutWithoutHeater').toggle(300);
            $('#aboutWithHeater').toggle(300);
        }
        else {
            $('#withoutHeater').addClass('inverted blue active');
            $('#withoutHeater').removeClass('black');
            $('#withHeater').addClass('black');
            $('#withHeater').removeClass('inverted blue heater');
            switch (brizerType) {
                case 'base':
                    brizerType = 'lite';
                    break;
                case 'baseHepa':
                    brizerType = 'liteHepa';
                    break;
                case 'baseAK':
                    brizerType = 'liteAK';
                    break;
                case 'standart':
                    brizerType = 'liteHepaAK';
                    break;
            }
            $('#aboutWithHeater').toggle(300);
            $('#aboutWithoutHeater').toggle(300);
        }
        $('#' + tmpBrizerType).hide();
        $('#' + brizerType).show();

    }
    changeDescription();
}

function changeMount(flag) {
    if (flag != mount) {
        mount = !mount;
        if (mount) {
            $('#withoutMount').removeClass('inverted blue active');
            $('#withoutMount').addClass('black');
            $('#withMount').removeClass('black');
            $('#withMount').addClass('inverted blue active');
        }
        else
        {
            $('#withoutMount').addClass('inverted blue active');
            $('#withoutMount').removeClass('black');
            $('#withMount').addClass('black');
            $('#withMount').removeClass('inverted blue active');
        }
    }

}

function changeDescription() {

}